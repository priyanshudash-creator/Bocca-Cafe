import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/currency';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  if (!isCartOpen) return null;

  // Generate WhatsApp order message
  const handleWhatsAppOrder = () => {
    const itemsList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name} x ${item.quantity} = ₹${
            item.product.price * item.quantity
          }`
      )
      .join('%0A');

    const totalText = `*Subtotal:* ₹${subtotal}`;
    const message = `Hello Bocca Cafe! I would like to place an order:%0A%0A${itemsList}%0A%0A${totalText}%0A%0APlease let me know preparation time and table/pickup details. Thank you!`;

    // Configurable official cafe phone number
    const cafePhone = '917381285555';
    window.open(`https://wa.me/${cafePhone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-warmwhite shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-taupe-border/80 flex items-center justify-between bg-ivory">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-caramel" />
              <h2 className="font-serif text-xl font-bold text-espresso">
                Your Café Order
              </h2>
              {totalItems > 0 && (
                <span className="text-xs bg-espresso text-warmwhite px-2 py-0.5 rounded-full font-semibold">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-mutedgray hover:text-espresso hover:bg-taupe/30 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-taupe-border/40">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-ivory flex items-center justify-center border border-taupe-border">
                  <ShoppingBag className="w-8 h-8 text-taupe-dark" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg font-medium text-espresso">
                    Your tray is empty
                  </p>
                  <p className="text-xs text-mutedgray max-w-xs mx-auto">
                    Browse our handcrafted coffees, artisan breakfast, pastas, and desserts to begin.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-2 px-5 py-2.5 bg-espresso text-warmwhite text-xs font-semibold uppercase tracking-editorial rounded hover:bg-caramel hover:text-espresso transition-colors"
                >
                  Explore the Menu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-3.5 items-start">
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded object-cover border border-taupe-border/60 shrink-0 bg-ivory"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-base font-semibold text-espresso truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-mutedgray hover:text-red-700 p-1 -mr-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-mutedgray mb-2">
                      {formatCurrency(item.product.price)} each
                    </p>

                    {/* Quantity & Line Total */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-taupe-border rounded bg-ivory/60 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-espresso hover:bg-taupe/30 text-sm font-semibold"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs font-bold text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-espresso hover:bg-taupe/30 text-sm font-semibold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-base font-bold text-espresso">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Actions */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-taupe-border/80 bg-ivory/60 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-mutedgray">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-mutedgray">
                  <span>Taxes (Included in menu pricing)</span>
                  <span>₹0 additional</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-espresso pt-2 border-t border-taupe-border/40">
                  <span>Estimated Total</span>
                  <span className="text-xl">{formatCurrency(subtotal)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 bg-espresso text-warmwhite text-xs font-semibold uppercase tracking-editorial rounded flex items-center justify-center gap-2 hover:bg-caramel hover:text-espresso transition-colors shadow-sm"
                >
                  <span>Review & Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-2.5 bg-green-700 text-warmwhite text-xs font-semibold uppercase tracking-editorial rounded flex items-center justify-center gap-2 hover:bg-green-800 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-mutedgray hover:text-red-700 underline transition-colors"
                  >
                    Clear Tray
                  </button>
                  <p className="text-[11px] text-mutedgray text-right">
                    Direct pickup or table ordering
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
