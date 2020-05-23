const items = [
  {
    name: "Spring Rolls",
    description: "",
    ingredients: ["Grass noodles", "Cabbage", "Carrots", "Mushroom", "Sweet Chili Sauce"],
    unitType: "pcs",
    quantity: 5,
    price: 10,
    category: "Appetizer",
    menus: ["Dinner"],
  },
  {
    name: "Crunchy Wonton Chips",
    description: "",
    ingredients: ["Wonton Chips", "Sweet Chili Sauce"],
    unitType: "pcs",
    quantity: 16,
    price: 10,
    category: "Appetizer",
    menus: ["Dinner"],
  },
  {
    name: "Fish Cakes",
    description: "",
    ingredients: ["Fish", "Green Bean", "Lime Leaves", "Chili Paste", "Sweet Chili Sauce"],
    unitType: "pcs",
    quantity: 5,
    price: 10,
    category: "Appetizer",
    menus: ["Dinner"],
  },
  {
    name: "Pork Rib with Garlic & Pepper",
    description: "",
    ingredients: ["Pork Rib", "Garlic", "Pepper", "Hot Sauce", "Lettuce"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Appetizer",
    menus: ["Dinner"],
  },
  {
    name: "Deep Fried Beef",
    description: "",
    ingredients: ["Beef", "Sticky Rice", "Lettuce", "Cucumber"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Appetizer",
    menus: ["Dinner"],
  },
  {
    name: "Lettuce Wrap",
    description: "",
    ingredients: [["Chicken", "Pork"], "Onions", "Red Bell Peppers", "Green Bell Peppers", "Crispy Noodles", "Chili Paste", "Cashew Nuts"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Appetizer",
    menus: ["Dinner"],
  },
  {
    name: "Tom Yum Goong",
    description: "",
    ingredients: ["Prawn", "Lemongrass", "Lime Leaves", "Tomato", "Mushroom", "Chili", "Galangal"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Soup & Salad",
    menus: ["Dinner"],
  },
  {
    name: "Tom Yum Kai",
    description: "",
    ingredients: ["Chicken", "Lemongrass", "Lime Leaves", "Tomato", "Mushroom", "Chili Paste", "Galangal"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Soup & Salad",
    menus: ["Dinner"],
  },
  {
    name: "Tom Kha Kai",
    description: "",
    ingredients: ["Chicken", "Lemongrass", "Lime Leaves", "Tomato", "Chili Paste", "Galangal", "Coconut Milk", "Mushrooms"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Soup & Salad",
    menus: ["Dinner"],
  },
  {
    name: "Papaya Salad",
    description: "",
    ingredients: ["Green Papaya", "Carrot", "Lime Juice", "Fish Sauce", "Garlic", "Chili", "Green Beans", "Tomato",
     "Peanuts", "Sticky Rice"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Soup & Salad",
    menus: ["Dinner"],
  },
  {
    name: "Larb Meat Salad",
    description: "",
    ingredients: [["Chicken", "Pork"], "Onions", "Green Onions", "Chili", "Rice Powder", "Lime Juice",
    "Fish Sauce", "Sticky Rice"],
    unitType: "dishes",
    quantity: 1,
    price: 12,
    category: "Soup & Salad",
    menus: ["Dinner"],
  },
  {
    name: "Green Curry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Coconut Milk", "Chili Peppers", "Green Bell Peppers", "Eggplants", "Bamboo", "Basil", "Lime Leaves", "Rice"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Curry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Red Curry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Coconut Milk", "Red Bell Pepper", "Green Bell Pepper", "Pumpkin", "Basil", "Lime Leaves", "Rice"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Curry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Yellow Curry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Coconut milk", "Carrots", "Potatoes", "Onions", "Red Bell Pepper", "Green Bell Pepper", "Rice"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Curry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Panang Curry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Coconut Milk", "Red Bell Pepper", "Green Bell Pepper", "Green Beans", "Basil", "Lime Leaves", "Rice"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Curry",
    menus: ["Dinner"],
  },
  {
    name: "Massamun Curry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Coconut Milk", "Potatoes", "Onions", "Pineapples", "Carrots", "Peanuts", "Rice"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Curry",
    menus: ["Dinner"],
  },
  {
    name: "Cashew Nut",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Cashew Nuts", "Onions", "Red Bell Peppers", "Green Bell Peppers", "Mushrooms", "Carrots"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Pad Ka Pao",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Thai Basil", "Holy Basil", "Onions", "Red Bell Peppers", "Green Bell Peppers", "Green Bean"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Pad Ped",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Bamboo", "Lime Leaves", "Thai Basil", "Holy Basil", "Red Bell Peppers", "Green Bell Peppers", "Chili Paste"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Pad Ginger",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Ginger", "Red Bell Peppers", "Green Bell Peppers", "Onions", "Carrots", "Mushroom"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Seasonal Stir Fry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Mixed Vegetables", "Cabbage", "Carrots", "Mushrooms", "Broccoli", "Green Beans", "Garlic", "Cauliflower", "Oyster Sauce"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Sweet & Sour Stir Fry",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Pineapple", "Onions", "Carrots", "Red Bell Peppers", "Green Bell Peppers", "Tomatoes", "Cucumber"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Garlic Broccoli",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Boccoli", "Garlic", "Black Peppers", "Oyster Sauce"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Thai Fried Rice",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Rice", "Egg", "Onion", "Carrots", "Cabbage", "Tomatoes", "Green Onion"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Fried Rice Pineapple",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Rice", "Egg", "Onion", "Red Bell Peppers", "Green Bell Peppers", "Carrots", "Pineapple", "Cashew Nuts", "Raisins"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Fried Rice Tom Yum",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Rice", "Egg", "Onion", "Red Bell Peppers", "Green Bell Peppers", "Tomatoes", "Green Onion", "Chili Paste"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Tilapia Fish with Garlic & Pepper",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Tilapia Fish", "Garlic", "Black Pepper"],
    unitType: "dishes",
    quantity: 1,
    price: 25,
    category: "Stir Fry",
    menus: ["Dinner"],
  },
  {
    name: "Pla Lad Prig",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Tilapia Fish", "Garlic", "Onion", "Chilly", "House Sauce"],
    unitType: "dishes",
    quantity: 1,
    price: 25,
    category: "Stir Fry",
    menus: ["Dinner"],
  },

  {
    name: "Pad Thai",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Rice Noodles", "Egg", "Bean Sprouts", "Chives", "Peanuts"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Noodles",
    menus: ["Dinner", "Lunch"],
  },
  {
    name: "Pad Kee Mao",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Rice Noodles", "Red Bell Peppers", "Green Bell Peppers", "Carrots", "Bamboo", "Holy Basil"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Noodles",
    menus: ["Dinner"],
  },
  {
    name: "Pad Si Eu",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Rice Noodles", "Carrots", "Broccoli", "Cabbage", "Cauliflower", "Egg"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Noodles",
    menus: ["Dinner"],
  },
  {
    name: "Wonton Noodle Soup",
    description: "",
    ingredients: [["Beef", "Chicken", "Pork", "Prawns","Tofu", "Vegetables"], "Egg Noodles", "Wonton", "BBQ Pork", "Carrots", "Broccoli", "Cilantro", "Green Onion", "Garlic"],
    unitType: "dishes",
    quantity: 1,
    price: [["Other", 14], ["Prawns", 16]],
    category: "Noodles",
    menus: ["Dinner"],
  }
]
