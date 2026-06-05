const requirement_data = {
    "Japes": {
        "All Kongs": [
            new Location('Japes Battle Arena (Near Low Hill Shop)', [
                [Moves.ClimbingCheck],
                [Moves.AllWarps],
            ]),
            new Location('Japes Crate (Behind the Mountain)', [
                [Moves.ClimbingCheck],
                [Moves.AllWarps],
            ]),
            new Location('Japes in Front of Diddy Cage', [
                [Moves.ClimbingCheck],
                [Moves.AllWarps],
            ]),
            new Location('Japes Donkey Baboon Blast', [[Moves.Vines, Moves.ClimbingCheck, Moves.Blast]]),
            new Location('Japes Dirt (On Painting Hill)', [
                [Moves.Orangstand],
                [Moves.ClimbingCheck, Moves.Twirl],
            ]),
            new Location('Japes Free Diddy Item', [
                [Moves.ClimbingCheck, Moves.JapesCoconut],
                [Moves.AllWarps, Moves.JapesCoconut],
            ]),
            new Location('Japes Boss Defeated', [
                [Moves.Peanut],
                [Moves.Vines, Moves.ClimbingCheck],
                [Moves.Coconut, Moves.JapesCoconut],
            ]),
            new Location('Japes Diddy Minecart', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Peanut, Moves.Charge],
                [Moves.LevelSlam, Moves.Peanut, Moves.Charge, Moves.AllWarps],
            ]),
            new Location('Japes Chunky Giant Bonus Barrel', [
                [Moves.ClimbingCheck, Moves.Peanut, Moves.Hunky, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Hunky, Moves.JapesCoconut, Moves.JapesShellhive],
            ]),
            new Location('Japes Lanky Painting Room Zingers', [
                [Moves.Slam, Moves.Peanut, Moves.Grape, Moves.Orangstand],
                [Moves.Slam, Moves.Peanut, Moves.Trombone, Moves.Orangstand],
                [Moves.ClimbingCheck, Moves.Slam, Moves.Peanut, Moves.Grape, Moves.Twirl],
                [Moves.ClimbingCheck, Moves.Slam, Moves.Peanut, Moves.Trombone, Moves.Twirl],
            ]),
            new Location('Japes Fairy (Painting Room)', [
                [Moves.Slam, Moves.Camera, Moves.Peanut, Moves.Grape, Moves.Orangstand],
                [Moves.Slam, Moves.Camera, Moves.Peanut, Moves.Trombone, Moves.Orangstand],
                [Moves.ClimbingCheck, Moves.Slam, Moves.Camera, Moves.Peanut, Moves.Grape, Moves.Twirl],
                [Moves.ClimbingCheck, Moves.Slam, Moves.Camera, Moves.Peanut, Moves.Trombone, Moves.Twirl],
            ]),
        ],
    },
    "Aztec": {
        "All Kongs": [
            new Location('Aztec Kasplat: On Tiny Temple', [[Moves.ClimbingCheck, Moves.Rocket]]),
        ],
    },
    "Factory": {
        "All Kongs": [
            new Location('Factory Crate (Testing Shop Entrance Right)', [
                [Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.FactoryTesting],
            ]),
            new Location('Factory Kasplat: Block Tower', [
                [Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.FactoryTesting],
            ]),
            new Location('Factory Tiny Mini by Arcade', [
                [Moves.ClimbingCheck, Moves.Mini],
                [Moves.Mini, Moves.AllWarps],
            ]),
            new Location('Factory Chunky Barrel by Arcade', [
                [Moves.ClimbingCheck, Moves.Punch],
                [Moves.Punch, Moves.AllWarps],
            ]),
            new Location('Factory Kasplat: Upper Production Pipe', [
                [Moves.ClimbingCheck, Moves.FactoryProduction],
                [Moves.AllWarps, Moves.FactoryProduction],
            ]),
            new Location('Factory Fairy (Number Game)', [
                [Moves.Camera, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Camera, Moves.FactoryTesting],
            ]),
            new Location('Factory Diddy Block Tower', [
                [Moves.Spring, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Spring, Moves.FactoryTesting],
            ]),
            new Location('Factory Lanky Testing Room Barrel', [
                [Moves.Balloon, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Balloon, Moves.FactoryTesting],
            ]),
            new Location('Factory Tiny Car Race', [
                [Moves.Mini, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Mini, Moves.FactoryTesting],
            ]),
            new Location('Factory Lanky Piano Game', [
                [Moves.LevelSlam, Moves.Trombone, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Trombone, Moves.FactoryTesting],
            ]),
            new Location('Factory Donkey Number Game', [
                [Moves.LevelSlam, Moves.IsDonkey, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsDonkey, Moves.FactoryTesting],
            ]),
            new Location('Factory Diddy Charge Enemies', [
                [Moves.Guitar, Moves.Charge, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Guitar, Moves.Charge, Moves.FactoryTesting],
            ]),
            new Location('Factory Kasplat: R&D', [
                [Moves.ClimbingCheck, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.FactoryTesting],
                [Moves.IsDiddy, Moves.AllWarps],
                [Moves.IsTiny, Moves.AllWarps],
            ]),
            new Location('Factory Diddy Storage Room Barrel', [
                [Moves.Vines, Moves.LevelSlam, Moves.IsDiddy, Moves.AllWarps],
                [Moves.Vines, Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsDiddy, Moves.FactoryTesting],
            ]),
            new Location('Factory Battle Arena (Under R&D Grate)', [
                [Moves.ClimbingCheck, Moves.Grab, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.Grab, Moves.FactoryTesting],
                [Moves.Grab, Moves.IsDiddy, Moves.AllWarps],
                [Moves.Grab, Moves.IsTiny, Moves.AllWarps],
            ]),
            new Location('Factory Donkey Power Hut', [
                [Moves.ClimbingCheck, Moves.Coconut, Moves.AllWarps, Moves.FactoryProduction],
                [Moves.ClimbingCheck, Moves.Coconut, Moves.FactoryTesting, Moves.FactoryProduction],
                [Moves.Coconut, Moves.IsDiddy, Moves.AllWarps, Moves.FactoryProduction],
                [Moves.Coconut, Moves.IsTiny, Moves.AllWarps, Moves.FactoryProduction],
            ]),
        ],
    },
    "Galleon": {
        "All Kongs": [
            new Location('Galleon Dirt (Lighthouse: Interior Rear)', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.RaisedWater],
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsDonkey, Moves.AllWarps],
            ]),
            new Location('Galleon Donkey Lighthouse', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Grab, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Grab, Moves.RaisedWater],
            ]),
            new Location('Galleon Diddy Top of Lighthouse', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Grab, Moves.Rocket, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Grab, Moves.Rocket, Moves.RaisedWater],
            ]),
            new Location('Galleon Chunky Seasick', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Grab, Moves.Punch, Moves.AllWarps],
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Grab, Moves.Punch, Moves.RaisedWater],
            ]),
        ],
    },
    "Fungi": {
        "All Kongs": [
            new Location('Forest Tiny Mushroom Barrel', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsTiny]]),
            new Location('Forest Battle Arena (Mushroom Exterior Top Ladder)', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.AllWarps],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Kasplat: Inside Giant Mushroom', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.AllWarps],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Kasplat: Mushroom Exterior Lower Floor', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.AllWarps],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Kasplat: Mushroom Exterior Night Door', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.AllWarps],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Donkey Thornvine Barn Barrel', [[Moves.Vines, Moves.ClimbingCheck, Moves.LevelSlam, Moves.Strong, Moves.Night]]),
            new Location('Forest Fairy (Thornvine Barn)', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Camera, Moves.Strong, Moves.Night]]),
            new Location('Forest Boss Defeated', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.AllWarps],
                [Moves.Night],
                [Moves.Day],
                [Moves.ForestYellowTunnel],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Lanky Attic Shooting', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Homing, Moves.Grape],
                [Moves.LevelSlam, Moves.Homing, Moves.Grape, Moves.Balloon],
            ]),
            new Location('Forest Donkey Baboon Blast', [
                [Moves.ClimbingCheck, Moves.Blast],
                [Moves.Blast, Moves.Rocket],
                [Moves.Blast, Moves.AllWarps],
                [Moves.Blast, Moves.CheckOfLegends],
            ]),
            new Location('Forest Chunky Face Puzzle', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Pineapple],
                [Moves.LevelSlam, Moves.Rocket, Moves.Pineapple],
                [Moves.LevelSlam, Moves.Pineapple, Moves.AllWarps],
                [Moves.LevelSlam, Moves.Pineapple, Moves.CheckOfLegends],
            ]),
            new Location('Forest Lanky Colored Mushroom Slam', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Orangstand],
                [Moves.LevelSlam, Moves.Orangstand, Moves.AllWarps],
                [Moves.LevelSlam, Moves.Orangstand, Moves.CheckOfLegends],
                [Moves.LevelSlam, Moves.Rocket, Moves.Lanky, Moves.IsLanky],
            ]),
            new Location('Forest Lanky Zinger Bounce', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Orangstand],
                [Moves.LevelSlam, Moves.Orangstand, Moves.AllWarps],
                [Moves.LevelSlam, Moves.Orangstand, Moves.CheckOfLegends],
                [Moves.LevelSlam, Moves.Rocket, Moves.Lanky, Moves.IsLanky],
            ]),
        ],
    },
    "Caves": {
        "All Kongs": [
        ],
    },
    "Castle": {
        "All Kongs": [
        ],
    },
}


Japes:
DK: 51
Diddy: 67
Lanky: 15
Tiny: 5
Chunky: 35


Aztec: Climbing is only important because of the AztecGuitarPad (for CB logic)
Except chunky -> Only 36 GBs locked
DK: 15
Diddy: 15
Lanky: 25
Tiny: 25
Chunky: 0

Galleon:
DK: 30
Diddy: 0
Lanky: 0
Tiny: 0
Chunky: 25
