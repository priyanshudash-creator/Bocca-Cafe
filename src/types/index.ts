export type MenuCategoryName =
  | 'All Items'
  | 'Pancakes, Crepes & Waffles'
  | 'Pizza'
  | 'Starters & Appetizers'
  | 'Wraps & Quesadillas'
  | 'Breakfast & Eggs'
  | 'Salads'
  | 'Sandwiches & Burgers'
  | 'Main Course'
  | 'Coffee & Hot Beverages'
  | 'Mocktails & Refreshers'
  | 'Milkshakes & Smoothies'
  | 'Desserts & Cakes'
  | 'Meal Combos'
  | 'Bakery & Bread'
  | 'Sushi'
  | 'Fresh Juices'
  | 'Pasta';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryName;
  price: number;
  description?: string;
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

export interface CartItem {
  product: MenuItem;
  quantity: number;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Book Nook' | 'Main Cafe' | 'Window Seating' | 'Open Terrace/Artsy Corner';
  specialRequests: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Atmosphere & Books' | 'Coffee & Beverages' | 'Artisanal Food' | 'Bakery & Desserts';
  image: string;
  caption: string;
}
