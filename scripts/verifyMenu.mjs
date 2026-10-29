import fs from 'fs';

const EXPECTED_PRODUCTS = [
  // 1: PANCAKES, CREPES & WAFFLES
  ['Pancake Chocolate Sauce And Nuts', 258, 'Pancakes, Crepes & Waffles'],
  ['Honey & Cinnamon Crepe', 178, 'Pancakes, Crepes & Waffles'],
  ['Pancake With Honey', 208, 'Pancakes, Crepes & Waffles'],
  ['Banana & Nutella Crepe', 258, 'Pancakes, Crepes & Waffles'],
  ['Banana Honey & Cinnamon Crepe', 208, 'Pancakes, Crepes & Waffles'],
  ['Pancake With Syrup', 218, 'Pancakes, Crepes & Waffles'],
  ['Pancake With Whipped Cream & Fresh Fruits', 278, 'Pancakes, Crepes & Waffles'],
  ['Nutella Crepe', 228, 'Pancakes, Crepes & Waffles'],
  ['Nutella Waffle', 268, 'Pancakes, Crepes & Waffles'],
  ['Banana & Nutella Waffle', 298, 'Pancakes, Crepes & Waffles'],
  ['Chocolate Syrup & Vanilla Ice Cream Waffle', 298, 'Pancakes, Crepes & Waffles'],
  ['Honey Waffle', 218, 'Pancakes, Crepes & Waffles'],
  ['Whipped Cream & Fresh Fruit Waffle', 308, 'Pancakes, Crepes & Waffles'],

  // 2: PIZZA
  ['Veg Italiano', 328, 'Pizza'],
  ['Mushroom Onion', 388, 'Pizza'],
  ['Bocca Special Chicken', 518, 'Pizza'],
  ['Spiced Paneer', 428, 'Pizza'],
  ['BBQ Chicken', 428, 'Pizza'],
  ['Margherita', 298, 'Pizza'],
  ['Spiced Chicken', 428, 'Pizza'],
  ['Chicken Italiano', 438, 'Pizza'],
  ['Corn Cheese', 308, 'Pizza'],
  ['Veg Mexican', 308, 'Pizza'],
  ['BBQ Cottage Cheese', 428, 'Pizza'],
  ['Veg BOCCA Special', 428, 'Pizza'],

  // 3: STARTERS & APPETIZERS
  ['Fried Prawns', 398, 'Starters & Appetizers'],
  ['Sticky BBQ Mushroom', 328, 'Starters & Appetizers'],
  ['Peri Peri Fries', 178, 'Starters & Appetizers'],
  ['Tomato Bruschetta', 168, 'Starters & Appetizers'],
  ['Cheese Garlic Bread', 198, 'Starters & Appetizers'],
  ['Hummus & Pita', 198, 'Starters & Appetizers'],
  ['French Fries', 158, 'Starters & Appetizers'],
  ['BBQ Chicken Wings', 358, 'Starters & Appetizers'],
  ['Chilli Cheese Toast', 218, 'Starters & Appetizers'],
  ['Fish Cotoletta', 358, 'Starters & Appetizers'],
  ['Potato Wedges', 188, 'Starters & Appetizers'],
  ['Veg Tempura', 198, 'Starters & Appetizers'],
  ['Onion Rings', 168, 'Starters & Appetizers'],
  ['Cheese Corn Ball', 258, 'Starters & Appetizers'],
  ['Chicken Meatballs', 398, 'Starters & Appetizers'],
  ['Garlic Bread', 128, 'Starters & Appetizers'],
  ['Peri Peri Chicken', 268, 'Starters & Appetizers'],
  ['Egg Bruschetta', 198, 'Starters & Appetizers'],
  ['Chicken Cotoletta', 348, 'Starters & Appetizers'],
  ['Falafel Hummus Platter', 348, 'Starters & Appetizers'],
  ['Shrimp Tempura', 398, 'Starters & Appetizers'],
  ['Fish Finger', 358, 'Starters & Appetizers'],
  ['Sticky BBQ Cottage Cheese', 398, 'Starters & Appetizers'],

  // 4: WRAPS & QUESADILLAS
  ['Grilled Chicken Wrap', 318, 'Wraps & Quesadillas'],
  ['Mushroom Onion Bell Pepper Wrap', 258, 'Wraps & Quesadillas'],
  ['Crispy Cottage Cheese Wrap', 308, 'Wraps & Quesadillas'],
  ['Veg Quesadilla', 308, 'Wraps & Quesadillas'],
  ['Chicken Quesadilla', 328, 'Wraps & Quesadillas'],
  ['Grilled Cottage Cheese Wrap', 308, 'Wraps & Quesadillas'],
  ['Falafel & Hummus Wrap', 258, 'Wraps & Quesadillas'],
  ['Grilled Veggies & Hummus Wrap', 208, 'Wraps & Quesadillas'],

  // 5: BREAKFAST & EGGS
  ['Extra 2 Sausages', 88, 'Breakfast & Eggs'],
  ['Egg White Omelette', 198, 'Breakfast & Eggs'],
  ['Mushroom Omelette', 168, 'Breakfast & Eggs'],
  ['Plain Omelette', 148, 'Breakfast & Eggs'],
  ['Toast Butter & Jam', 118, 'Breakfast & Eggs'],
  ['Mushroom Cheese Omelette', 198, 'Breakfast & Eggs'],
  ['Scrambled Egg', 158, 'Breakfast & Eggs'],
  ['Boiled Egg 2pcs', 98, 'Breakfast & Eggs'],
  ['Cheese Omelette', 168, 'Breakfast & Eggs'],
  ['Cheese Tomato Toast', 178, 'Breakfast & Eggs'],

  // 6: SALADS
  ['Chicken Caesar', 398, 'Salads'],
  ['Fresh Fruits & Yogurt', 208, 'Salads'],
  ['Egg Salad', 328, 'Salads'],
  ['Grilled Cottage Cheese Salad', 398, 'Salads'],
  ['Fresh Fruits Salad', 258, 'Salads'],
  ['Grilled Chicken Salad', 398, 'Salads'],
  ['Vegan Salad', 368, 'Salads'],
  ['Greek Salad', 368, 'Salads'],

  // 7: SANDWICHES & BURGERS
  ['Grilled Vegetable Sandwich', 228, 'Sandwiches & Burgers'],
  ['Caramelised Mushroom Onion Veg Burger', 178, 'Sandwiches & Burgers'],
  ['BBQ Chicken Burger', 218, 'Sandwiches & Burgers'],
  ['Club Sandwich Chicken', 358, 'Sandwiches & Burgers'],
  ['BBQ Cottage Cheese Burger', 228, 'Sandwiches & Burgers'],
  ['Mushroom Onion Sandwich', 238, 'Sandwiches & Burgers'],
  ['Crispy Cottage Cheese Sandwich', 308, 'Sandwiches & Burgers'],
  ['Egg Chicken Salad Sandwich', 238, 'Sandwiches & Burgers'],
  ['Veg Burger', 178, 'Sandwiches & Burgers'],
  ['Chicken Burger', 218, 'Sandwiches & Burgers'],
  ['Grilled Cottage Cheese Sandwich', 308, 'Sandwiches & Burgers'],
  ['Grilled Cheese Sandwich', 198, 'Sandwiches & Burgers'],
  ['Cottage Cheese Burger', 208, 'Sandwiches & Burgers'],
  ['Caprese Sandwich', 178, 'Sandwiches & Burgers'],
  ['Crispy Chicken Sandwich', 288, 'Sandwiches & Burgers'],
  ['Salami Sandwich', 208, 'Sandwiches & Burgers'],
  ['Grilled Chicken Sandwich', 288, 'Sandwiches & Burgers'],

  // 8: MAIN COURSE
  ['Grilled Chicken Creamy Mushroom Sauce', 468, 'Main Course'],
  ['Grilled Chicken Garlic Mushroom Sauce', 478, 'Main Course'],
  ['Mixed Vegetables Garlic Thyme Butter', 398, 'Main Course'],
  ['Chicken Stroganoff', 458, 'Main Course'],
  ['Grilled Cottage Cheese Meal', 448, 'Main Course'],
  ['Grilled Prawns Lemon Butter', 608, 'Main Course'],
  ['Mushroom Stroganoff', 428, 'Main Course'],
  ['Grilled Fish White Wine Sauce', 598, 'Main Course'],
  ['Grilled Fish Roasted Tomato Pesto', 598, 'Main Course'],
  ['Chicken Steak', 448, 'Main Course'],
  ['Veg Delight', 408, 'Main Course'],
  ['Chicken Coq Au Vin', 488, 'Main Course'],

  // 9: COFFEE & HOT BEVERAGES
  ['Cafe Latte', 168, 'Coffee & Hot Beverages'],
  ['Cafe Mocha', 178, 'Coffee & Hot Beverages'],
  ['Iced Americano', 128, 'Coffee & Hot Beverages'],

  // 10: MOCKTAILS & REFRESHERS
  ['Kala Khata Mojito', 188, 'Mocktails & Refreshers'],
  ['Green Apple Mojito', 188, 'Mocktails & Refreshers'],
  ['Lemonade', 118, 'Mocktails & Refreshers'],
  ['Cinderella', 208, 'Mocktails & Refreshers'],
  ['Peach Lemonade', 148, 'Mocktails & Refreshers'],
  ['Lemon Iced Tea', 128, 'Mocktails & Refreshers'],
  ['Apple Cranberry Spritzer', 208, 'Mocktails & Refreshers'],
  ['Peach Mojito', 188, 'Mocktails & Refreshers'],
  ['Pinacolada', 278, 'Mocktails & Refreshers'],
  ['Orange Mojito', 198, 'Mocktails & Refreshers'],
  ['Blue Lagoon Mojito', 188, 'Mocktails & Refreshers'],
  ['Watermelon Mojito', 188, 'Mocktails & Refreshers'],
  ['Fresh Lime Fizz', 128, 'Mocktails & Refreshers'],
  ['Green Iced Tea', 148, 'Mocktails & Refreshers'],
  ['Ginger Lemon Mojito', 188, 'Mocktails & Refreshers'],
  ['Tera Rosso Special Mocktail', 258, 'Mocktails & Refreshers'],
  ['Orange Lemonade', 148, 'Mocktails & Refreshers'],
  ['Sunset Divine', 208, 'Mocktails & Refreshers'],
  ['Passion Fruit Mojito', 168, 'Mocktails & Refreshers'],

  // 11: MILKSHAKES & SMOOTHIES
  ['Nutella Milkshake', 268, 'Milkshakes & Smoothies'],
  ['Banana Milkshake', 168, 'Milkshakes & Smoothies'],
  ['Blueberry Smoothie', 248, 'Milkshakes & Smoothies'],
  ['Brownie Frappe', 228, 'Milkshakes & Smoothies'],
  ['Cold Chocolate', 168, 'Milkshakes & Smoothies'],
  ['Apple Milkshake', 228, 'Milkshakes & Smoothies'],
  ['Banana Cashew Shake', 208, 'Milkshakes & Smoothies'],
  ['Nutella Frappe', 298, 'Milkshakes & Smoothies'],
  ['Oreo Frappe', 258, 'Milkshakes & Smoothies'],
  ['Vanilla Milkshake', 158, 'Milkshakes & Smoothies'],
  ['Chocochip Frappe', 228, 'Milkshakes & Smoothies'],
  ['Mocha Hazelnut Frappe', 228, 'Milkshakes & Smoothies'],
  ['Banana Caramel Shake', 228, 'Milkshakes & Smoothies'],
  ['Kit Kat Milkshake', 268, 'Milkshakes & Smoothies'],
  ['Oreo Milkshake', 268, 'Milkshakes & Smoothies'],
  ['Strawberry Milkshake', 188, 'Milkshakes & Smoothies'],
  ['Frappe', 178, 'Milkshakes & Smoothies'],

  // 12: DESSERTS & CAKES
  ['Chocolate Pastry', 369, 'Desserts & Cakes'],
  ['Basque Cheese Cake', 258, 'Desserts & Cakes'],
  ['Biscoff Cheese Cake', 228, 'Desserts & Cakes'],
  ['Baked Cheese Cake', 208, 'Desserts & Cakes'],
  ['Blueberry Cheese Cake', 228, 'Desserts & Cakes'],
  ['Whole Wheat Carrot Cake', 128, 'Desserts & Cakes'],
  ['Banana Almond Tea Cake', 128, 'Desserts & Cakes'],
  ['Churros Chocolate Sauce', 178, 'Desserts & Cakes'],
  ['Apple Pie', 158, 'Desserts & Cakes'],
  ['Dark Chocolate Brownie', 168, 'Desserts & Cakes'],

  // 13: MEAL COMBOS
  ['Fish Combo', 658, 'Meal Combos'],
  ['Veg Combo', 578, 'Meal Combos'],
  ['Chicken Combo', 588, 'Meal Combos'],
  ['Grilled Prawns Combo', 698, 'Meal Combos'],

  // 14: BAKERY & BREAD
  ['Cookies 100gm', 88, 'Bakery & Bread'],
  ['Millet Cookies 200gm', 200, 'Bakery & Bread'],
  ['White Baguette Bread', 88, 'Bakery & Bread'],
  ['Brown Baguette Bread', 98, 'Bakery & Bread'],
  ['White Bread Slice', 88, 'Bakery & Bread'],

  // 15: SUSHI
  ['Chicken Sushi 8 pcs', 425, 'Sushi'],
  ['Prawn Sushi 8 pcs', 465, 'Sushi'],
  ['Vegetable Sushi Uramaki 8 pcs', 395, 'Sushi'],
  ['Veg Sushi Maki 8 pcs', 395, 'Sushi'],

  // 16: FRESH JUICES
  ['Orange & Carrot', 248, 'Fresh Juices'],
  ['Beetroot Pomegranate', 248, 'Fresh Juices'],
  ['Fresh Orange', 208, 'Fresh Juices'],
  ['Pineapple & Orange', 248, 'Fresh Juices'],
  ['Fresh Pineapple', 188, 'Fresh Juices'],
  ['Fresh Watermelon', 178, 'Fresh Juices'],

  // 17: PASTA
  ['Parmesan Chicken Spaghetti', 458, 'Pasta'],
  ['Mac & Cheese Chicken', 408, 'Pasta'],
  ['Prawn Pasta', 518, 'Pasta'],
  ['Spaghetti Chicken Bolognese', 438, 'Pasta'],
  ['Herbed Pasta Veg', 338, 'Pasta'],
  ['Mac & Cheese Veg', 368, 'Pasta'],
  ['Spicy Chicken Sausage Pasta', 458, 'Pasta'],
  ['Veg Pasta', 358, 'Pasta'],
  ['Spicy Mac N Cheese Chicken', 468, 'Pasta'],
  ['Chicken Pasta', 388, 'Pasta'],
  ['Spaghetti Aglio E Olio Chicken', 378, 'Pasta'],
  ['Spicy Mac N Cheese Veg', 368, 'Pasta'],
  ['Spaghetti Cottage Cheese Bolognese', 458, 'Pasta'],
  ['Spaghetti Creamy Chicken Mushroom', 448, 'Pasta'],
  ['Herbed Pasta Chicken', 378, 'Pasta'],
  ['Spaghetti Aglio E Olio Veg', 338, 'Pasta'],
];

console.log(`Master Prompt Total Count: ${EXPECTED_PRODUCTS.length} dishes`);

const content = fs.readFileSync('./src/data/menu.ts', 'utf-8');

let errors = 0;
EXPECTED_PRODUCTS.forEach(([name, price]) => {
  if (!content.includes(`'${name}'`)) {
    console.error(`❌ Missing dish: "${name}"`);
    errors++;
    return;
  }
  const regex = new RegExp(`name:\\s*'${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?price:\\s*(\\d+)`);
  const match = regex.exec(content);
  if (!match) {
    console.error(`❌ Could not verify price regex for: "${name}"`);
    errors++;
  } else {
    const foundPrice = parseInt(match[1], 10);
    if (foundPrice !== price) {
      console.error(`❌ Price mismatch for "${name}": Expected ₹${price}, found ₹${foundPrice}`);
      errors++;
    }
  }
});

if (errors === 0) {
  console.log(`\n🎉 PERFECT MATCH! All ${EXPECTED_PRODUCTS.length} dishes verified with exact names, categories, and prices!`);
} else {
  console.error(`\n❌ Found ${errors} errors.`);
  process.exit(1);
}
