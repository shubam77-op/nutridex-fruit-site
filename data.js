const fruitData = [
    {
        id: "apple",
        name: "Apple",
        subtitle: "The Crisp Classic",
        image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=300&fit=crop&q=80",
        calories: 95,
        serving: "1 medium (182g)",
        macros: {
            carbs: { total: "25g", dv: 9 },
            protein: { total: "0.5g", dv: 1 },
            fat: { total: "0.3g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "14%", icon: "🍊" },
            { name: "Potassium", amount: "6%", icon: "⚡" },
            { name: "Fiber", amount: "4g", icon: "🌾" }
        ],
        description: "Apples are high in fiber and water, making them filling. They contain pectin, a prebiotic fiber that feeds good gut bacteria.",
        tags: ["Heart Health", "Weight Loss"],
        color: "#e74c3c"
    },
    {
        id: "banana",
        name: "Banana",
        subtitle: "Energy Booster",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&q=80",
        calories: 105,
        serving: "1 medium (118g)",
        macros: {
            carbs: { total: "27g", dv: 10 },
            protein: { total: "1.3g", dv: 2 },
            fat: { total: "0.4g", dv: 1 }
        },
        vitamins: [
            { name: "Potassium", amount: "9%", icon: "⚡" },
            { name: "Vitamin B6", amount: "33%", icon: "🧠" },
            { name: "Magnesium", amount: "8%", icon: "🦴" }
        ],
        description: "Bananas are the ultimate quick energy source. The high potassium content is essential for heart health and blood pressure control.",
        tags: ["Energy", "Muscle Recovery"],
        color: "#f1c40f"
    },
    {
        id: "avocado",
        name: "Avocado",
        subtitle: "The Super Fat",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop&q=80",
        calories: 160,
        serving: "1/2 fruit (100g)",
        macros: {
            carbs: { total: "9g", dv: 3 },
            protein: { total: "2g", dv: 4 },
            fat: { total: "15g", dv: 23 }
        },
        vitamins: [
            { name: "Folate", amount: "20%", icon: "🌿" },
            { name: "Vitamin K", amount: "26%", icon: "🩸" },
            { name: "Potassium", amount: "14%", icon: "⚡" }
        ],
        description: "Unlike most fruits, avocados are loaded with healthy monounsaturated fats which are great for heart health and nutrient absorption.",
        tags: ["Keto Friendly", "Heart Health"],
        color: "#2ecc71"
    },
    {
        id: "blueberry",
        name: "Blueberry",
        subtitle: "Antioxidant King",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=300&fit=crop&q=80",
        calories: 84,
        serving: "1 cup (148g)",
        macros: {
            carbs: { total: "21g", dv: 8 },
            protein: { total: "1.1g", dv: 2 },
            fat: { total: "0.5g", dv: 1 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "24%", icon: "🍊" },
            { name: "Vitamin K", amount: "36%", icon: "🩸" },
            { name: "Manganese", amount: "25%", icon: "🛡️" }
        ],
        description: "Blueberries have one of the highest antioxidant levels of all common fruits and vegetables, protecting your body from free radicals.",
        tags: ["Brain Health", "Anti-Aging"],
        color: "#3498db"
    },
    {
        id: "orange",
        name: "Orange",
        subtitle: "Immunity Shield",
        image: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400&h=300&fit=crop&q=80",
        calories: 62,
        serving: "1 medium (131g)",
        macros: {
            carbs: { total: "15g", dv: 5 },
            protein: { total: "1.2g", dv: 2 },
            fat: { total: "0.2g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "92%", icon: "🍊" },
            { name: "Folate", amount: "9%", icon: "🌿" },
            { name: "Calcium", amount: "5%", icon: "🦴" }
        ],
        description: "Famous for Vitamin C, oranges help your immune system, collagen production, and iron absorption.",
        tags: ["Immunity", "Skin Health"],
        color: "#e67e22"
    },
    {
        id: "strawberry",
        name: "Strawberry",
        subtitle: "Low Calorie Sweetness",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop&q=80",
        calories: 32,
        serving: "100 grams",
        macros: {
            carbs: { total: "7.7g", dv: 3 },
            protein: { total: "0.7g", dv: 1 },
            fat: { total: "0.3g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "98%", icon: "🍊" },
            { name: "Manganese", amount: "19%", icon: "🛡️" },
            { name: "Folate", amount: "6%", icon: "🌿" }
        ],
        description: "These bright red berries are packed with vitamins and fiber but have very little sugar compared to other fruits.",
        tags: ["Low Sugar", "Heart Health"],
        color: "#c0392b"
    },
    {
        id: "watermelon",
        name: "Watermelon",
        subtitle: "Hydration Hero",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop&q=80",
        calories: 30,
        serving: "1 wedge (280g)",
        macros: {
            carbs: { total: "8g", dv: 3 },
            protein: { total: "0.6g", dv: 1 },
            fat: { total: "0.2g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin A", amount: "11%", icon: "👁️" },
            { name: "Vitamin C", amount: "13%", icon: "🍊" },
            { name: "Water", amount: "92%", icon: "💧" }
        ],
        description: "Composed of 92% water, this fruit is perfect for hydration. It also contains lycopene, which protects your skin from sun damage.",
        tags: ["Hydration", "Skin Health"],
        color: "#ff7675"
    },
    {
        id: "pineapple",
        name: "Pineapple",
        subtitle: "Tropical Digestion",
        image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=400&h=300&fit=crop&q=80",
        calories: 50,
        serving: "1 cup chunks",
        macros: {
            carbs: { total: "13g", dv: 5 },
            protein: { total: "0.5g", dv: 1 },
            fat: { total: "0.1g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "131%", icon: "🍊" },
            { name: "Manganese", amount: "76%", icon: "🛡️" },
            { name: "Bromelain", amount: "High", icon: "🧬" }
        ],
        description: "The only known source of bromelain, an enzyme that digests protein and helps reduce inflammation and swelling.",
        tags: ["Digestion", "Anti-Inflammatory"],
        color: "#f39c12"
    },
    {
        id: "mango",
        name: "Mango",
        subtitle: "King of Fruits",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop&q=80",
        calories: 60,
        serving: "1 cup sliced",
        macros: {
            carbs: { total: "15g", dv: 5 },
            protein: { total: "0.8g", dv: 1 },
            fat: { total: "0.4g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "67%", icon: "🍊" },
            { name: "Vitamin A", amount: "10%", icon: "👁️" },
            { name: "Folate", amount: "18%", icon: "🌿" }
        ],
        description: "Packed with polyphenols—plant compounds that function as antioxidants. It's also great for eye health due to high Vitamin A.",
        tags: ["Immunity", "Eye Health"],
        color: "#fdcb6e"
    },
    {
        id: "kiwi",
        name: "Kiwi",
        subtitle: "Nutrient Dense",
        image: "https://images.unsplash.com/photo-1585306939891-80a7871790db?w=400&h=300&fit=crop&q=80",
        calories: 61,
        serving: "1 medium",
        macros: {
            carbs: { total: "15g", dv: 5 },
            protein: { total: "1.1g", dv: 2 },
            fat: { total: "0.5g", dv: 1 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "106%", icon: "🍊" },
            { name: "Vitamin K", amount: "30%", icon: "🩸" },
            { name: "Fiber", amount: "3g", icon: "🌾" }
        ],
        description: "One of the most nutrient-dense fruits available. Eating kiwi before bed may also help improve sleep quality.",
        tags: ["Sleep", "Digestion"],
        color: "#badc58"
    },
    {
        id: "grapes",
        name: "Grapes",
        subtitle: "Natural Candy",
        image: "https://images.unsplash.com/photo-1537640538965-a4824821d134?w=400&h=300&fit=crop&q=80",
        calories: 67,
        serving: "1 cup",
        macros: {
            carbs: { total: "17g", dv: 6 },
            protein: { total: "0.6g", dv: 1 },
            fat: { total: "0.4g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin K", amount: "18%", icon: "🩸" },
            { name: "Copper", amount: "10%", icon: "🔋" },
            { name: "B2", amount: "6%", icon: "⚡" }
        ],
        description: "Contains resveratrol, a compound that has been shown to offer protection against cancer and heart disease.",
        tags: ["Heart Health", "Longevity"],
        color: "#9b59b6"
    },
    {
        id: "lemon",
        name: "Lemon",
        subtitle: "Detoxifier",
        image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=300&fit=crop&q=80",
        calories: 29,
        serving: "1 fruit",
        macros: {
            carbs: { total: "9g", dv: 3 },
            protein: { total: "1.1g", dv: 2 },
            fat: { total: "0.3g", dv: 0 }
        },
        vitamins: [
            { name: "Vitamin C", amount: "51%", icon: "🍊" },
            { name: "Iron", amount: "3%", icon: "⚙️" },
            { name: "Fiber", amount: "2.8g", icon: "🌾" }
        ],
        description: "High in citric acid, which may help prevent kidney stones. Often used in water to aid weight loss and digestion.",
        tags: ["Detox", "Kidney Health"],
        color: "#f9ca24"
    }
];
