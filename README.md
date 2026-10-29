# Bocca Cafe Bhubaneswar — Official Web Experience

A human-designed, editorial web experience built for **Bocca Cafe, Bhubaneswar, Odisha, India** — situated at Janpath Road, Master Canteen Area, Ashok Nagar.

Designed with an independent café aesthetic: warm ivory and espresso palette, literary-inspired touches celebrating Bocca's book-friendly identity, artisanal food photography, a scannable menu containing all 187 items across 17 categories, real-time cart and order tray, table enquiry flow, and WhatsApp ordering integration.

---

## ☕ Brand & Location Information

- **Name:** Bocca Cafe
- **Address:** 2nd Floor, 108/B, Janpath Road, Master Canteen Area, Ashok Nagar, Bhubaneswar, Odisha 751001, India (Beside Lalchand Jewellers).
- **Telephone:** +91 73812 85555
- **Official Website:** boccacafe.in
- **Verified Official Instagram:** [@boccabbsr](https://www.instagram.com/boccabbsr/)
- **Operating Hours:** Monday – Sunday (All 7 Days), 8:30 AM – 10:30 PM
- **Atmosphere:** Warm, book-friendly, intellectual, cozy, unhurried, artisanal continental kitchen.

---

## 📖 Pages & Features

1. **Home (`/`)**:
   - Editorial hero section: *"Good food. Good coffee. Good company."*
   - *"A little pause in the middle of the city"* — book-friendly culture and atmosphere section with asymmetrical image mosaic.
   - Curated selections from different categories (signature Bocca Special Chicken pizza, Basque burnt cheesecake, prawn pasta, etc.).
   - Visit section with opening hours and quick location links.

2. **Our Story (`/our-story`)**:
   - Editorial essay capturing the rhythm of Janpath and the quiet refuge of the 2nd floor café.
   - Sincere presentation of Bocca’s literary roots, mini-library, and community art wall without fabricating founder lore.
   - The Three Pillars: *The Book Culture*, *Craft Coffee & Kitchen*, and *Creative Community*.

3. **Complete Menu (`/menu`)**:
   - **All 187 items across all 17 categories** preserved with exact INR pricing.
   - Live category filter tabs with dish counts.
   - Instant search across product names, categories, and descriptions.
   - Dietary filter (All, Vegetarian, Non-Vegetarian).
   - View mode toggle (Classic Bistro Scan Row view vs Photo Grid view).
   - Quantity controls and direct "Add to Tray" with visual feedback.

4. **Photographic Gallery (`/gallery`)**:
   - Curated collections: *Atmosphere & Books*, *Coffee & Beverages*, *Artisanal Food*, *Bakery & Desserts*.
   - Interactive Lightbox view with detailed captions and zoom.
   - Honest editorial disclaimer clarifying illustrative photography.

5. **Reservations (`/reservations`)**:
   - Table and gathering enquiry form with client-side validation.
   - Seating preferences: *Book Nook*, *Main Cafe*, *Window Seating*, *Open Terrace / Artsy Corner*.
   - Transparent confirmation modal preparing the enquiry with one-click direct WhatsApp confirmation (`+91 73812 85555`) or direct phone call.
   - No fake server reservations or phantom table bookings.

6. **Contact & Location (`/contact`)**:
   - Verified coordinates, address, and Google Maps direct link.
   - Direct call link to `+91 73812 85555`.
   - Contact form with validation for private event inquiries, book club meetups, and cake orders.

7. **Cart & Ordering (`/cart` & Slide-Over Drawer)**:
   - Persistent tray state using `localStorage`.
   - Itemized list with thumbnail, name, unit price, and +/- quantity controls.
   - Clear subtotal calculation (with taxes included in menu prices).
   - WhatsApp order summary generator creating clean formatted markdown text with customer details and itemized totals.
   - Demo checkout mode with dine-in vs takeaway preferences.

---

## 🥗 17 Menu Categories & Item Distribution

| # | Category | Dish Count |
|---|---|---|
| 1 | Pancakes, Crepes & Waffles | 13 |
| 2 | Handcrafted Pizza | 12 |
| 3 | Starters & Appetizers | 23 |
| 4 | Wraps & Quesadillas | 8 |
| 5 | Breakfast & Eggs | 10 |
| 6 | Salads | 8 |
| 7 | Sandwiches & Burgers | 17 |
| 8 | Main Course | 12 |
| 9 | Coffee & Hot Beverages | 3 |
| 10 | Mocktails & Refreshers | 19 |
| 11 | Milkshakes & Smoothies | 17 |
| 12 | Desserts & Cakes | 10 |
| 13 | Meal Combos | 4 |
| 14 | Bakery & Bread | 5 |
| 15 | Sushi | 4 |
| 16 | Fresh Juices | 6 |
| 17 | Pasta | 16 |
| **Total** | **All Categories** | **187 Dishes** |

---

## 🛠️ Technology Stack

- **React 18** with **TypeScript**
- **Vite 6** for fast modern bundling
- **Tailwind CSS 3** with custom warm café palette (`#261A16`, `#F5F0E8`, `#795548`, `#B68A5A`, `#D8C9B8`, `#FFFCF7`, `#292522`, `#77716B`)
- **Google Fonts**: *Cormorant Garamond* (Editorial Serif) & *Plus Jakarta Sans* (Legible Modern Sans)
- **Lucide React** for restrained, elegant icons
- **React Router 6** for client-side navigation

---

## 🚀 How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Validate menu integrity:**
   ```bash
   node scripts/verifyMenu.mjs
   ```

4. **Build production bundle:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 📝 Owner Configuration Notes

1. **WhatsApp & Phone Number:**
   - The ordering integration and enquiry forms currently use the verified Bocca Cafe number: `+91 73812 85555`.
   - To change this number, update the `cafePhone` variable in `src/components/CartDrawer.tsx`, `src/pages/Cart.tsx`, and `src/pages/Reservations.tsx`.

2. **Food Photography:**
   - All 187 dishes use high-resolution, categorized food photography URLs.
   - Each dish's image can be updated directly in `src/data/menu.ts` without modifying component code.

3. **Backend Integration:**
   - The reservation and contact forms currently validate inputs and prepare structured summaries for WhatsApp and phone confirmation. They can be connected to any backend endpoint (such as Supabase, Firebase, or Node API) by submitting the payload from `handleSubmit` in `Reservations.tsx` and `Contact.tsx`.
