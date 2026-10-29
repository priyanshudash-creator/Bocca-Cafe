import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './hooks/useCart';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { OurStory } from './pages/OurStory';
import { Gallery } from './pages/Gallery';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Check, ShoppingBag } from 'lucide-react';
import { formatCurrency } from './utils/currency';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Added to Tray Toast notification
function AddedToTrayToast() {
  const { lastAddedItem, setIsCartOpen } = useCart();

  if (!lastAddedItem) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div className="bg-espresso text-warmwhite rounded shadow-xl border border-taupe-dark/30 p-3.5 pr-4 flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-caramel text-espresso flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-taupe uppercase tracking-wider font-semibold">
            Added to tray
          </p>
          <p className="font-serif text-sm font-bold truncate text-warmwhite">
            {lastAddedItem.name}
          </p>
          <span className="text-xs text-caramel">
            {formatCurrency(lastAddedItem.price)}
          </span>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className="text-xs bg-warmwhite/10 hover:bg-warmwhite/20 text-warmwhite px-2.5 py-1.5 rounded transition-colors uppercase tracking-editorial font-bold flex items-center gap-1 shrink-0"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>View</span>
        </button>
      </div>
    </div>
  );
}

function MainApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <AddedToTrayToast />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
