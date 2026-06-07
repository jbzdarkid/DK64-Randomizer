"""Convert DK64 Randomizer settings strings into CB Calculator JS presets.

The CB Calculator (cb_calculator.html in theballaam96.github.io) describes its
presets as ``Preset`` objects with the signature::

    new Preset(name, key, barriers, cb_requirement, galleon_water, fungi_time)

This script decodes one or more settings strings and emits the matching
JavaScript ``Preset`` definitions so they can be pasted straight into the
calculator.

Usage:
    python tools/settings_string_to_cb_preset.py "<settings_string>" [more strings...]
    python tools/settings_string_to_cb_preset.py --name "Season 5 Candidate 1" --key s5can1 "<settings_string>"

If multiple strings are supplied without explicit ``--name``/``--key`` values,
the presets are auto-numbered.
"""

import argparse
import os
import sys

# Allow running the script directly from the repo root or the tools directory.
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from randomizer.Enums.Items import Items
from randomizer.Enums.Settings import ActivateAllBananaports, FungiTimeSetting, GalleonWaterSetting, ItemRandoListSelected, RemovedBarriersSelected
from randomizer.SettingStrings import decrypt_settings_string_enum

# Maps a removed-barrier enum to the matching CB Calculator switch id.
# Barriers without a CB Calculator switch (e.g. helm gates) are intentionally omitted.
BARRIER_TO_SWITCH = {
    RemovedBarriersSelected.japes_coconut_gates: "switchJapesCoconut",
    RemovedBarriersSelected.japes_shellhive_gate: "switchJapesShellhive",
    RemovedBarriersSelected.aztec_tunnel_door: "switchAztecTunnel",
    RemovedBarriersSelected.aztec_5dtemple_switches: "switchAztec5DT",
    RemovedBarriersSelected.aztec_llama_switches: "switchAztecLlama",
    RemovedBarriersSelected.factory_production_room: "switchFactoryProd",
    RemovedBarriersSelected.factory_testing_gate: "switchFactoryTesting",
    RemovedBarriersSelected.galleon_lighthouse_gate: "switchGalleonLighthouse",
    RemovedBarriersSelected.galleon_shipyard_area_gate: "switchGalleonShipyard",
    RemovedBarriersSelected.castle_crypt_doors: "switchCryptDoors",
    RemovedBarriersSelected.galleon_seasick_ship: "switchGalleonSeasick",
    RemovedBarriersSelected.forest_green_tunnel: "switchForestGreen",
    RemovedBarriersSelected.forest_yellow_tunnel: "switchForestYellow",
    RemovedBarriersSelected.caves_igloo_pads: "switchCavesIgloo",
    RemovedBarriersSelected.caves_ice_walls: "switchCavesWalls",
    RemovedBarriersSelected.galleon_treasure_room: "switchGalleonTreasure",
    RemovedBarriersSelected.aztec_tiny_temple_ice: "switchAztecIce",
}

GALLEON_WATER_NAMES = {
    GalleonWaterSetting.lowered: "Low",
    GalleonWaterSetting.raised: "High",
}

FUNGI_TIME_NAMES = {
    FungiTimeSetting.day: "Day",
    FungiTimeSetting.night: "Night",
    FungiTimeSetting.dusk: "Dusk",
    FungiTimeSetting.progressive: "Progressive",
}


def _is_guaranteed_starting_move(settings: dict, move) -> bool:
    """Return True if a move is guaranteed to be a starting move.

    Starting moves are partitioned into buckets (``starting_moves_list_1`` ...
    ``starting_moves_list_5``), each with a corresponding count
    (``starting_moves_list_count_1`` ...). All items in a bucket are guaranteed
    to start only when the count is at least the bucket size; otherwise a random
    subset is chosen and the move is not guaranteed.

    Args:
        settings: The decoded settings dictionary.
        move: The item enum to look for.

    Returns:
        True if the move is always granted at the start of the seed.
    """
    for index in range(1, 6):
        bucket = settings.get(f"starting_moves_list_{index}", [])
        if move in bucket:
            count = settings.get(f"starting_moves_list_count_{index}", 0)
            return count >= len(bucket)
    return False


# ItemRandoListSelected values that place logically-relevant (progression) items.
# A medal check only matters if its paired item pool can hold one of these; if it can
# only ever receive junk (rainbow coins, hints, dummy/junk items) then nobody routes to
# it and its CB requirement is irrelevant.
PROGRESSION_ITEM_SELECTORS = {
    ItemRandoListSelected.moves,
    ItemRandoListSelected.shockwave,
    ItemRandoListSelected.key,
    ItemRandoListSelected.kong,
    ItemRandoListSelected.shopowners,
    ItemRandoListSelected.trainingmoves,
}


def _medal_type_carries_progression(settings: dict, check_selector) -> bool:
    """Return True if a medal-type check can receive a progression item.

    Item rando is split into paired pools: pool ``i`` places the items listed in
    ``item_rando_list_{i}`` onto the check locations listed in ``item_rando_list_{i + 5}``
    (pools 0-4). A medal check therefore only matters if any pool that contains it as a
    check is paired with an item list holding a progression item.

    Args:
        settings: The decoded settings dictionary.
        check_selector: The ``ItemRandoListSelected`` check value (e.g. ``medal_checks``
            or ``halfmedal``).

    Returns:
        True if the medal check can ever hold a logically-relevant item.
    """
    for pool_index in range(5):
        check_list = settings.get(f"item_rando_list_{pool_index + 5}", [])
        if check_selector in check_list:
            item_list = settings.get(f"item_rando_list_{pool_index}", [])
            if any(item in PROGRESSION_ITEM_SELECTORS for item in item_list):
                return True
    return False


def _resolve_cb_requirement(settings: dict, name: str) -> int:
    """Return the effective CB requirement for the relevant medal-type check.

    Half-medal checks only need ``max(1, medal_cb_req >> 1)`` CBs. A medal check is only
    relevant if it can hold a progression item; medal checks that only ever receive junk
    (e.g. rainbow coins) are ignored. If only one medal type is relevant we use its
    requirement; if both are relevant the choice is ambiguous and the user is asked.

    Args:
        settings: The decoded settings dictionary.
        name: The preset name, used to make the prompt clearer.

    Returns:
        The CB requirement to encode in the preset.
    """
    medal_cb_req = settings.get("medal_cb_req")
    half_value = max(1, medal_cb_req >> 1)
    full_matters = _medal_type_carries_progression(settings, ItemRandoListSelected.medal_checks)
    half_matters = _medal_type_carries_progression(settings, ItemRandoListSelected.halfmedal)

    if half_matters and not full_matters:
        return half_value
    if full_matters and not half_matters:
        return medal_cb_req
    if full_matters and half_matters:
        while True:
            answer = input(f'"{name}" has progression items on both full and half medals. Use (f)ull {medal_cb_req} or (h)alf {half_value}? ').strip().lower()
            if answer in ("f", "full"):
                return medal_cb_req
            if answer in ("h", "half"):
                return half_value
    # No medal check carries progression; the requirement is irrelevant, default to full.
    return medal_cb_req


def settings_string_to_preset(settings_string: str, name: str, key: str) -> str:
    """Decode a settings string and return a CB Calculator JS ``Preset`` definition.

    Args:
        settings_string: The encoded DK64 Randomizer settings string.
        name: Human-readable preset name shown in the calculator dropdown.
        key: Short unique preset key used internally by the calculator.

    Returns:
        A JavaScript ``new Preset(...)`` expression as a string.
    """
    settings = decrypt_settings_string_enum(settings_string)

    barriers = settings.get("remove_barriers_selected", [])
    switches = [BARRIER_TO_SWITCH[barrier] for barrier in barriers if barrier in BARRIER_TO_SWITCH]

    # Climbing is a barrier in the calculator, but in rando it is tracked as a starting move.
    # Each starting-move bucket only guarantees its contents when count >= len(bucket); if the
    # bucket is larger than its count, only a random subset starts, so climbing is not guaranteed.
    if _is_guaranteed_starting_move(settings, Items.Climbing):
        switches.append("switchClimbing")

    # All warps preactivated is a barrier in the calculator. Only the ``all`` setting
    # preactivates the in-level warp pads that the CB calculator cares about; the
    # ``isles``/``isles_inc_helm_lobby`` options only affect Isles and so do not apply.
    if settings.get("activate_all_bananaports") == ActivateAllBananaports.all:
        switches.append("switchAllWarps")

    # Half-medal checks only need half the medal CB requirement. Resolve which medal-type
    # check is the cheapest available, prompting the user if both kinds are present.
    cb_requirement = _resolve_cb_requirement(settings, name)
    galleon_water = GALLEON_WATER_NAMES.get(GalleonWaterSetting(settings.get("galleon_water")), "Low")
    fungi_time = FUNGI_TIME_NAMES.get(FungiTimeSetting(settings.get("fungi_time")), "Day")

    barrier_lines = "\n".join(f'                    "{switch}",' for switch in switches)
    return (
        f'                static {key} = new Preset("{name}", "{key}", [\n'
        f"{barrier_lines}\n"
        f'                ], {cb_requirement}, "{galleon_water}", "{fungi_time}");'
    )


def main():
    """Parse arguments and print the generated presets."""
    parser = argparse.ArgumentParser(description="Convert DK64 settings strings into CB Calculator JS presets.")
    parser.add_argument("settings_strings", nargs="+", help="One or more encoded settings strings.")
    parser.add_argument("--name", help="Preset name (only valid with a single settings string).")
    parser.add_argument("--key", help="Preset key (only valid with a single settings string).")
    args = parser.parse_args()

    if (args.name or args.key) and len(args.settings_strings) != 1:
        parser.error("--name/--key may only be used with a single settings string.")

    for index, settings_string in enumerate(args.settings_strings, start=1):
        name = args.name or f"Season 5 Candidate {index}"
        key = args.key or f"s5can{index}"
        print(settings_string_to_preset(settings_string, name, key))


if __name__ == "__main__":
    main()
