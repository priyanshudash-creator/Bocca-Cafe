import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, BookOpen, Clock, MapPin, Phone, Sparkles, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { formatCurrency } from '../utils/currency';
import { useCart } from '../hooks/useCart';

export const Home: React.FC = () => {
  const { addToCart } = useCart();

  // Pick signature dishes from distinct categories for featured showcase
  const signatureDishes = [
    MENU_ITEMS.find((item) => item.id === 'pizza-bocca-special-chicken')!,
    MENU_ITEMS.find((item) => item.id === 'dessert-basque-cheese-cake')!,
    MENU_ITEMS.find((item) => item.id === 'pasta-prawn-pasta')!,
    MENU_ITEMS.find((item) => item.id === 'pcw-pancake-chocolate-sauce-nuts')!,
    MENU_ITEMS.find((item) => item.id === 'bev-cafe-mocha')!,
    MENU_ITEMS.find((item) => item.id === 'sb-caramelised-mushroom-onion-veg-burger')!,
  ].filter(Boolean);

  return (
    <div className="bg-warmwhite">
      {/* 1. HERO SECTION - Editorial Café Composition */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-espresso text-warmwhite overflow-hidden">
        {/* Subtle Textured Background Image with Editorial Warmth */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=85"
            alt="Warm café atmosphere with artisanal coffee and soft natural light"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-caramel/20 text-caramel text-xs tracking-editorial uppercase font-medium border border-caramel/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bhubaneswar’s Culture & Book Café</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-warmwhite leading-[1.08]">
              Good food. <br />
              Good coffee. <br />
              <span className="italic font-normal text-taupe-light">Good company.</span>
            </h1>

            <p className="text-base sm:text-lg text-taupe leading-relaxed max-w-xl font-light">
              A welcoming café for slow mornings, satisfying meals, coffee breaks, and something sweet.
              Located at Janpath, Master Canteen — step inside for unhurried conversations and hearty plates.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/menu"
                className="px-7 py-3.5 bg-caramel hover:bg-caramel-light text-espresso font-semibold text-xs uppercase tracking-editorial rounded transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="px-7 py-3.5 border border-taupe/60 hover:border-warmwhite text-warmwhite font-medium text-xs uppercase tracking-editorial rounded transition-colors"
              >
                Find Us
              </Link>
            </div>

            {/* Micro Details */}
            <div className="pt-8 border-t border-espresso-700/80 flex flex-wrap gap-6 text-xs text-taupe">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-caramel" />
                <span>2nd Floor, Janpath, Master Canteen</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-caramel" />
                <span>Daily 8:30 AM – 10:30 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Food & Book Feature Plate */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-sm">
              {/* Main Visual */}
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border-4 border-taupe-border/20 bg-espresso-700">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
                  alt="A book, artisanal coffee, and quiet table at Bocca Cafe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-6 -left-6 bg-ivory text-espresso p-5 rounded-sm shadow-xl border border-taupe max-w-[260px]">
                <p className="font-serif italic text-sm text-espresso leading-snug">
                  "Take your time over something you love."
                </p>
                <span className="block text-[10px] uppercase tracking-widest text-mutedgray mt-2">
                  The Bocca Bookshelf
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ATMOSPHERE SECTION - A Little Pause in the City */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-taupe-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic - Asymmetric editorial composition */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded overflow-hidden shadow-sm border border-taupe-border">
                    <img
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                      alt="Books and reading table"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded overflow-hidden shadow-sm border border-taupe-border">
                    <img
                      src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
                      alt="Steamed latte art"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="aspect-square rounded overflow-hidden shadow-sm border border-taupe-border">
                    <img
                      src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
                      alt="Basque cheesecake slice"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded overflow-hidden shadow-sm border border-taupe-border">
                    <img
                      src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=600&q=80"
                      alt="Calm café corner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Atmosphere Text */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-caramel text-xs uppercase tracking-editorial font-semibold">
                <Coffee className="w-4 h-4" />
                <span>Our Atmosphere & Books</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso leading-tight">
                A little pause in the middle of the city.
              </h2>

              <p className="text-base text-charcoal leading-relaxed font-light">
                Come for coffee, stay for a meal, and take your time over something you love.
                Tucked on the second floor along Janpath in Master Canteen, Bocca Cafe was created
                as a tranquil refuge from the bustling streets of Bhubaneswar.
              </p>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                Whether you are diving into a novel from our book shelves, meeting a friend for fresh
                pizzas, working peacefully over an iced americano, or indulging in our signature Basque
                cheesecake — we welcome you with warmth and honest hospitality.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-taupe-border">
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso">Book-Friendly</h4>
                  <p className="text-xs text-mutedgray mt-1">
                    Quiet corners and shelves for readers, thinkers, and writers.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso">Artisanal Kitchen</h4>
                  <p className="text-xs text-mutedgray mt-1">
                    Continental plates, thin-crust pizzas, and daily café bakery.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial font-bold text-espresso hover:text-caramel transition-colors group"
                >
                  <span>Read More About Bocca</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURATED FEATURED DISHES - Varied Editorial Showcase */}
      <section className="py-20 lg:py-28 bg-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-taupe-border">
            <div>
              <span className="text-xs uppercase tracking-editorial text-caramel font-semibold block mb-2">
                Curated Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
                From Our Kitchen & Counter
              </h2>
            </div>
            <Link
              to="/menu"
              className="mt-4 md:mt-0 text-xs uppercase tracking-editorial font-semibold text-espresso hover:text-caramel flex items-center gap-1.5 transition-colors"
            >
              <span>View All 187 Menu Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Varied Showcase Grid: Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, idx) => (
              <div
                key={dish.id}
                className={`bg-ivory/50 rounded border border-taupe-border/80 overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`${idx === 0 ? 'md:flex' : ''}`}>
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-ivory ${
                      idx === 0
                        ? 'md:w-1/2 aspect-[4/3] md:aspect-auto'
                        : 'aspect-[4/3] w-full'
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-warmwhite/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider text-espresso">
                      {dish.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex flex-col justify-between ${idx === 0 ? 'md:w-1/2' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            dish.isVeg ? 'bg-green-600' : 'bg-red-700'
                          }`}
                          title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        />
                        <span className="text-xs text-mutedgray uppercase tracking-wider">
                          {dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso mb-2 group-hover:text-caramel transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-taupe-border/60 flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-espresso">
                        {formatCurrency(dish.price)}
                      </span>
                      <button
                        onClick={() => addToCart(dish, 1)}
                        className="px-4 py-2 bg-espresso hover:bg-caramel text-warmwhite hover:text-espresso text-xs uppercase tracking-editorial font-semibold rounded transition-colors shadow-sm"
                      >
                        Add to Tray
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Menu Explorer Banner */}
          <div className="mt-14 bg-espresso text-warmwhite rounded p-8 sm:p-12 text-center space-y-4">
            <span className="text-caramel text-xs uppercase tracking-widest font-semibold">
              The Complete Menu
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold max-w-xl mx-auto">
              From the first cup of coffee to the last bite of dessert.
            </h3>
            <p className="text-sm text-taupe max-w-md mx-auto font-light">
              Explore all 17 culinary categories with live filters, instant search, and transparent prices.
            </p>
            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-caramel text-espresso hover:bg-caramel-light text-xs uppercase tracking-editorial font-bold rounded transition-colors shadow-md"
              >
                <span>Browse Full Menu (187 Dishes)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISITING BOCCA - Location & Direct Information */}
      <section className="py-20 bg-ivory border-t border-taupe-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-editorial text-caramel font-semibold">
                Drop In
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
                Visit Us in Bhubaneswar
              </h2>
              <p className="text-base text-charcoal font-light leading-relaxed">
                We are conveniently located on the second floor of Janpath Road in the Master Canteen
                area, right beside Lalchand Jewellers in Ashok Nagar / Kharvela Nagar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-warmwhite p-5 rounded border border-taupe-border">
                  <MapPin className="w-5 h-5 text-caramel mb-2" />
                  <h4 className="font-serif text-base font-bold text-espresso mb-1">Address</h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    2nd Floor, 108/B, Janpath Road, Master Canteen Area, Ashok Nagar, Bhubaneswar, Odisha 751001
                  </p>
                </div>

                <div className="bg-warmwhite p-5 rounded border border-taupe-border">
                  <Clock className="w-5 h-5 text-caramel mb-2" />
                  <h4 className="font-serif text-base font-bold text-espresso mb-1">Café Timings</h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Monday to Sunday <br />
                    8:30 AM to 10:30 PM (All 7 Days)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://maps.google.com/?q=Bocca+Cafe+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-espresso text-warmwhite hover:bg-caramel hover:text-espresso text-xs uppercase tracking-editorial font-semibold rounded transition-colors"
                >
                  Get Directions on Map
                </a>
                <a
                  href="tel:+917381285555"
                  className="px-6 py-3 border border-espresso text-espresso hover:bg-espresso hover:text-warmwhite text-xs uppercase tracking-editorial font-semibold rounded transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 73812 85555</span>
                </a>
              </div>
            </div>

            {/* Right Card / Reservation Teaser */}
            <div className="lg:col-span-5 bg-warmwhite p-8 rounded border border-taupe-border shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-caramel">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs uppercase tracking-editorial font-bold">Table Enquiries</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso">
                Planning a gathering or book session?
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Whether it is a relaxed weekend brunch, a book club discussion, or a small work session,
                submit a reservation enquiry and our team will get back to you with seating options.
              </p>
              <div className="pt-2">
                <Link
                  to="/reservations"
                  className="w-full py-3 bg-caramel hover:bg-caramel-light text-espresso font-semibold text-xs uppercase tracking-editorial rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </Link>
              </div>
              <p className="text-[11px] text-mutedgray text-center italic">
                No instant card payments required — enquiries confirmed by café staff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
