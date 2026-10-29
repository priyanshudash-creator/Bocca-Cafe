import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft, MessageCircle, CheckCircle2, Clock, AlertCircle, Utensils } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/currency';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableOrTime, setTableOrTime] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: { name?: string; phone?: string } = {};
    if (!customerName.trim()) errs.name = 'Please enter your name.';
    if (!customerPhone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+\s-]{10,14}$/.test(customerPhone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceedWhatsApp = () => {
    if (!validate()) return;

    const itemsSummary = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (x${item.quantity}) - ₹${
            item.product.price * item.quantity
          }`
      )
      .join('%0A');

    const message = `*BOCCA CAFE ORDER REQUEST*%0A---------------------------%0A*Customer:* ${encodeURIComponent(
      customerName
    )}%0A*Phone:* ${encodeURIComponent(
      customerPhone
    )}%0A*Type:* ${orderType.toUpperCase()}${
      tableOrTime ? ` (${encodeURIComponent(tableOrTime)})` : ''
    }%0A%0A*ITEMS:*%0A${itemsSummary}%0A---------------------------%0A*Estimated Total:* ₹${subtotal} (incl. GST)%0A${
      specialNotes ? `*Special Notes:* ${encodeURIComponent(specialNotes)}%0A` : ''
    }%0APlease confirm if this order can be prepared. Thank you!`;

    window.open(`https://wa.me/917381285555?text=${message}`, '_blank');
    setOrderSubmitted(true);
  };

  const handleDemoConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setOrderSubmitted(true);
  };

  if (cart.length === 0 && !orderSubmitted) {
    return (
      <div className="bg-warmwhite min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center space-y-5">
          <div className="w-20 h-20 mx-auto rounded-full bg-ivory border border-taupe-border flex items-center justify-center text-caramel">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-espresso">
            Your Order Tray is Empty
          </h1>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Take your time browsing our complete menu of artisan breakfast, stone-baked pizzas,
            comforting pastas, and house-brewed coffees.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-warmwhite text-xs uppercase tracking-editorial font-bold rounded hover:bg-caramel hover:text-espresso transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore The Menu</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Top Nav & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-editorial font-semibold text-espresso hover:text-caramel transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Menu</span>
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              Order Review & Request
            </h1>
          </div>

          {!orderSubmitted && (
            <button
              onClick={clearCart}
              className="text-xs text-mutedgray hover:text-red-700 underline self-start sm:self-auto"
            >
              Clear Entire Tray
            </button>
          )}
        </div>

        {orderSubmitted ? (
          /* Confirmation State without faking payment */
          <div className="bg-warmwhite rounded border border-taupe-border p-8 sm:p-12 shadow-md space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                Order Summary Prepared for Bocca Cafe
              </h2>
              <p className="text-sm text-charcoal font-medium max-w-lg mx-auto">
                Thank you, {customerName}. Your order details are ready.
              </p>
              <p className="text-xs text-mutedgray max-w-md mx-auto leading-relaxed pt-1">
                Bocca Cafe receives order confirmations directly at our Janpath location or via
                WhatsApp. No upfront online card payment was collected.
              </p>
            </div>

            {/* Ticket details */}
            <div className="bg-ivory/60 p-6 rounded border border-taupe-border/80 max-w-lg mx-auto text-sm space-y-3">
              <div className="flex justify-between items-center border-b border-taupe-border/40 pb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-espresso">
                  Order Summary ({totalItems} items)
                </span>
                <span className="font-serif font-bold text-espresso text-base">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <ul className="text-xs space-y-1.5 divide-y divide-taupe-border/30">
                {cart.map((item) => (
                  <li key={item.product.id} className="pt-1.5 flex justify-between">
                    <span className="text-charcoal truncate pr-2">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-semibold text-espresso shrink-0">
                      {formatCurrency(item.product.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] text-mutedgray flex items-center justify-between">
                <span>Method: {orderType === 'dine-in' ? 'Dine-In Table' : 'Takeaway Pickup'}</span>
                <span>Contact: {customerPhone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-2">
              <button
                onClick={handleProceedWhatsApp}
                className="flex-1 py-3 bg-green-700 hover:bg-green-800 text-warmwhite text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>
              <Link
                to="/menu"
                onClick={clearCart}
                className="flex-1 py-3 bg-espresso hover:bg-caramel text-warmwhite hover:text-espresso text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center transition-colors text-center"
              >
                Done & Return to Menu
              </Link>
            </div>
          </div>
        ) : (
          /* Order Layout: Left Items Table, Right Checkout Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Items List */}
            <div className="lg:col-span-7 bg-warmwhite rounded border border-taupe-border/80 shadow-xs divide-y divide-taupe-border/40">
              <div className="p-4 sm:p-5 bg-ivory/60 flex items-center justify-between">
                <span className="text-xs uppercase tracking-editorial font-bold text-espresso">
                  Selected Dishes ({totalItems})
                </span>
                <span className="text-xs text-mutedgray">Exact menu pricing in INR</span>
              </div>

              <div className="p-4 sm:p-6 divide-y divide-taupe-border/40 space-y-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded object-cover border border-taupe-border/60 shrink-0 bg-ivory"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-base font-semibold text-espresso truncate">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-mutedgray hover:text-red-700 p-1 -mr-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-mutedgray">
                        {formatCurrency(item.product.price)} each
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity adjuster */}
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
                ))}
              </div>

              {/* Subtotal summary bar */}
              <div className="p-4 sm:p-5 bg-ivory/30 space-y-2 text-sm">
                <div className="flex justify-between text-mutedgray text-xs">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-mutedgray text-xs">
                  <span>Taxes (Included in menu price)</span>
                  <span>₹0 additional</span>
                </div>
                <div className="flex justify-between font-serif font-bold text-lg text-espresso pt-2 border-t border-taupe-border/40">
                  <span>Estimated Total</span>
                  <span className="text-2xl">{formatCurrency(subtotal)}</span>
                </div>
              </div>
            </div>

            {/* Right: Checkout Details Form */}
            <div className="lg:col-span-5 bg-warmwhite rounded border border-taupe-border shadow-xs p-6 sm:p-8 space-y-5">
              <h2 className="font-serif text-2xl font-bold text-espresso border-b border-taupe-border/60 pb-3">
                Order Information
              </h2>

              <form onSubmit={handleDemoConfirm} noValidate className="space-y-4">
                {/* Order Type Toggle */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-2">
                    Service Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`p-3 rounded border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        orderType === 'dine-in'
                          ? 'bg-espresso text-warmwhite border-espresso'
                          : 'bg-ivory/60 text-charcoal border-taupe-border hover:border-caramel'
                      }`}
                    >
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Dine-In at Cafe</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`p-3 rounded border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        orderType === 'takeaway'
                          ? 'bg-espresso text-warmwhite border-espresso'
                          : 'bg-ivory/60 text-charcoal border-taupe-border hover:border-caramel'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Takeaway Pickup</span>
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full px-3.5 py-2.5 bg-ivory/40 border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                      errors.name ? 'border-red-600' : 'border-taupe-border'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className={`w-full px-3.5 py-2.5 bg-ivory/40 border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                      errors.phone ? 'border-red-600' : 'border-taupe-border'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                {/* Table Number or Pickup Time */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1">
                    {orderType === 'dine-in'
                      ? 'Table Number (if already seated)'
                      : 'Estimated Pickup Time'}
                  </label>
                  <input
                    type="text"
                    value={tableOrTime}
                    onChange={(e) => setTableOrTime(e.target.value)}
                    placeholder={
                      orderType === 'dine-in'
                        ? 'e.g. Table 4 / Book Nook'
                        : 'e.g. In 20 minutes / 6:30 PM'
                    }
                    className="w-full px-3.5 py-2.5 bg-ivory/40 border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1">
                    Special Preparation Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Extra hot coffee, less sugar, no onion..."
                    className="w-full px-3.5 py-2.5 bg-ivory/40 border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                  />
                </div>

                {/* Honest Disclaimer */}
                <div className="flex items-start gap-2 p-3 rounded bg-ivory text-xs text-charcoal-muted border border-taupe-border/60">
                  <AlertCircle className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                  <p>
                    Orders are processed upon arrival at Bocca Cafe or directly via WhatsApp. Payment is settled at the café.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleProceedWhatsApp}
                    className="w-full py-3 bg-green-700 hover:bg-green-800 text-warmwhite text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order to Bocca Cafe via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full py-2.5 border border-espresso text-espresso hover:bg-espresso hover:text-warmwhite text-xs uppercase tracking-editorial font-semibold rounded transition-colors text-center"
                  >
                    Prepare Order Summary (Demo Mode)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
