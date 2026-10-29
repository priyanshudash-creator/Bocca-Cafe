import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Clock, ExternalLink, BookOpen, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-taupe-light border-t border-espresso-700">
      {/* Top Ambient Banner */}
      <div className="border-b border-espresso-700/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-full bg-espresso-700 text-caramel">
              <Coffee className="w-5 h-5" />
            </span>
            <div>
              <p className="font-serif text-lg text-warmwhite font-medium">
                "Good food. Good coffee. Good company."
              </p>
              <p className="text-xs text-taupe tracking-wide">
                A little pause in the heart of Master Canteen, Bhubaneswar.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/menu"
              className="text-xs uppercase tracking-editorial font-semibold px-4 py-2 bg-caramel text-espresso hover:bg-caramel-light transition-colors rounded"
            >
              Explore Full Menu
            </Link>
            <Link
              to="/reservations"
              className="text-xs uppercase tracking-editorial font-semibold px-4 py-2 border border-taupe-dark text-taupe-light hover:text-warmwhite hover:border-warmwhite transition-colors rounded"
            >
              Enquire Table
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Wordmark & Philosophy */}
        <div className="space-y-4">
          <div className="flex flex-col items-start">
            <span className="font-serif text-2xl font-bold tracking-widest text-warmwhite uppercase">
              BOCCA CAFE
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-caramel font-medium">
              Bhubaneswar • Est. Odisha
            </span>
          </div>
          <p className="text-sm text-taupe leading-relaxed">
            A welcoming café for slow mornings, satisfying meals, coffee breaks, and something sweet.
            Celebrating books, local art, and conversations over fresh culinary craft.
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs text-taupe-dark">
            <BookOpen className="w-4 h-4 text-caramel shrink-0" />
            <span>Mini library & reading friendly tables</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-serif text-base text-warmwhite uppercase tracking-editorial mb-4 pb-2 border-b border-espresso-700">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-caramel transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/our-story" className="hover:text-caramel transition-colors">Our Atmosphere & Story</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-caramel transition-colors">Complete Food & Drink Menu</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-caramel transition-colors">Photographic Gallery</Link>
            </li>
            <li>
              <Link to="/reservations" className="hover:text-caramel transition-colors">Table Enquiries & Groups</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-caramel transition-colors">Location & Contact</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Visit & Timings */}
        <div>
          <h4 className="font-serif text-base text-warmwhite uppercase tracking-editorial mb-4 pb-2 border-b border-espresso-700">
            Visit Us
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-caramel shrink-0 mt-1" />
              <p className="text-taupe leading-relaxed">
                2nd Floor, 108/B, Janpath Road, Master Canteen Area, Ashok Nagar, Bhubaneswar, Odisha 751001, India.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-caramel shrink-0" />
              <p className="text-taupe">Monday – Sunday: 8:30 AM – 10:30 PM</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-caramel shrink-0" />
              <a href="tel:+917381285555" className="hover:text-caramel transition-colors text-warmwhite font-medium">
                +91 73812 85555
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Verified Social & Direct Actions */}
        <div>
          <h4 className="font-serif text-base text-warmwhite uppercase tracking-editorial mb-4 pb-2 border-b border-espresso-700">
            Connect & Follow
          </h4>
          <p className="text-sm text-taupe mb-4 leading-relaxed">
            Follow our verified official Instagram page for everyday cafe moments, book club gatherings, and daily specials:
          </p>
          <a
            href="https://www.instagram.com/boccabbsr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-espresso-700 hover:bg-espresso-600 text-warmwhite text-xs font-medium tracking-wide transition-colors border border-espresso-600"
          >
            <Instagram className="w-4 h-4 text-caramel" />
            <span>@boccabbsr</span>
            <ExternalLink className="w-3 h-3 text-taupe" />
          </a>
          <p className="text-[11px] text-taupe-dark mt-3">
            Official website: <span className="text-taupe font-mono">boccacafe.in</span>
          </p>
        </div>
      </div>

      {/* Bottom Legal & Disclaimer */}
      <div className="border-t border-espresso-700/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-taupe-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Bocca Cafe Bhubaneswar. All rights reserved. Prices inclusive of applicable GST.
          </p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-taupe">Editorial Café Aesthetic</span>
            <span>•</span>
            <span className="hover:text-taupe">Master Canteen, Janpath</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
