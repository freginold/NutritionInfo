// nutrition data file

var terms = [],
    termNames = [],
    starches = [],
    nonStarches = [],
    gI = "<span class='goodFood'>&#10004;</span>",    // good food icon
    bI = "<span class='badFood'>&#10060;</span>",    // bad food icon
    nI = "<span class='neutralFood'>&#9432;</span>",    // neutral food icon

    // good msgs
    clearLiquidTxt = "OK for Clear Liquids stage",
    nonStarchTxt = "Non-starchy vegetable",
    leanProteinTxt = "Lean protein",
    lowCarbTxt = "Low carb",
    sugFreeTxt = "Sugar free",
    vLowCalTxt = "Very low calories",
    zeroCalTxt = "0 calories",

    // neutral msgs
    ifUnswTxt = "If unsweetened",
    ifSugarFreeTxt = "If sugar free",
    ifLess200CalTxt = "If < 200 calories per serving",
    isolateTxt = 'If "isolate" is the first ingredient',
    satFat5gTxt = "If < 5g of saturated fat per serving",
    sugar15gTxt = "If 15g of sugar or less per serving",
    sugar10gTxt = "If < 10g of sugar per serving",
    sugar5gTxt = "If < 5g of sugar per serving",
    protein15gTxt = "If > 15g of protein per serving",
    portionSizeTxt = "Watch the portion size",
    after1monthTxt = "OK 1 month after surgery",
    after3weeksTxt = "OK 3 weeks after surgery",
    after12monthsTxt = "OK 12 months after surgery",

    // bad msgs
    starchTxt = "Starch",
    moreFatTxt = "More fat than protein",
    highFatTxt = "High in fat",
    highSugarTxt = "High in sugar",
    notSugarFreeTxt = "Not sugar free",
    notIsolateTxt = "Not isolate; only 60% of protein gets absorbed"

    // foods/drinks to search through
    data = [
    "AdvantEdge High Protein Shake", gI, [],
    "alcohol", bI, ["Empty calories (no nourishment or satiety)", "After surgery, you can reach dangerous levels of intoxication quickly",
        "Can lead to ulcers or other stomach/GI complications", "Dehydrates you", "Depletes your body of certain nutrients",
        after12monthsTxt],
    "almond butter", bI, [moreFatTxt],
    "almond milk", gI, [ifUnswTxt],
    "applesauce", gI, [ifUnswTxt, sugar15gTxt],
    "artichoke", gI, [nonStarchTxt],
    "arugula", gI, [nonStarchTxt],
    "asparagus", gI, [nonStarchTxt],
    "Atkins frozen meals", gI, [],
    "Atkins Lift", gI, [clearLiquidTxt],
    "Atkinson’s Sugar Free Chick-o-Stick Candy", gI, [lowCarbTxt],
    "bacon", bI, [highFatTxt, moreFatTxt],
    "Bacon Heir Pork Panko Breadcrumbs", gI, [lowCarbTxt],
    "Bai waters", gI, [],
    "Bariwise Cereal", gI, [lowCarbTxt],
    "bean (not incl. string/green bean)", bI, [starchTxt],
    "beef jerky", gI, [sugar5gTxt],
    "Better Than Good Protein Puffs", gI, [lowCarbTxt],
    "bok choy", gI, [nonStarchTxt],
    "bologna", bI, [highFatTxt, moreFatTxt],
    "bread", bI, [starchTxt],
    "breaded food", bI, [highFatTxt],
    "broccoli", gI, [nonStarchTxt],
    "broccoli rabe", gI, [nonStarchTxt],
    "broth", gI, [clearLiquidTxt],
    "brussels sprout", gI, [nonStarchTxt],
    "butter", bI, [highFatTxt],
    "cabbage (green, red, napa, savoy)", gI, [nonStarchTxt],
    "caffeine", gI, [after1monthTxt, "Caffeinated drinks don't count toward fluid goal."],
    "cake", bI, [highSugarTxt],
    "Cali'flour Foods Cauliflower Thins", gI, [lowCarbTxt],
    "Cali'flour Foods Pizza Crust", gI, [lowCarbTxt],
    "candy", bI, [highSugarTxt],
    "canned/packaged fruit in own juice", gI, [sugar15gTxt],
    "Carbolicious Low Carb Melba Toast", gI, [lowCarbTxt],
    "carbonated beverages", bI, ["Avoid forever"],
    "carrot", gI, [nonStarchTxt],
    "cashew milk", gI, [ifUnswTxt],
    "cauliflower", gI, [nonStarchTxt],
    "cauliflower rice", gI, [lowCarbTxt],
    "celery", gI, [nonStarchTxt],
    "cereal (hot and cold)", bI, [starchTxt],
    "cheese (reduced fat)", gI, [leanProteinTxt],
    "cheese sticks", gI, [],
    "chicken", gI, [leanProteinTxt],
    "chicken bacon", gI, [],
    "chicken burger", gI, [],
    "chicken sausage", gI, [],
    "chicken salad (deli)", gI, [portionSizeTxt],
    "chicken salad (homemade)", gI, [],
    "ChocZero Keto Bark", gI, [lowCarbTxt],
    "Chompies Carbs Not! High Protein Bread", gI, [lowCarbTxt],
    "Coconut Wraps (Thrive Market, Nuco Organic)", gI, [lowCarbTxt],
    "coffee", gI, [after1monthTxt, "Does not count toward fluid goals"],
    "coffee, decaf", gI, [after3weeksTxt],
    "collard greens", gI, [nonStarchTxt],
    "cookie", bI, [highSugarTxt],
    "cooking oil", bI, [highFatTxt],
    "corn", bI, [starchTxt],
    "cottage cheese (low fat)", gI, [leanProteinTxt],
    "crackers", bI, [starchTxt],
    "creamer", gI, ["If sugar free and low fat"],
    "creamy dressing", bI, [highFatTxt],
    "creamy sauce", bI, [highFatTxt],
    "creamy soup", bI, [highFatTxt],
    "Crystal Light powder drink mix", gI, [sugFreeTxt],
    "cucumber", gI, [nonStarchTxt],
    "daikon radish", gI, [nonStarchTxt],
    "deli meat (turkey, chicken, ham roast beef)", gI, [],
    "Diet Swiss Miss sugar free hot cocoa mix", gI, [],
    "Diet V8 Splash", gI, [],
    "Dixie USA Carb Counters Ready-to-Eat Cookies", gI, [lowCarbTxt],
    "Dixie USA Smaps Cereal", gI, [lowCarbTxt],
    "eggplant", gI, [nonStarchTxt],
    "egg, raw", gI, [leanProteinTxt],
    "egg, hard-boiled", gI, [leanProteinTxt],
    "endive", gI, [nonStarchTxt],
    "Ensure Max", bI, ["Not recommended for right after surgery", "OK every once in a while later"],
    "Equate Isolate Whey Protein Supplement", gI, [],
    "escarole", gI, [nonStarchTxt],
    "Fairlife Core Power Protein Milk Shake", bI, [highSugarTxt],
    "Fairlife Nutrition Plan Nutrition Shake", gI, [],
    "Fairlife Nutrition Plan Protein Shake", gI, [],
    "fennel", gI, [nonStarchTxt],
    "fish", gI, [leanProteinTxt],
    "FitJoy Protein Bar", gI, [],
    "flavored water", gI, [ifSugarFreeTxt],
    "flour", bI, [starchTxt],
    "Folios Cheese Wraps", gI, [lowCarbTxt],
    "fried food", bI, [highFatTxt],
    "frozen yogurt", bI, [highSugarTxt],
    "fruit cup", gI, [sugar15gTxt],
    "fruit juice", bI, [highSugarTxt],
    "fruit products", gI, [sugar15gTxt],
    "fruit punch", bI, [highSugarTxt],
    "full-fat dairy products", bI, [moreFatTxt],
    "garlic", gI, [nonStarchTxt],
    "Gatorade", bI, ["There are no sugar-free Gatorade products"],
    "gelatin, sugar free", gI, [clearLiquidTxt],
    "grains", bI, [starchTxt],
    "granola", bI, [starchTxt],
    "grease", bI, [highFatTxt],
    "Great Low Carb Bread Company Bagels", gI, [lowCarbTxt],
    "Great Low Carb Bread Company Bread", gI, [lowCarbTxt],
    "Great Low Carb Bread Company Pasta", gI, [lowCarbTxt],
    "Great Low Carb Bread Company Soft Pretzels", gI, [lowCarbTxt],
    "green bean", gI, [nonStarchTxt],
    "half and half", gI, ["If fat free"],
    "Health Warrior Protein Muffin", bI, ["Too high in sugar and carbs"],
    "Healthsmart ChocoRite Peanut Butter Cup Patties", gI, [lowCarbTxt],
    "heart of palm", gI, [nonStarchTxt],
    "Hershey's sugar free chocolate", gI, [],
    "Hershey's sugar free Peanut Butter Cups", gI, [lowCarbTxt],
    "hot chocolate, diet", gI, [vLowCalTxt],
    "hot dog", bI, [highFatTxt, moreFatTxt],
    "ice cream", bI, [highSugarTxt],
    "Iconic Protein Coffee", gI, [after1monthTxt],
    "Iconic Protein Drink", gI, [],
    "Impastable", gI, [lowCarbTxt],
    "Inspire pancake mix", gI, [lowCarbTxt],
    "Isopure", gI, [clearLiquidTxt],
    "Isopure protein powder", gI, [],
    "Jello", gI, [ifSugarFreeTxt, vLowCalTxt],
    "jicama", gI, [nonStarchTxt],
    "Jolly Ranchers (sugar free)", gI, [lowCarbTxt],
    "Julian Bakery Paleo Thin Almond Bread", gI, [lowCarbTxt],
    "Julian Bakery Paleo Thin Crackers", gI, [lowCarbTxt],
    "Julian Bakery Pro Granola", gI, [lowCarbTxt],
    "kale", gI, [nonStarchTxt],
    "Kale Chips", gI, [lowCarbTxt],
    "Know Better Buns", gI, [lowCarbTxt],
    "Know Better Cookies", gI, [lowCarbTxt],
    "Know Better Thins", gI, [lowCarbTxt],
    "Kohlrabi Noodles", gI, [lowCarbTxt],
    "Krunchy Melts Sugar Free Meringues", gI, [lowCarbTxt],
    "La Nouba Chocolate Marshmallows", gI, [sugFreeTxt],
    "La Nouba Low Carb Marshmallows", gI, [lowCarbTxt],
    "LC Foods Fresh Baked NY Style Bagels", gI, [lowCarbTxt],
    "leek", gI, [nonStarchTxt],
    "lemonade, diet", gI, [],
    "lettuce (all kinds)", gI, [nonStarchTxt],
    "Lowrey’s Microwave Pork Rinds", gI, [lowCarbTxt],
    "Magic Spoon Cereal", gI, [],
    "Maria and Ricardo's Fiber Rich Whole Wheat Tortillas", gI, [lowCarbTxt],
    "milk", gI, ["fat free or 1%", sugar15gTxt],
    "Minute Maid Light Flavored Fruit Drink", bI, [notSugarFreeTxt],
    "Mio powder drink mix", gI, [sugFreeTxt],
    "Miracle Noodles", gI, [lowCarbTxt],
    "Moon Cheese", gI, [lowCarbTxt],
    "multigrain bar", bI, [starchTxt],
    "Muscle Milk Non-Dairy Protein Shake, Pro Series", gI, [],
    "Muscle Milk Non-Dairy Protein Shake, Genuine", gI, [],
    "mushroom (all kinds)", gI, [nonStarchTxt],
    "mustard greens", gI, [nonStarchTxt],
    "Myoplex Shred Protein Shake", gI, [],
    "Nectar protein powder", gI, [],
    "Now vegan protein powder", gI, [],
    "Nush Foods Low Carb Organic Cake", gI, [lowCarbTxt],
    "nut butter (peanut butter, almond butter, etc.)", bI, [highFatTxt],
    "nut", bI, [highFatTxt],
    "oats", bI, [starchTxt],
    "Ocean Spray Sugar Free juice", gI, [sugFreeTxt],
    "Oh Yeah One! Protein Bar", gI, [],
    "okra", gI, [nonStarchTxt],
    "ONE Protein Bar", gI, [],
    "onion", gI, [nonStarchTxt],
    "Orgain organic protein powder", bI, [notIsolateTxt],
    "Orgain premade protein shake", bI, ["Some of the premade shakes are high in sugar"],
    "Outer Aisle Cauliflower Pizza Crust", gI, [lowCarbTxt],
    "Outer Aisle Cauliflower Wraps", gI, [lowCarbTxt],
    "Parmesan Crisps", gI, [lowCarbTxt],
    "parsley", gI, [nonStarchTxt],
    "pasta (gluten or gluten-free)", bI, [starchTxt],
    "pea", bI, [starchTxt],
    "peanut butter", bI, [highFatTxt, moreFatTxt],
    "pepperoncini", gI, [nonStarchTxt],
    "pepperoni", bI, [highFatTxt, moreFatTxt],
    "peppers (green, red, etc.)", gI, [nonStarchTxt],
    "pickle", gI, [nonStarchTxt],
    "Pie 5", gI, [lowCarbTxt],
    "pimiento", gI, [nonStarchTxt],
    "popcorn", bI, [starchTxt],
    "popsicle, sugar free", gI, [clearLiquidTxt, vLowCalTxt],
    "potato", bI, [starchTxt],
    "Power Crunch Protein Energy Bar", gI, [],
    "Powerade Zero", gI, [],
    "Premier Protein shake", bI, [notIsolateTxt],
    "Propel powder drink mix", gI, [sugFreeTxt],
    "protein bar", gI, [isolateTxt, protein15gTxt, ifLess200CalTxt, sugar10gTxt, satFat5gTxt, "Not to be used until week 3"],
    "protein powder", gI, [leanProteinTxt, isolateTxt, ifLess200CalTxt, sugar5gTxt, satFat5gTxt],
    "protein shake (ready-made)", gI, [isolateTxt, protein15gTxt, ifLess200CalTxt, satFat5gTxt],
    "Protein2O", gI, [],
    "ProtiDiet Oatmeal", gI, [lowCarbTxt],
    "Pure Protein Bar", gI, [],
    "Puritan's Pride vegan protein powder", gI, [],
    "Quest Cookies", gI, [lowCarbTxt],
    "Quest Pizza", gI, [lowCarbTxt],
    "Quest Protein Bar", gI, [],
    "Quest Protein Chips", gI, [lowCarbTxt],
    "quinoa", bI, [starchTxt],
    "radish", gI, [nonStarchTxt],
    "Real Good Foods Cauliflower Crust Pizza", gI, [lowCarbTxt],
    "Real Good Foods Chicken Crust Pizza", gI, [lowCarbTxt],
    "Real Good Foods Enchiladas", gI, [lowCarbTxt],
    "rice", bI, [starchTxt],
    "rice cake", bI, [starchTxt],
    "Rita's Sugar Free Italian Ice", gI, ["Uses sugar alcohols as a sweetener", "Carbs probably come from the sugar alcohols (so can be subtracted)", "Contains maltodextrin, which has sugar"],
    "rhubarb", gI, [nonStarchTxt],
    "Robert Irvine's FitCrunch Protein Bar", gI, [],
    "Russell Stover sugar free chocolates", gI, [lowCarbTxt],
    "salami", bI, [highFatTxt, moreFatTxt],
    "sauerkraut", gI, [nonStarchTxt],
    "sausage", bI, [highFatTxt, moreFatTxt],
    "scallions", gI, [nonStarchTxt],
    "seaweed", gI, [nonStarchTxt],
    "seed", bI, [highFatTxt],
    "Sensato High Fiber Hot Cereal", gI, [lowCarbTxt],
    "Sensato Sugar-Free Nut and Flax Granola", gI, [lowCarbTxt],
    "shallots", gI, [nonStarchTxt],
    "shellfish", gI, [leanProteinTxt],
    "shirataki noodles", gI, [lowCarbTxt],
    "shirataki rice", gI, [lowCarbTxt],
    "Shrewd Food Protein Crisps", gI, [lowCarbTxt],
    "shrimp, frozen", gI, [],
    "Six Star Whey Protein Shake", gI, [],
    "Skinny Pasta Konjac Pasta (Couscous, Fettuccine, Lasagna, Noodles, Rice and Spaghetti)", gI, [lowCarbTxt],
    "Slurpee, sugar free", gI, ["Calories and carbs are similar to a sugar free popsicle", "Let it sit a while and mix it to get rid of any carbonation"],
    "Smart Baking Company Cakes", gI, [lowCarbTxt],
    "snap pea", gI, [nonStarchTxt],
    "snow pea", gI, [nonStarchTxt],
    "Sobe Lifewater", gI, [zeroCalTxt],
    "soda", bI, [highSugarTxt],
    "Southern Recipe Oven Baked Pork Rinds", gI, [lowCarbTxt],
    "soy milk", gI, [ifUnswTxt],
    "spaghetti sauce", gI, ["Avoid for 1-2 months after surgery", sugar5gTxt],
    "spaghetti squash", gI, [nonStarchTxt, lowCarbTxt],
    "spinach", gI, [nonStarchTxt],
    "sprouts", gI, [nonStarchTxt],
    "squash", gI, [nonStarchTxt],
    "store brand powder drink mix", gI, [sugFreeTxt],
    "string bean", gI, [nonStarchTxt],
    "sugar free drinks", gI, [clearLiquidTxt],
    "summer squash (yellow, zucchini)", gI, [nonStarchTxt],
    "sweet potato", bI, [starchTxt],
    "sweet tea", bI, [highSugarTxt],
    "sweets and dessert", bI, [highSugarTxt],
    "Swiss chard", gI, [nonStarchTxt],
    "tea, decaf", gI, [],
    "tea, herbal", gI, [],
    "Thin Slim Zero Carb Bread", gI, [lowCarbTxt],
    "tofu", gI, [leanProteinTxt],
    "tomatillo", gI, [nonStarchTxt],
    "tomato (fresh, canned)", gI, [nonStarchTxt],
    "tortilla (incl. low-carb tortilla)", bI, [starchTxt],
    "Tova Carbquick Bake Mix", gI, [lowCarbTxt],
    "True Lemon powder drink mix", gI, [sugFreeTxt],
    "tuna, bagged", gI, [],
    "tuna salad (deli)", gI, [portionSizeTxt],
    "tuna salad (homemade)", gI, [],
    "turkey", gI, [leanProteinTxt],
    "turkey bacon", gI, [],
    "turkey burger", gI, [],
    "turkey sausage", gI, [],
    "turnip", gI, [nonStarchTxt],
    "Twin Peaks Protein Puffs", gI, [lowCarbTxt],
    "Universal Nutrition Doctor's CarbRite Diet Chocolate Chip Brownie Mix", gI, [lowCarbTxt],
    "Unjury Chicken Soup Flavor Protein Mix", gI, [],
    "Unjury Ready to Drink Shake", gI, [],
    "V8 Light", bI, [notSugarFreeTxt],
    "Vitamin Water Zero", gI, [],
    "water", gI, [clearLiquidTxt],
    "wax bean", gI, [nonStarchTxt],
    "Werther's (sugar free)", gI, [lowCarbTxt],
    "Wilde Thin & Crispy Chicken Chips", bI, [starchTxt, lowCarbTxt, moreFatTxt, "Consider 1/2 serving instead of whole"],
    "winter squash (butternut, acorn, etc.)", gI, [nonStarchTxt],
    "wrap", bI, [starchTxt],
    "Wrawp Veggie Wraps", gI, [lowCarbTxt],
    "yogurt (low fat)", gI, [leanProteinTxt, sugar15gTxt, vLowCalTxt],
    "zoodles", gI, [],
    "zucchini noodles", gI, [nonStarchTxt, lowCarbTxt]
],

// protein guidance -- 1st line is title
    proteinData = [
        [
            "Protein Goals",
            "70 to 100 grams per day",
            "20 to 30 grams per meal"
        ],
        [
            "Protein Guidance / Advice",
            "Eat protein first.",
            "Don't exceed 100g of protein per day; unabsorbed protein may be stored as fat."
        ],
        [
            "Protein Powder/Shake/Bar Requirements",
            'First listed ingredient is "Isolate"',
            "At least 15-30g of protein per serving",
            "Less than 200 calories per serving",
            "Less than 5g of sugar per serving for powders (less than 10g for bars)",
            "Less than 5g of saturated fat per serving"
        ]
    ],

// exercise guidance -- 1st line is title
    exerciseData = [
        [
            "Exercise Goals",
            "Start slowly (even just 1-2 minutes). Progress to 30 minutes at least 5 days per week.",
            "Aim for 150 minutes of moderate aerobic activity — or 75 minutes of vigorous aerobic activity — per week.",
            "To lose weight (or maintain weight loss) aim for 300 minutes or more per week, or 1 hour 5 days per week.",
        ],
        [
            "Exercise Guidance / Advice",
            "Exercise should be approved by your physician and included in your daily routine.",
            "Weight lifting can help rebuild some of the muscle normally lost with large weight loss.",
            "1 minute of vigorous activity provides similar health benefits as 2 minutes of moderate activity.",
            "To start, set a specific, reasonable goal (i.e. sign up for a 5K and start walking/jogging at least twice per week)."
        ],
        [
            "Recommended Activities",
            "Walking",
            "Recumbent bike",
            "Water aerobics",
            "Swimming",
            "Weight lifting",
            "Dancing"
        ],
        [
            "Benefits of Exercise",
            "Decreases your risk of chronic disease",
            "Gives you more energy",
            "Helps you sleep better",
            "Improves your self-esteem"
        ],
        [
            "Supplemental Activities",
            "Park farther away in the parking lot.",
            "March in place during TV commercials.",
            "Take a flight of stairs instead of the elevator.",
            "Stand every 30 minutes to reduce health risks and improve longevity."
        ],
        [
            "Exercise & Eating",
            "Don't eat right before a workout.",
            "Eat within 15 minutes after an intense workout (or 30-45 minutes after a walk or light jog).",
            "A post-recovery snack should include a form of carbohydrate, some protein and plenty of fluid."
        ],
        [
            "Pre-Workout Fuel Suggestions",
            "PB2 and a banana",
            "Low fat/no fat Greek yogurt with berries",
            "Low fat milk and fruit",
            "Apple and low fat cheese",
            "Low fat cottage cheese and sliced pineapple"
        ],
        [
            "Post-Workout Fuel Suggestions",
            "Post-workout recovery smoothie (or post-workout smoothie made with low fat milk and fruit)",
            "Low fat, low sugar chocolate milk",
            "Turkey with cut veggies (like carrots)",
            "Yogurt with berries",
            "1/2 protein bar and a fruit"
        ]
    ],

// fluids guidance -- 1st line is title
fluidsData = [
    [
        "Fluids Guidance",
        "Drink at least 64 ounces every day (sugar free and carbonation free only).",
        "Sip constantly throughout the day at a rate of 4 to 8 ounces per hour.",
        "Don't try to guzzle or chug water after surgery.",
        "Don't drink with a meal or for 30 minutes after.",
        "Take your water bottle everywhere."
    ],
    [
        "Fluids to Avoid",
        "Decaf coffee — 3 weeks",
        "Caffeine — 1 month",
        "Alcohol (all types) — 1 year",
        "Carbonated drinks — forever",
        "Drinks with sugar (even juice) — forever"
    ]
],

// fruit guidance -- 1st line is title
fruitData = [
    [
        "Fruit Servings",
        "Have up to 3 servings per day",
        "1 serving = 1 cup or a small piece of fruit",
        "For fruit smoothies, limit fruit to 1/2 cup"
    ],
    [
        "Fruit Guidance",
        "Pair fruit with a protein for a snack to prevent blood sugar spikes.",
        "Eat fruit after protein and non-starch vegetables, if still hungry."
    ],
    [
        "Possible Fruit Intolerances",
        "Fruit with tough skin",
        "Dried fruit",
        "Hard fruit",
        "Citrus fruit"
    ]
],

// external links -- 1st line is title
linkData = [
    [
        "GBMC Links",
        "GBMC - Bariatric Surgery & COMP", "https://www.gbmc.org/weightloss",
        "B4 Fitness & Lifestyle Coaching", "https://www.b4fitlife.com/",
        "Facebook - GBMC COMP", "https://www.facebook.com/GBMCWeightLoss",
        "Facebook - B4 Fitness & Lifestyle Coaching", "https://www.facebook.com/b4fitlife",
        "Pinterest - GBMC HealthCare", "https://www.pinterest.com/gbmchealthcare/",
        "Instagram - GBMC HealthCare", "https://www.instagram.com/gbmchealthcare/"
    ],
    [
        "Recipe Links",
        "GBMC COMP Bariatric-Friendly Recipes", "https://www.facebook.com/download/preview/2297739570253593",
        "Bariatric Foodie", "https://www.bariatricfoodie.com/",
        "BariatricEating.com", "https://www.bariatriceating.com/",
        "My Bariatric Life", "http://www.mybariatriclife.org/",
        "Karen Mangum Nutrition - Bariatric Friendly Main Dishes", "https://karenmangum.com/category/bariatric-friendly-main-dishes/",
        "Skinny Taste", "https://www.skinnytaste.com/",
        "Facebook - Bariatric Recipes for Me", "https://www.facebook.com/bariatricrecipesforme",
        "Pinterest - Bariatric Recipes", "https://www.pinterest.com/explore/bariatric-recipes/"
    ],
    [
        "Food Shopping Links",
        "Netrition", "https://www.netrition.com/",
        "BariatricEating.com", "https://www.bariatriceating.com/",
        "Julian Bakery", "https://julianbakery.com/",
        "Thin Slim Foods", "https://www.thinslimfoods.com/",
        "Smart Baking Company", "https://smartbakingco.com/"
    ]
];
