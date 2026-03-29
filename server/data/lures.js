export const lures = [
  // === SOFT PLASTICS ===
  {
    id: "senko-5inch",
    name: "Yamamoto Senko 5\"",
    brand: "Gary Yamamoto",
    category: "soft-plastic",
    type: "Stick Bait",
    image: "/lures/senko.svg",
    colors: ["Green Pumpkin", "Watermelon", "Black/Blue", "Baby Bass"],
    depthRange: { min: 0, max: 15 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "The quintessential finesse bait. Falls horizontally with a subtle shimmy that bass can't resist. Works in almost any condition.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "post-front", "calm", "sunny"],
      season: ["spring", "summer", "fall"],
      activity: ["low", "moderate"]
    },
    techniques: ["wacky rig", "Texas rig", "Neko rig", "weightless"],
    weight: "3/8 oz"
  },
  {
    id: "zoom-trick-worm",
    name: "Zoom Trick Worm 6.75\"",
    brand: "Zoom",
    category: "soft-plastic",
    type: "Finesse Worm",
    image: "/lures/trick-worm.svg",
    colors: ["Green Pumpkin", "Junebug", "Red Shad", "Watermelon Red"],
    depthRange: { min: 0, max: 20 },
    idealWaterTemp: { min: 50, max: 85 },
    description: "Versatile finesse worm with a subtle tail action. Deadly on a shaky head or drop shot when bass are finicky.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["post-front", "high-pressure", "calm"],
      season: ["spring", "summer", "fall", "winter"],
      activity: ["low"]
    },
    techniques: ["shaky head", "drop shot", "wacky rig", "Neko rig"],
    weight: "1/4 oz"
  },
  {
    id: "rage-craw",
    name: "Strike King Rage Craw",
    brand: "Strike King",
    category: "soft-plastic",
    type: "Creature Bait",
    image: "/lures/rage-craw.svg",
    colors: ["Black/Blue", "Green Pumpkin", "Bama Craw", "Summer Craw"],
    depthRange: { min: 2, max: 25 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Aggressive craw imitation with wild flapping claws. Creates heavy vibration and water displacement that triggers strikes in stained water.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "pre-front"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["jig trailer", "Texas rig", "flipping", "punching"],
    weight: "1/2 oz"
  },
  {
    id: "brush-hog",
    name: "Zoom Brush Hog",
    brand: "Zoom",
    category: "soft-plastic",
    type: "Creature Bait",
    image: "/lures/brush-hog.svg",
    colors: ["Green Pumpkin", "Watermelon Red", "Black/Blue", "Tilapia"],
    depthRange: { min: 2, max: 20 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Multi-appendage creature bait that displaces water and triggers reaction bites. A go-to for flipping heavy cover.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["Texas rig", "Carolina rig", "flipping", "pitching"],
    weight: "3/8 oz"
  },
  {
    id: "ned-rig-trd",
    name: "Z-Man TRD (The Real Deal)",
    brand: "Z-Man",
    category: "soft-plastic",
    type: "Ned Rig Bait",
    image: "/lures/ned-trd.svg",
    colors: ["Green Pumpkin", "Coppertreuse", "Bama Bug", "Mud Minnow"],
    depthRange: { min: 2, max: 20 },
    idealWaterTemp: { min: 45, max: 80 },
    description: "The ultimate finesse bait for tough days. Buoyant ElaZtech material stands up off the bottom on a mushroom head jig, tempting even lockjaw bass.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["post-front", "high-pressure", "cold", "bluebird"],
      season: ["spring", "summer", "fall", "winter"],
      activity: ["low"]
    },
    techniques: ["ned rig", "drag on bottom", "light shake"],
    weight: "1/8 oz"
  },
  {
    id: "berkley-powerbait-ribbon-tail",
    name: "Berkley PowerBait Ribbon Tail Worm 10\"",
    brand: "Berkley",
    category: "soft-plastic",
    type: "Ribbon Tail Worm",
    image: "/lures/powerbait-ribbon.svg",
    colors: ["Plum", "Green Pumpkin", "Junebug", "Red Shad"],
    depthRange: { min: 5, max: 25 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Long ribbon tail creates a slow undulating action that big bass love. PowerBait scent formula gives fish a reason to hold on longer.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "warm", "stable"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate"]
    },
    techniques: ["Texas rig", "Carolina rig", "deep cranking worm"],
    weight: "3/8 oz"
  },
  {
    id: "zoom-fluke",
    name: "Zoom Super Fluke 5\"",
    brand: "Zoom",
    category: "soft-plastic",
    type: "Jerkbait Soft Plastic",
    image: "/lures/zoom-fluke.svg",
    colors: ["Pearl White", "Smokin Shad", "Watermelon Pearl", "Albino"],
    depthRange: { min: 0, max: 8 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Soft jerkbait that darts erratically on a twitch. Deadly for bass feeding on shad near the surface, especially over submerged grass.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["calm", "overcast", "sunny"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["weightless jerk", "Texas rig twitch", "swim on jighead"],
    weight: "1/4 oz"
  },
  {
    id: "roboworm-straight-tail",
    name: "Roboworm Straight Tail Worm 6\"",
    brand: "Roboworm",
    category: "soft-plastic",
    type: "Finesse Worm",
    image: "/lures/roboworm-straight.svg",
    colors: ["Aaron's Morning Dawn", "Margarita Mutilator", "Bold Bluegill", "Hologram Shad"],
    depthRange: { min: 5, max: 30 },
    idealWaterTemp: { min: 45, max: 75 },
    description: "Premium hand-poured drop shot worm with incredibly lifelike action. The go-to finesse worm on pressured fisheries and clear water lakes.",
    bestConditions: {
      waterClarity: ["clear"],
      weather: ["high-pressure", "post-front", "bluebird", "calm"],
      season: ["spring", "summer", "fall", "winter"],
      activity: ["low"]
    },
    techniques: ["drop shot", "shaky head", "split shot rig"],
    weight: "1/8 oz"
  },
  {
    id: "missile-baits-d-bomb",
    name: "Missile Baits D Bomb",
    brand: "Missile Baits",
    category: "soft-plastic",
    type: "Creature Bait",
    image: "/lures/d-bomb.svg",
    colors: ["Bruiser", "Green Pumpkin Flash", "Candy Grass", "Super Bug"],
    depthRange: { min: 1, max: 15 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Compact creature bait with a dense body and flapping appendages. Perfect for flipping docks and laydowns where a smaller profile is key.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "warm", "windy"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["flipping", "pitching", "Texas rig", "jig trailer"],
    weight: "3/8 oz"
  },
  {
    id: "strike-king-rage-bug",
    name: "Strike King Rage Bug 4\"",
    brand: "Strike King",
    category: "soft-plastic",
    type: "Creature Bait",
    image: "/lures/rage-bug.svg",
    colors: ["Black/Blue Flake", "Bama Bug", "Green Pumpkin", "Summer Craw"],
    depthRange: { min: 1, max: 20 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Compact creature bait with Rage Tail technology for maximum flapping action. Outstanding as a jig trailer or standalone flipping bait.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["jig trailer", "Texas rig", "flipping", "Carolina rig"],
    weight: "5/16 oz"
  },
  {
    id: "yum-dinger",
    name: "YUM Dinger 5\"",
    brand: "YUM",
    category: "soft-plastic",
    type: "Stick Bait",
    image: "/lures/yum-dinger.svg",
    colors: ["Green Pumpkin Seed", "Watermelon Seed", "Bama Magic", "Black Neon"],
    depthRange: { min: 0, max: 15 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Salt-impregnated stick bait with a dense fall and subtle shimmy action. A cost-effective option that catches fish like premium stick baits.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "calm", "post-front"],
      season: ["spring", "summer", "fall"],
      activity: ["low", "moderate"]
    },
    techniques: ["wacky rig", "Texas rig", "Neko rig", "weightless"],
    weight: "3/8 oz"
  },
  {
    id: "gycb-tube",
    name: "Gene Larew Hoo Daddy 4\"",
    brand: "Gene Larew",
    category: "soft-plastic",
    type: "Tube Bait",
    image: "/lures/hoo-daddy.svg",
    colors: ["Green Pumpkin", "Watermelon", "Smoke Pepper", "Peanut Butter & Jelly"],
    depthRange: { min: 3, max: 25 },
    idealWaterTemp: { min: 45, max: 75 },
    description: "Classic tube bait with a spiraling fall that imitates a dying crawfish or sculpin. Effective dragged slowly over rocky bottoms for smallmouth and largemouth alike.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["post-front", "calm", "sunny"],
      season: ["spring", "summer", "fall"],
      activity: ["low", "moderate"]
    },
    techniques: ["tube jig", "Texas rig", "drag on bottom", "drop shot"],
    weight: "1/4 oz"
  },
  {
    id: "netbait-paca-chunk",
    name: "NetBait Paca Chunk",
    brand: "NetBait",
    category: "soft-plastic",
    type: "Chunk Trailer",
    image: "/lures/paca-chunk.svg",
    colors: ["Green Pumpkin", "Black/Blue", "Bama Craw", "Watermelon Red"],
    depthRange: { min: 2, max: 25 },
    idealWaterTemp: { min: 50, max: 80 },
    description: "Premium jig trailer with thick flapping claws that create serious water displacement. Adds bulk and action to any jig presentation.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["jig trailer", "Texas rig", "flipping"],
    weight: "3/8 oz"
  },

  // === CRANKBAITS ===
  {
    id: "squarebill-crankbait",
    name: "Strike King KVD Square Bill 1.5",
    brand: "Strike King",
    category: "crankbait",
    type: "Shallow Crankbait",
    image: "/lures/squarebill.svg",
    colors: ["Sexy Shad", "Chartreuse/White", "Bluegill", "Natural Bream"],
    depthRange: { min: 1, max: 5 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "The king of shallow cranking. Deflects off cover beautifully, triggering reaction strikes from bass holding near wood, rock, and riprap.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["slow roll", "burn and kill", "deflection cranking"],
    weight: "1/2 oz"
  },
  {
    id: "wiggle-wart",
    name: "Storm Wiggle Wart",
    brand: "Storm",
    category: "crankbait",
    type: "Medium Diving Crankbait",
    image: "/lures/wiggle-wart.svg",
    colors: ["Phantom Green Craw", "Crawfish", "Naturistic Perch", "Molting Craw"],
    depthRange: { min: 5, max: 12 },
    idealWaterTemp: { min: 45, max: 65 },
    description: "A legendary cold-water crankbait with a tight wobble. Excels in pre-spawn when bass are staging on rocky banks and transitions.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "stable", "cool"],
      season: ["winter", "spring"],
      activity: ["low", "moderate"]
    },
    techniques: ["slow roll", "yo-yo retrieve", "long cast and grind"],
    weight: "3/8 oz"
  },
  {
    id: "deep-crankbait-6xd",
    name: "Strike King 6XD",
    brand: "Strike King",
    category: "crankbait",
    type: "Deep Diving Crankbait",
    image: "/lures/6xd.svg",
    colors: ["Sexy Shad", "Chartreuse Sexy Shad", "Black Back Chartreuse"],
    depthRange: { min: 12, max: 20 },
    idealWaterTemp: { min: 60, max: 80 },
    description: "Reaches deep structure where summertime bass hold. Heavy enough to cast a mile and digs to 20 feet on long casts.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["sunny", "stable", "hot"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["long cast and grind", "slow roll over structure", "rip and pause"],
    weight: "1 oz"
  },
  {
    id: "rapala-dt-6",
    name: "Rapala DT 6",
    brand: "Rapala",
    category: "crankbait",
    type: "Medium Diving Crankbait",
    image: "/lures/rapala-dt6.svg",
    colors: ["Ike's Custom Ink", "Demon", "Old School", "Helsinki Shad"],
    depthRange: { min: 4, max: 6 },
    idealWaterTemp: { min: 50, max: 75 },
    description: "Thin balsa body generates maximum wobble at slow speeds. Dives to 6 feet and excels around shallow offshore structure and transition areas.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "stable", "cool"],
      season: ["spring", "fall"],
      activity: ["moderate"]
    },
    techniques: ["slow roll", "stop and go", "deflection cranking"],
    weight: "5/16 oz"
  },
  {
    id: "6th-sense-cloud-9-c10",
    name: "6th Sense Cloud 9 C10",
    brand: "6th Sense",
    category: "crankbait",
    type: "Shallow Crankbait",
    image: "/lures/cloud9-c10.svg",
    colors: ["Sexified Shad", "Backwater Bluegill", "Ghost Pro Shad", "Bream"],
    depthRange: { min: 2, max: 4 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Silent shallow-diving crankbait with a wide wobble. The flat-sided design produces erratic deflections off wood and rock, triggering reaction strikes.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "sunny", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["deflection cranking", "parallel banks", "steady retrieve"],
    weight: "1/2 oz"
  },
  {
    id: "strike-king-red-eye-shad",
    name: "Strike King Red Eye Shad",
    brand: "Strike King",
    category: "crankbait",
    type: "Lipless Crankbait",
    image: "/lures/red-eye-shad.svg",
    colors: ["Sexy Shad", "Chrome/Blue", "Rayburn Red Craw", "Gold/Black"],
    depthRange: { min: 2, max: 15 },
    idealWaterTemp: { min: 45, max: 75 },
    description: "Versatile lipless crankbait with a tight vibrating action and loud rattle. Exceptional for ripping through submerged grass to trigger reaction strikes.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["windy", "overcast", "cool"],
      season: ["winter", "spring", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["yo-yo over grass", "rip and pause", "steady retrieve", "burn and kill"],
    weight: "1/2 oz"
  },
  {
    id: "bill-lewis-rat-l-trap",
    name: "Bill Lewis Rat-L-Trap 1/2 oz",
    brand: "Bill Lewis",
    category: "crankbait",
    type: "Lipless Crankbait",
    image: "/lures/rat-l-trap.svg",
    colors: ["Chrome/Blue Back", "Crawdad", "Gold/Black", "Chartreuse/Blue"],
    depthRange: { min: 2, max: 15 },
    idealWaterTemp: { min: 45, max: 80 },
    description: "The original lipless crankbait that has been catching bass for decades. The loud BB rattle and tight shimmy call fish from a distance in stained water.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["windy", "overcast", "cool", "pre-front"],
      season: ["winter", "spring", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["steady retrieve", "yo-yo over grass", "rip through vegetation"],
    weight: "1/2 oz"
  },
  {
    id: "rapala-dt-16",
    name: "Rapala DT 16",
    brand: "Rapala",
    category: "crankbait",
    type: "Deep Diving Crankbait",
    image: "/lures/rapala-dt16.svg",
    colors: ["Dark Brown Crawdad", "Ike's Custom Ink", "Parrot", "Shad"],
    depthRange: { min: 10, max: 16 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Thin balsa body reaches the 16-foot zone with less effort than plastic-bodied deep divers. Excellent for targeting ledges and offshore humps.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["sunny", "stable", "hot"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["long cast and grind", "slow roll deep structure", "rip and pause"],
    weight: "3/4 oz"
  },
  {
    id: "lucky-craft-bds-4",
    name: "Lucky Craft BDS 4",
    brand: "Lucky Craft",
    category: "crankbait",
    type: "Medium Diving Crankbait",
    image: "/lures/lucky-craft-bds4.svg",
    colors: ["Chartreuse Shad", "MS American Shad", "Ghost Minnow", "TO Craw"],
    depthRange: { min: 5, max: 8 },
    idealWaterTemp: { min: 50, max: 75 },
    description: "Silent flat-sided crankbait with a tight wobble. The flat sides create flash while the silent design works wonders on pressured, clear-water bass.",
    bestConditions: {
      waterClarity: ["clear"],
      weather: ["overcast", "stable", "calm"],
      season: ["spring", "fall", "winter"],
      activity: ["low", "moderate"]
    },
    techniques: ["slow roll", "stop and go", "deflection cranking"],
    weight: "1/2 oz"
  },

  // === SPINNERBAITS ===
  {
    id: "war-eagle-spinnerbait",
    name: "War Eagle Screamin' Eagle",
    brand: "War Eagle",
    category: "spinnerbait",
    type: "Double Willow Spinnerbait",
    image: "/lures/war-eagle.svg",
    colors: ["White/Chartreuse", "Sexy Shad", "Blue Shad", "Spot Remover"],
    depthRange: { min: 1, max: 15 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Versatile spinnerbait with great blade flash and vibration. The double willow configuration excels in clearer water with a fast retrieve.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "windy", "partly-cloudy"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["slow roll", "burn and kill", "helicopter fall", "wake retrieve"],
    weight: "3/8 oz"
  },
  {
    id: "booyah-blade",
    name: "Booyah Blade",
    brand: "Booyah",
    category: "spinnerbait",
    type: "Colorado/Willow Spinnerbait",
    image: "/lures/booyah-blade.svg",
    colors: ["Chartreuse/White", "White", "Golden Shiner", "Bleeding Shad"],
    depthRange: { min: 2, max: 12 },
    idealWaterTemp: { min: 50, max: 75 },
    description: "A great all-around spinnerbait. The Colorado/Willow combo gives both thump and flash, making it effective in stained to muddy water.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "rain"],
      season: ["spring", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["slow roll", "bump the stump", "paralleling banks"],
    weight: "1/2 oz"
  },
  {
    id: "chatterbait-jackhammer",
    name: "Z-Man ChatterBait JackHammer",
    brand: "Z-Man",
    category: "spinnerbait",
    type: "Bladed Jig",
    image: "/lures/jackhammer.svg",
    colors: ["Green Pumpkin Shad", "Bluegill", "White", "Black/Blue"],
    depthRange: { min: 2, max: 10 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "The best bladed jig ever made. Tight vibration and erratic action through grass triggers savage strikes. A must-have for any bass angler.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "warm", "pre-front"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["steady retrieve through grass", "pump and reel", "slow roll"],
    weight: "3/8 oz"
  },
  {
    id: "nichols-pulsator",
    name: "Nichols Pulsator Double Willow",
    brand: "Nichols Lures",
    category: "spinnerbait",
    type: "Double Willow Spinnerbait",
    image: "/lures/pulsator.svg",
    colors: ["White/Chartreuse", "Smoke Shad", "Bluegill", "Fire Tiger"],
    depthRange: { min: 1, max: 15 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Hand-tied premium spinnerbait with perfectly tuned blades. The vibration and flash combo is outstanding for covering water and locating active bass.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "windy", "partly-cloudy"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["burn and kill", "slow roll", "wake retrieve"],
    weight: "1/2 oz"
  },
  {
    id: "strike-king-mini-king",
    name: "Strike King Mini-King Spinnerbait",
    brand: "Strike King",
    category: "spinnerbait",
    type: "Single Colorado Spinnerbait",
    image: "/lures/mini-king.svg",
    colors: ["White", "Chartreuse", "Black", "White/Chartreuse"],
    depthRange: { min: 1, max: 8 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Downsized spinnerbait that excels on pressured fish and small waters. The single Colorado blade thumps hard for its size and works great in muddy water.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "rain"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["slow roll", "parallel shallow banks", "helicopter fall along docks"],
    weight: "1/8 oz"
  },
  {
    id: "evergreen-d-zone",
    name: "Evergreen D-Zone Chatterbait",
    brand: "Evergreen",
    category: "spinnerbait",
    type: "Bladed Jig",
    image: "/lures/d-zone.svg",
    colors: ["Ayu", "Bluegill", "Chartreuse Shad", "Black/Blue"],
    depthRange: { min: 2, max: 10 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Japanese-designed bladed jig with a unique vibration pattern. The precision-stamped blade creates a different frequency that fires up bass that have seen other bladed jigs.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "warm", "windy"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["steady retrieve", "pump and reel through grass", "slow roll"],
    weight: "3/8 oz"
  },

  // === JIGS ===
  {
    id: "football-jig",
    name: "Strike King Tour Grade Football Jig",
    brand: "Strike King",
    category: "jig",
    type: "Football Jig",
    image: "/lures/football-jig.svg",
    colors: ["Green Pumpkin", "PB&J", "Bama Craw", "Black/Blue"],
    depthRange: { min: 8, max: 30 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "The go-to for dragging deep structure. The football-shaped head rocks side to side over rocks and gravel, perfectly imitating a crawfish.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["sunny", "stable", "post-front"],
      season: ["summer", "fall", "spring"],
      activity: ["low", "moderate"]
    },
    techniques: ["drag and hop", "stroke", "slow drag on bottom"],
    weight: "1/2 oz"
  },
  {
    id: "flipping-jig",
    name: "Z-Man CrossEyeZ Flipping Jig",
    brand: "Z-Man",
    category: "jig",
    type: "Flipping Jig",
    image: "/lures/flipping-jig.svg",
    colors: ["Black/Blue", "Green Pumpkin", "PB&J", "Texas Craw"],
    depthRange: { min: 0, max: 15 },
    idealWaterTemp: { min: 55, max: 85 },
    description: "Heavy-duty jig designed for punching through thick cover. Compact profile with a stout hook for wrestling bass out of vegetation.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "calm", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["flipping", "pitching", "punching mats"],
    weight: "1/2 oz"
  },
  {
    id: "swim-jig",
    name: "6th Sense Divine Swim Jig",
    brand: "6th Sense",
    category: "jig",
    type: "Swim Jig",
    image: "/lures/swim-jig.svg",
    colors: ["Bluegill", "White/Chartreuse", "Shad", "Green Pumpkin"],
    depthRange: { min: 1, max: 8 },
    idealWaterTemp: { min: 60, max: 85 },
    description: "Weedless swimming jig that glides through vegetation. Imitates baitfish or bluegill cruising through the shallows.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "warm", "partly-cloudy"],
      season: ["spring", "summer"],
      activity: ["moderate", "high"]
    },
    techniques: ["steady retrieve through grass", "swim and pause", "wake retrieve"],
    weight: "3/8 oz"
  },
  {
    id: "hack-attack-casting-jig",
    name: "Strike King Hack Attack Heavy Cover Jig",
    brand: "Strike King",
    category: "jig",
    type: "Casting Jig",
    image: "/lures/hack-attack-jig.svg",
    colors: ["Black/Blue", "Bama Craw", "Green Pumpkin Craw", "Peanut Butter & Jelly"],
    depthRange: { min: 2, max: 20 },
    idealWaterTemp: { min: 50, max: 80 },
    description: "Heavy-duty casting jig with a fiber weed guard for navigating cover. Versatile enough to pitch, flip, or cast around wood, docks, and rocks.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "windy", "warm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["pitch and flip", "cast and drag", "swimming through laydowns"],
    weight: "1/2 oz"
  },
  {
    id: "outkast-finesse-jig",
    name: "Outkast Tackle Finesse Jig",
    brand: "Outkast Tackle",
    category: "jig",
    type: "Finesse Jig",
    image: "/lures/outkast-finesse.svg",
    colors: ["PB&J", "Green Pumpkin", "Smoke Craw", "Brown/Purple"],
    depthRange: { min: 2, max: 15 },
    idealWaterTemp: { min: 45, max: 75 },
    description: "Lightweight finesse jig with a compact profile for pressured bass. Slips through sparse cover and tempts bites when bass refuse bigger presentations.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["post-front", "high-pressure", "calm"],
      season: ["spring", "fall", "winter"],
      activity: ["low"]
    },
    techniques: ["shake on bottom", "skip under docks", "drag over gravel"],
    weight: "3/16 oz"
  },
  {
    id: "buckeye-mop-jig",
    name: "Buckeye Lures Mop Jig",
    brand: "Buckeye Lures",
    category: "jig",
    type: "Hair Jig",
    image: "/lures/mop-jig.svg",
    colors: ["PB&J", "Green Pumpkin", "Black/Blue", "Brown/Orange"],
    depthRange: { min: 5, max: 25 },
    idealWaterTemp: { min: 40, max: 70 },
    description: "Living rubber and marabou hair jig with an incredibly lifelike breathing action in cold water. Outstanding for smallmouth and cold-water largemouth applications.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["cold", "post-front", "stable"],
      season: ["winter", "spring", "fall"],
      activity: ["low"]
    },
    techniques: ["drag on bottom", "swim and pause", "hop along rock transitions"],
    weight: "3/8 oz"
  },
  {
    id: "punching-jig",
    name: "Dirty Jigs No-Jack Punching Jig",
    brand: "Dirty Jigs",
    category: "jig",
    type: "Punching Jig",
    image: "/lures/punching-jig.svg",
    colors: ["Black/Blue", "California Craw", "Grn Pmpkn/Chartreuse", "Dark Brown Purple"],
    depthRange: { min: 0, max: 6 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "Heavy tungsten punching jig designed to penetrate thick matted vegetation. The compact head and stiff weed guard power through the thickest mats where big bass hide.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["warm", "overcast", "hot"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["punching mats", "heavy flipping", "pitching to thick cover"],
    weight: "1 oz"
  },
  {
    id: "shaky-head-jig",
    name: "Strike King Tour Grade Shakey Head",
    brand: "Strike King",
    category: "jig",
    type: "Shaky Head Jig",
    image: "/lures/shaky-head.svg",
    colors: ["Green Pumpkin", "Black", "Brown", "Watermelon"],
    depthRange: { min: 3, max: 25 },
    idealWaterTemp: { min: 45, max: 80 },
    description: "Precision shaky head jighead that holds the worm upright off the bottom. A finesse technique that consistently catches bass in tough conditions on any fishery.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["post-front", "high-pressure", "calm", "bluebird"],
      season: ["spring", "summer", "fall", "winter"],
      activity: ["low"]
    },
    techniques: ["shake on bottom", "drag and shake", "hop along hard bottom"],
    weight: "3/16 oz"
  },

  // === TOPWATER ===
  {
    id: "whopper-plopper",
    name: "River2Sea Whopper Plopper 110",
    brand: "River2Sea",
    category: "topwater",
    type: "Prop Bait",
    image: "/lures/whopper-plopper.svg",
    colors: ["Bone", "Loon", "Munky Butt", "I Know It"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "Rotating tail creates a plopping sound that drives bass wild. One of the most exciting topwater baits ever made.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["calm", "overcast", "warm", "low-light"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["steady retrieve", "burn and kill", "slow roll"],
    weight: "1.3 oz"
  },
  {
    id: "zara-spook",
    name: "Heddon Zara Spook",
    brand: "Heddon",
    category: "topwater",
    type: "Walking Bait",
    image: "/lures/zara-spook.svg",
    colors: ["Bone", "Bass", "Shad", "Frog"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "The original walk-the-dog bait. Side-to-side gliding action imitates a wounded baitfish on the surface.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["calm", "low-light", "dawn", "dusk"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["walk the dog", "twitch and pause", "fast cadence walk"],
    weight: "3/4 oz"
  },
  {
    id: "pop-r",
    name: "Rebel Pop-R",
    brand: "Rebel",
    category: "topwater",
    type: "Popper",
    image: "/lures/pop-r.svg",
    colors: ["Bone", "Chrome/Blue", "Frog", "Silver/Black"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 60, max: 85 },
    description: "Classic popper that spits water and creates a commotion. Excellent for targeting bass around cover and schooling fish.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["calm", "overcast", "low-light"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["pop and pause", "rapid popping", "walk and pop"],
    weight: "1/4 oz"
  },
  {
    id: "megabass-dog-x-diamante",
    name: "Megabass Dog-X Diamante",
    brand: "Megabass",
    category: "topwater",
    type: "Walking Bait",
    image: "/lures/dog-x-diamante.svg",
    colors: ["GP Reaction", "Sexy Shad", "French Pearl", "Threadfin Shad"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "Premium walking bait with an effortless side-to-side glide. Internal weight transfer system allows incredibly long casts to reach distant schooling fish.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["calm", "dawn", "dusk", "low-light"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["walk the dog", "fast cadence walk", "twitch and pause"],
    weight: "1/2 oz"
  },
  {
    id: "rico-popper",
    name: "River2Sea Dahlberg Diver",
    brand: "River2Sea",
    category: "topwater",
    type: "Diver/Popper",
    image: "/lures/dahlberg-diver.svg",
    colors: ["Frog", "Black", "Perch", "Shad"],
    depthRange: { min: 0, max: 3 },
    idealWaterTemp: { min: 60, max: 85 },
    description: "Unique topwater that pops on the surface and dives under on a steady retrieve. This dual-action design triggers strikes from bass that won't commit to a standard topwater.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "warm", "calm"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["pop and dive", "walk on surface", "twitch and pause"],
    weight: "1/2 oz"
  },
  {
    id: "torpedo-prop-bait",
    name: "Heddon Tiny Torpedo",
    brand: "Heddon",
    category: "topwater",
    type: "Prop Bait",
    image: "/lures/tiny-torpedo.svg",
    colors: ["Bone", "Bass", "Shad", "Bullfrog"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 60, max: 85 },
    description: "Compact prop bait with a spinning rear propeller that churns and sputters. Perfect for targeting bass in tight pockets around docks and laydowns.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["calm", "low-light", "dawn", "dusk"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["twitch and pause", "prop and stop", "steady retrieve"],
    weight: "1/4 oz"
  },
  {
    id: "spro-bronzeye-poppin-frog",
    name: "SPRO Bronzeye Poppin' Frog 60",
    brand: "SPRO",
    category: "topwater",
    type: "Popping Frog",
    image: "/lures/bronzeye-poppin.svg",
    colors: ["Natural Green", "Rainforest Black", "Nasty Shad", "Leopard"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "Hollow-body frog with a cupped mouth that spits water like a popper. Walks across matted vegetation and pops in open pockets to draw explosive strikes.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["warm", "overcast", "calm", "dawn", "dusk"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["pop and walk over mats", "spit in open pockets", "walk the dog"],
    weight: "1/2 oz"
  },
  {
    id: "lucky-craft-sammy-100",
    name: "Lucky Craft Sammy 100",
    brand: "Lucky Craft",
    category: "topwater",
    type: "Walking Bait",
    image: "/lures/sammy-100.svg",
    colors: ["Chartreuse Shad", "MS American Shad", "Aurora Black", "Ghost Minnow"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "Precision-balanced walking bait that glides effortlessly with minimal rod work. The subtle side-to-side action is deadly on clear water where bass are keyed on shad.",
    bestConditions: {
      waterClarity: ["clear"],
      weather: ["calm", "dawn", "dusk", "overcast"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["walk the dog", "slow cadence walk", "twitch and pause"],
    weight: "1/2 oz"
  },

  // === SWIMBAITS ===
  {
    id: "keitech-swing-impact",
    name: "Keitech Swing Impact FAT 3.8\"",
    brand: "Keitech",
    category: "swimbait",
    type: "Paddle Tail Swimbait",
    image: "/lures/keitech.svg",
    colors: ["Sexy Shad", "Bluegill Flash", "Ayu", "Green Pumpkin Fire"],
    depthRange: { min: 2, max: 20 },
    idealWaterTemp: { min: 50, max: 80 },
    description: "Ultra-realistic paddle tail with heavy salt impregnation. The ribbed body and thin tail create a natural swimming action.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["any", "stable"],
      season: ["spring", "summer", "fall", "winter"],
      activity: ["low", "moderate"]
    },
    techniques: ["underspin", "swimbait head", "Alabama rig", "ned rig"],
    weight: "1/4 oz"
  },
  {
    id: "s-waver",
    name: "River2Sea S-Waver 168",
    brand: "River2Sea",
    category: "swimbait",
    type: "Glide Bait",
    image: "/lures/s-waver.svg",
    colors: ["Real Shad", "Bluegill", "Ayu", "Rainbow Trout"],
    depthRange: { min: 1, max: 6 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Jointed glide bait with a wide S-shaped swimming action. Targets trophy-class bass that key on larger forage.",
    bestConditions: {
      waterClarity: ["clear"],
      weather: ["calm", "overcast", "low-light"],
      season: ["spring", "fall", "winter"],
      activity: ["low", "moderate"]
    },
    techniques: ["slow retrieve", "twitch and glide", "rip and pause"],
    weight: "2 oz"
  },
  {
    id: "megabass-magdraft",
    name: "Megabass Magdraft 6\"",
    brand: "Megabass",
    category: "swimbait",
    type: "Multi-Jointed Swimbait",
    image: "/lures/magdraft.svg",
    colors: ["Biwako Ayu", "GP Shad", "Pro Blue", "Sexy Shad"],
    depthRange: { min: 2, max: 10 },
    idealWaterTemp: { min: 55, max: 80 },
    description: "Jointed soft-body swimbait with an incredibly lifelike swimming action. The magnetic weight transfer system allows long casts and the body undulates like a real baitfish.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "calm", "stable"],
      season: ["spring", "fall", "winter"],
      activity: ["low", "moderate"]
    },
    techniques: ["slow steady retrieve", "stop and go", "yo-yo retrieve"],
    weight: "1 oz"
  },
  {
    id: "strike-king-rage-swimmer",
    name: "Strike King Rage Swimmer 3.75\"",
    brand: "Strike King",
    category: "swimbait",
    type: "Paddle Tail Swimbait",
    image: "/lures/rage-swimmer.svg",
    colors: ["Sexy Shad", "Bluegill", "Green Pumpkin", "Pearl"],
    depthRange: { min: 2, max: 15 },
    idealWaterTemp: { min: 50, max: 80 },
    description: "Boot-tail swimbait with an aggressive thumping action from the Rage Tail design. Excellent on an underspin or Alabama rig for schooling bass.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "stable", "windy"],
      season: ["spring", "summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["underspin", "Alabama rig", "jighead", "steady retrieve"],
    weight: "1/4 oz"
  },
  {
    id: "deps-slide-swimmer-175",
    name: "Deps Slide Swimmer 175",
    brand: "Deps",
    category: "swimbait",
    type: "Glide Bait",
    image: "/lures/slide-swimmer.svg",
    colors: ["Ghost Shad", "Largemouth Bass", "Bluegill", "Real Blue Shad"],
    depthRange: { min: 1, max: 8 },
    idealWaterTemp: { min: 55, max: 75 },
    description: "Japanese-made glide bait with a wide sweeping S-curve action. Designed for trophy bass that feed on larger forage. Slow and methodical presentations get the biggest bites.",
    bestConditions: {
      waterClarity: ["clear"],
      weather: ["calm", "overcast", "low-light"],
      season: ["fall", "winter", "spring"],
      activity: ["low", "moderate"]
    },
    techniques: ["slow twitch and glide", "rip and pause", "dead slow retrieve"],
    weight: "2.5 oz"
  },
  {
    id: "big-hammer-swimbait",
    name: "Big Hammer Swimbait 4\"",
    brand: "Big Hammer",
    category: "swimbait",
    type: "Paddle Tail Swimbait",
    image: "/lures/big-hammer.svg",
    colors: ["Hitch", "Rainbow Trout", "Baby Bass", "Arkansas Shiner"],
    depthRange: { min: 3, max: 20 },
    idealWaterTemp: { min: 50, max: 80 },
    description: "Classic Western-style paddle tail swimbait with a hand-poured body. The heavy salt content gives a natural fall rate and the paddle tail thumps steadily on the retrieve.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["stable", "overcast", "calm"],
      season: ["spring", "summer", "fall", "winter"],
      activity: ["low", "moderate"]
    },
    techniques: ["jighead", "underspin", "slow roll deep", "Alabama rig"],
    weight: "3/8 oz"
  },

  // === JERKBAITS ===
  {
    id: "megabass-vision-110",
    name: "Megabass Vision 110",
    brand: "Megabass",
    category: "jerkbait",
    type: "Suspending Jerkbait",
    image: "/lures/vision-110.svg",
    colors: ["GP Pro Blue", "French Pearl", "Sexy Shad", "Table Rock Wakasagi"],
    depthRange: { min: 3, max: 8 },
    idealWaterTemp: { min: 42, max: 65 },
    description: "Premium suspending jerkbait with perfect balance. Suspends motionless in the strike zone, driving cold-water bass crazy.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "cold", "post-front", "stable"],
      season: ["winter", "spring", "fall"],
      activity: ["low"]
    },
    techniques: ["jerk-jerk-pause", "long pause", "rip and suspend"],
    weight: "3/8 oz"
  },
  {
    id: "rapala-xrap",
    name: "Rapala X-Rap 10",
    brand: "Rapala",
    category: "jerkbait",
    type: "Suspending Jerkbait",
    image: "/lures/xrap.svg",
    colors: ["Silver", "Olive Green", "Hot Head", "Glass Ghost"],
    depthRange: { min: 3, max: 8 },
    idealWaterTemp: { min: 45, max: 65 },
    description: "Versatile slashbait that darts and suspends. Internal rattle and textured body create flash and sound in cold water.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "cold", "windy"],
      season: ["winter", "spring", "fall"],
      activity: ["low", "moderate"]
    },
    techniques: ["twitch-twitch-pause", "steady retrieve", "rip and pause"],
    weight: "7/16 oz"
  },
  {
    id: "lucky-craft-pointer-100",
    name: "Lucky Craft Pointer 100 SP",
    brand: "Lucky Craft",
    category: "jerkbait",
    type: "Suspending Jerkbait",
    image: "/lures/pointer-100.svg",
    colors: ["Chartreuse Shad", "BE Gill", "Aurora Black", "Ghost Minnow"],
    depthRange: { min: 3, max: 6 },
    idealWaterTemp: { min: 42, max: 65 },
    description: "Perfectly balanced suspending jerkbait that sits perfectly horizontal in the water column. The tight wobbling action and long pause trigger bites from lethargic winter bass.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["cold", "post-front", "overcast", "stable"],
      season: ["winter", "spring"],
      activity: ["low"]
    },
    techniques: ["jerk-jerk-long pause", "slow twitch", "rip and suspend"],
    weight: "3/8 oz"
  },
  {
    id: "rapala-shadow-rap-deep",
    name: "Rapala Shadow Rap Deep",
    brand: "Rapala",
    category: "jerkbait",
    type: "Deep Diving Jerkbait",
    image: "/lures/shadow-rap-deep.svg",
    colors: ["Purplescent", "Olive Green", "Silver", "Ghost Shiner"],
    depthRange: { min: 6, max: 12 },
    idealWaterTemp: { min: 45, max: 70 },
    description: "Deep-diving jerkbait that reaches the 8-12 foot zone where bass often stage in late fall and early spring. Suspends at depth and darts with minimal rod input.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["overcast", "cool", "stable"],
      season: ["fall", "winter", "spring"],
      activity: ["low", "moderate"]
    },
    techniques: ["jerk and pause at depth", "slow roll deep", "rip and suspend"],
    weight: "7/16 oz"
  },
  {
    id: "smithwick-rattlin-rogue",
    name: "Smithwick Rattlin' Rogue",
    brand: "Smithwick",
    category: "jerkbait",
    type: "Suspending Jerkbait",
    image: "/lures/rattlin-rogue.svg",
    colors: ["Chrome/Black Back", "Clown", "Gold/Black", "Olive Back Chrome"],
    depthRange: { min: 3, max: 6 },
    idealWaterTemp: { min: 42, max: 65 },
    description: "Legendary jerkbait with an internal rattle chamber. The rattling sound calls fish from a distance in stained water, and the suspending action seals the deal.",
    bestConditions: {
      waterClarity: ["stained"],
      weather: ["overcast", "cold", "windy", "post-front"],
      season: ["winter", "spring", "fall"],
      activity: ["low", "moderate"]
    },
    techniques: ["jerk-jerk-pause", "rip and suspend", "slow twitch"],
    weight: "3/8 oz"
  },

  // === BUZZBAITS ===
  {
    id: "strike-king-buzz-king",
    name: "Strike King Buzz King",
    brand: "Strike King",
    category: "buzzbait",
    type: "Buzzbait",
    image: "/lures/buzz-king.svg",
    colors: ["White", "Chartreuse/White", "Black", "Blue Glimmer"],
    depthRange: { min: 0, max: 2 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "Classic buzzbait with a squealing blade that churns the surface. Deadly for covering water fast and triggering aggressive strikes.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "low-light", "warm", "dawn", "dusk"],
      season: ["summer", "fall"],
      activity: ["high"]
    },
    techniques: ["steady retrieve", "burn over grass", "wake along banks"],
    weight: "3/8 oz"
  },
  {
    id: "booyah-buzzbaits",
    name: "Booyah Pond Magic Buzz",
    brand: "Booyah",
    category: "buzzbait",
    type: "Buzzbait",
    image: "/lures/booyah-buzz.svg",
    colors: ["White", "Shad", "Firefly", "Moss Back Craw"],
    depthRange: { min: 0, max: 2 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "Compact buzzbait perfect for smaller waters and pressured bass. Gets on plane quickly even at slower retrieve speeds.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "warm", "calm", "dawn", "dusk"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["slow roll on surface", "parallel banks", "over submerged grass"],
    weight: "1/4 oz"
  },
  {
    id: "war-eagle-buzzbait",
    name: "War Eagle Buzzbait",
    brand: "War Eagle",
    category: "buzzbait",
    type: "Buzzbait",
    image: "/lures/war-eagle-buzz.svg",
    colors: ["White", "Chartreuse/White", "Black", "Sexy Shad"],
    depthRange: { min: 0, max: 2 },
    idealWaterTemp: { min: 65, max: 85 },
    description: "Premium buzzbait with a free-spinning clacker blade that creates a loud clicking sound. Dual rivet design keeps the blade spinning freely for maximum noise and surface disturbance.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["overcast", "dawn", "dusk", "warm"],
      season: ["summer", "fall"],
      activity: ["high"]
    },
    techniques: ["steady retrieve", "burn along banks", "slow roll over grass beds"],
    weight: "3/8 oz"
  },
  {
    id: "lunker-lure-triple-wing-buzz",
    name: "Lunker Lure Triple Wing Buzz",
    brand: "Lunker Lure",
    category: "buzzbait",
    type: "Triple Blade Buzzbait",
    image: "/lures/triple-wing-buzz.svg",
    colors: ["White", "Black", "Chartreuse", "White/Chartreuse"],
    depthRange: { min: 0, max: 2 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "Triple-bladed buzzbait that creates maximum surface disturbance. The three counter-rotating blades keep the bait tracking straight while producing a unique gurgling sound.",
    bestConditions: {
      waterClarity: ["muddy"],
      weather: ["overcast", "warm", "dawn", "dusk", "rain"],
      season: ["summer", "fall"],
      activity: ["high"]
    },
    techniques: ["steady retrieve", "burn over shallow flats", "slow roll at night"],
    weight: "1/2 oz"
  },

  // === FROGS ===
  {
    id: "spro-bronzeye-frog",
    name: "SPRO Bronzeye Frog 65",
    brand: "SPRO",
    category: "frog",
    type: "Hollow Body Frog",
    image: "/lures/bronzeye-frog.svg",
    colors: ["Natural Green", "Rainforest Black", "Outback", "Midnight Walker"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "The gold standard of hollow-body frogs. Walks effortlessly across matted vegetation and collapses on the hookset for a solid connection. Designed by Dean Rojas.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["warm", "overcast", "calm", "dawn", "dusk"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["walk the dog over mats", "pop in pockets", "twitch and pause"],
    weight: "1/2 oz"
  },
  {
    id: "booyah-pad-crasher",
    name: "Booyah Pad Crasher",
    brand: "Booyah",
    category: "frog",
    type: "Hollow Body Frog",
    image: "/lures/pad-crasher.svg",
    colors: ["Dart Frog", "Shad", "Swamp", "Leopard Frog"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "Budget-friendly hollow-body frog with superb walking action. The wide body design makes it easy to work over pads and mats while the twin hooks fold tight for weedless performance.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["warm", "overcast", "calm", "hot"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["walk over lily pads", "pop in open water", "retrieve across mats"],
    weight: "1/2 oz"
  },
  {
    id: "livetarget-frog",
    name: "LiveTarget Hollow Body Frog",
    brand: "LiveTarget",
    category: "frog",
    type: "Hollow Body Frog",
    image: "/lures/livetarget-frog.svg",
    colors: ["Green/Yellow", "Brown/Black", "Emerald/Red", "Tan/Brown"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "Ultra-realistic frog imitation with anatomically correct color patterns. The lifelike detail is unmatched, making it deadly in clear water where bass get a good look at the bait.",
    bestConditions: {
      waterClarity: ["clear", "stained"],
      weather: ["warm", "calm", "overcast", "sunny"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["slow walk over pads", "dead stick in pockets", "subtle twitch"],
    weight: "7/16 oz"
  },
  {
    id: "river2sea-bully-wa-2",
    name: "River2Sea Bully Wa 2",
    brand: "River2Sea",
    category: "frog",
    type: "Popping Frog",
    image: "/lures/bully-wa-2.svg",
    colors: ["Swamp Toad", "Leopard", "Black/Red", "Albino"],
    depthRange: { min: 0, max: 1 },
    idealWaterTemp: { min: 65, max: 90 },
    description: "Compact popping frog with a cupped mouth that spits water aggressively. The smaller profile is perfect for when bass are short-striking larger frogs or targeting smaller frogs.",
    bestConditions: {
      waterClarity: ["stained", "muddy"],
      weather: ["warm", "overcast", "dawn", "dusk"],
      season: ["summer", "fall"],
      activity: ["moderate", "high"]
    },
    techniques: ["pop in open pockets", "walk and pop", "twitch in sparse cover"],
    weight: "3/8 oz"
  }
];

export function getLureById(id) {
  return lures.find(lure => lure.id === id);
}

export function getLuresByCategory(category) {
  return lures.filter(lure => lure.category === category);
}
