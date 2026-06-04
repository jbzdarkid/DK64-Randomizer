const requirement_data = {
    "Japes": {
        "All Kongs": [
            new Location('Japes Battle Arena (Near Low Hill Shop)', [[Moves.ClimbingCheck]]),
            new Location('Japes Crate (Behind the Mountain)', [[Moves.ClimbingCheck]]),
            new Location('Japes in Front of Diddy Cage', [[Moves.ClimbingCheck]]),
            new Location('Japes Free Diddy Item', [[Moves.ClimbingCheck, Moves.JapesCoconut]]),
            new Location('Japes Donkey Baboon Blast', [[Moves.Vines, Moves.ClimbingCheck, Moves.Blast]]),
            new Location('Japes Diddy Top of Mountain', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Peanut]]),
            new Location('Japes Dirt (On Painting Hill)', [
                [Moves.Orangstand],
                [Moves.ClimbingCheck, Moves.Twirl],
            ]),
            new Location('Japes Diddy Minecart', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Peanut, Moves.Charge]]),
            new Location('Japes Chunky Giant Bonus Barrel', [[Moves.ClimbingCheck, Moves.Hunky, Moves.JapesCoconut, Moves.JapesShellhive]]),
            new Location('Japes Diddy Timed Cage Banana', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Diddy, Moves.JapesCoconut]]),
            new Location('Japes Lanky Timed Cage Banana', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Lanky, Moves.JapesCoconut]]),
            new Location('Japes Boss Defeated', [
                [Moves.Peanut],
                [Moves.Vines, Moves.ClimbingCheck],
                [Moves.Coconut, Moves.JapesCoconut],
            ]),
            new Location('Japes Chunky Timed Cage Banana', [[Moves.Barrels, Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Chunky, Moves.JapesCoconut]]),
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
            new Location('Factory Tiny Mini by Arcade', [[Moves.ClimbingCheck, Moves.Mini]]),
            new Location('Factory Chunky Barrel by Arcade', [[Moves.ClimbingCheck, Moves.Punch]]),
            new Location('Factory Crate (Testing Shop Entrance Right)', [[Moves.ClimbingCheck, Moves.FactoryTesting]]),
            new Location('Factory Kasplat: Block Tower', [[Moves.ClimbingCheck, Moves.FactoryTesting]]),
            new Location('Factory Kasplat: R&D', [[Moves.ClimbingCheck, Moves.FactoryTesting]]),
            new Location('Factory Kasplat: Upper Production Pipe', [[Moves.ClimbingCheck, Moves.FactoryProduction]]),
            new Location('Factory Fairy (Number Game)', [[Moves.ClimbingCheck, Moves.Camera, Moves.FactoryTesting]]),
            new Location('Factory Donkey DK Arcade Round 1', [[Moves.ClimbingCheck, Moves.Grab, Moves.Blast]]),
            new Location('Factory Battle Arena (Under R&D Grate)', [[Moves.ClimbingCheck, Moves.Grab, Moves.FactoryTesting]]),
            new Location('Factory Diddy Block Tower', [[Moves.ClimbingCheck, Moves.Spring, Moves.FactoryTesting]]),
            new Location('Factory Lanky Testing Room Barrel', [[Moves.ClimbingCheck, Moves.Balloon, Moves.FactoryTesting]]),
            new Location('Factory Tiny Car Race', [[Moves.ClimbingCheck, Moves.Mini, Moves.FactoryTesting]]),
            new Location('Factory Diddy Production Spring', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Spring, Moves.FactoryProduction]]),
            new Location('Factory Lanky Piano Game', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Trombone, Moves.FactoryTesting]]),
            new Location('Factory Lanky Production Handstand', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Orangstand, Moves.FactoryProduction]]),
            new Location('Factory Tiny Production Twirl', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Twirl, Moves.FactoryProduction]]),
            new Location('Factory Chunky Production Timer', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Chunky, Moves.FactoryProduction]]),
            new Location('Factory Donkey Number Game', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsDonkey, Moves.FactoryTesting]]),
            new Location('Factory Donkey Power Hut', [[Moves.ClimbingCheck, Moves.Coconut, Moves.FactoryTesting, Moves.FactoryProduction]]),
            new Location('Factory Diddy Charge Enemies', [[Moves.ClimbingCheck, Moves.Guitar, Moves.Charge, Moves.FactoryTesting]]),
            new Location('Factory Diddy Storage Room Barrel', [[Moves.Vines, Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsDiddy, Moves.FactoryTesting]]),
            new Location('Factory Tiny Dartboard', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Feather, Moves.Mini, Moves.FactoryTesting]]),
            new Location('Factory Fairy (Testing Shop)', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Camera, Moves.Feather, Moves.Mini, Moves.FactoryTesting]]),
        ],
    },
    "Galleon": {
        "All Kongs": [
            new Location('Galleon Dirt (Lighthouse: Interior Rear)', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.RaisedWater]]),
            new Location('Galleon Donkey Lighthouse', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Grab, Moves.RaisedWater]]),
            new Location('Galleon Diddy Top of Lighthouse', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Grab, Moves.Rocket, Moves.RaisedWater]]),
            new Location('Galleon Chunky Seasick', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Coconut, Moves.Grab, Moves.Punch, Moves.RaisedWater]]),
        ],
    },
    "Fungi": {
        "All Kongs": [
            new Location('Forest Tiny Mushroom Barrel', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.IsTiny]]),
            new Location('Forest Battle Arena (Mushroom Exterior Top Ladder)', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Kasplat: Inside Giant Mushroom', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Kasplat: Mushroom Exterior Lower Floor', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Kasplat: Mushroom Exterior Night Door', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Donkey Thornvine Barn Barrel', [[Moves.Vines, Moves.ClimbingCheck, Moves.LevelSlam, Moves.Strong, Moves.Night]]),
            new Location('Forest Fairy (Thornvine Barn)', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Camera, Moves.Strong, Moves.Night]]),
            new Location('Forest Diddy Winch Cage', [[Moves.ClimbingCheck, Moves.LevelSlam, Moves.Peanut, Moves.Guitar, Moves.Charge]]),
            new Location('Forest Donkey Baboon Blast', [
                [Moves.ClimbingCheck, Moves.Blast],
                [Moves.Blast, Moves.Rocket],
                [Moves.Blast, Moves.CheckOfLegends],
            ]),
            new Location('Forest Boss Defeated', [
                [Moves.ClimbingCheck],
                [Moves.Rocket],
                [Moves.Night],
                [Moves.Day],
                [Moves.ForestYellowTunnel],
                [Moves.CheckOfLegends],
            ]),
            new Location('Forest Lanky Attic Shooting', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Homing, Moves.Grape],
                [Moves.LevelSlam, Moves.Homing, Moves.Grape, Moves.Balloon],
            ]),
            new Location('Forest Chunky Face Puzzle', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Pineapple],
                [Moves.LevelSlam, Moves.Rocket, Moves.Pineapple],
                [Moves.LevelSlam, Moves.Pineapple, Moves.CheckOfLegends],
            ]),
            new Location('Forest Lanky Colored Mushroom Slam', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Orangstand],
                [Moves.LevelSlam, Moves.Orangstand, Moves.CheckOfLegends],
                [Moves.LevelSlam, Moves.Rocket, Moves.Lanky, Moves.IsLanky],
            ]),
            new Location('Forest Lanky Zinger Bounce', [
                [Moves.ClimbingCheck, Moves.LevelSlam, Moves.Orangstand],
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
