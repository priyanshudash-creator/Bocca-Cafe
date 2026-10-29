import { MenuCategoryName } from '../types';

export interface CategoryMeta {
  id: MenuCategoryName;
  label: string;
  shortDescription: string;
  iconName?: string;
}

export const MENU_CATEGORIES: CategoryMeta[] = [
  { id: 'All Items', label: 'All Items', shortDescription: 'Complete culinary collection at Bocca Cafe' },
  { id: 'Coffee & Hot Beverages', label: 'Coffee & Hot Brews', shortDescription: 'Classic espresso and comforting hot brews' },
  { id: 'Breakfast & Eggs', label: 'Breakfast & Eggs', shortDescription: 'Fresh eggs, comforting toasts, and morning classics' },
  { id: 'Pancakes, Crepes & Waffles', label: 'Pancakes, Crepes & Waffles', shortDescription: 'Golden griddled cakes, tender crepes, and crisp waffles' },
  { id: 'Starters & Appetizers', label: 'Starters & Appetizers', shortDescription: 'Crispy bites, bruschettas, and sharing plates' },
  { id: 'Wraps & Quesadillas', label: 'Wraps & Quesadillas', shortDescription: 'Rolled tortillas and toasted cheese quesadillas' },
  { id: 'Salads', label: 'Salads', shortDescription: 'Crisp market greens, fresh fruits, and artisanal dressings' },
  { id: 'Sandwiches & Burgers', label: 'Sandwiches & Burgers', shortDescription: 'Grilled panini, club sandwiches, and gourmet burgers' },
  { id: 'Pizza', label: 'Handcrafted Pizza', shortDescription: 'Stone-baked thin crust pizzas with premium toppings' },
  { id: 'Pasta', label: 'Pasta', shortDescription: 'Italian comfort spaghettis, mac & cheese, and sauced pastas' },
  { id: 'Main Course', label: 'Main Course', shortDescription: 'Hearty continental steaks, stroganoffs, and grilled mains' },
  { id: 'Sushi', label: 'Sushi', shortDescription: 'Delicate hand-rolled maki and uramaki rolls' },
  { id: 'Desserts & Cakes', label: 'Desserts & Cakes', shortDescription: 'Basque cheesecakes, warm brownies, and sweet endings' },
  { id: 'Bakery & Bread', label: 'Bakery & Bread', shortDescription: 'Freshly baked artisanal breads, baguettes, and cookies' },
  { id: 'Mocktails & Refreshers', label: 'Mocktails & Refreshers', shortDescription: 'Chilled mojitos, spritzers, and house lemonades' },
  { id: 'Milkshakes & Smoothies', label: 'Milkshakes & Smoothies', shortDescription: 'Decadent thick shakes, cold frappes, and fruit smoothies' },
  { id: 'Fresh Juices', label: 'Fresh Juices', shortDescription: 'Pure cold-pressed and freshly squeezed fruit juices' },
  { id: 'Meal Combos', label: 'Meal Combos', shortDescription: 'Curated complete meals with mains and accompaniments' },
];
