import { MENU_ITEMS } from '../data/menu';
import { MENU_CATEGORIES } from '../data/categories';
import { MenuCategoryName } from '../types';

export interface MenuValidationReport {
  totalItems: number;
  totalCategories: number;
  duplicateIds: string[];
  invalidPrices: string[];
  missingCategories: string[];
  categoryCounts: Record<string, number>;
  isValid: boolean;
}

// Expected items per category according to Master Prompt Section 9:
export const EXPECTED_COUNTS: Record<Exclude<MenuCategoryName, 'All Items'>, number> = {
  'Pancakes, Crepes & Waffles': 13,
  'Pizza': 12,
  'Starters & Appetizers': 23,
  'Wraps & Quesadillas': 8,
  'Breakfast & Eggs': 10,
  'Salads': 8,
  'Sandwiches & Burgers': 17,
  'Main Course': 12,
  'Coffee & Hot Beverages': 3,
  'Mocktails & Refreshers': 19,
  'Milkshakes & Smoothies': 17,
  'Desserts & Cakes': 10,
  'Meal Combos': 4,
  'Bakery & Bread': 5,
  'Sushi': 4,
  'Fresh Juices': 6,
  'Pasta': 16,
};

export function validateMenuData(): MenuValidationReport {
  const seenIds = new Set<string>();
  const duplicateIds: string[] = [];
  const invalidPrices: string[] = [];
  const categoryCounts: Record<string, number> = {};

  MENU_ITEMS.forEach((item) => {
    // Check duplicate ID
    if (seenIds.has(item.id)) {
      duplicateIds.push(item.id);
    } else {
      seenIds.add(item.id);
    }

    // Check price
    if (!item.price || item.price <= 0 || isNaN(item.price)) {
      invalidPrices.push(`${item.name} (${item.price})`);
    }

    // Count by category
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  // Check missing categories
  const missingCategories: string[] = [];
  MENU_CATEGORIES.forEach((cat) => {
    if (cat.id !== 'All Items' && (!categoryCounts[cat.id] || categoryCounts[cat.id] === 0)) {
      missingCategories.push(cat.id);
    }
  });

  const isValid =
    duplicateIds.length === 0 &&
    invalidPrices.length === 0 &&
    missingCategories.length === 0 &&
    MENU_ITEMS.length === 187;

  return {
    totalItems: MENU_ITEMS.length,
    totalCategories: Object.keys(categoryCounts).length,
    duplicateIds,
    invalidPrices,
    missingCategories,
    categoryCounts,
    isValid,
  };
}
