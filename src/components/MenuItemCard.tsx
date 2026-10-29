import React, { useState } from 'react';
import { Plus, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { formatCurrency } from '../utils/currency';
import { useCart } from '../hooks/useCart';

interface MenuItemCardProps {
  item: MenuItem;
  layout?: 'grid' | 'row';
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, layout = 'row' }) => {
  const { addToCart, cart, updateQuantity } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const cartEntry = cart.find((c) => c.product.id === item.id);
  const quantityInCart = cartEntry ? cartEntry.quantity : 0;

  const handleAdd = () => {
    addToCart(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  // Veg / Non-Veg Indicator Symbol
  const VegBadge = () => (
    <div
      className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 rounded-[2px] ${
        item.isVeg ? 'border-green-600' : 'border-red-700'
      }`}
      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          item.isVeg ? 'bg-green-600' : 'bg-red-700'
        }`}
      />
    </div>
  );

  if (layout === 'row') {
    return (
      <article className="group bg-warmwhite hover:bg-ivory/50 transition-colors border-b border-taupe-border/50 py-4 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Thumbnail & Details */}
        <div className="flex items-start gap-3.5 flex-1 min-w-0">
          {/* Dish Image Thumbnail with subtle hover zoom */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded overflow-hidden bg-ivory border border-taupe-border/60">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imgLoaded && (
              <div className="absolute inset-0 bg-taupe/20 animate-pulse" />
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-1">
              <VegBadge />
              <h3 className="font-serif text-base sm:text-lg text-espresso font-semibold tracking-wide truncate group-hover:text-caramel-dark transition-colors">
                {item.name}
              </h3>
              {item.isChefSpecial && (
                <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] uppercase font-bold text-caramel bg-caramel/10 px-1.5 py-0.5 rounded">
                  <Sparkles className="w-2.5 h-2.5" />
                  Special
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-xs sm:text-sm text-charcoal-muted line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            )}
            <span className="text-[11px] text-mutedgray uppercase tracking-wider block mt-1">
              {item.category}
            </span>
          </div>
        </div>

        {/* Right: Price & Cart Action */}
        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 sm:pl-4 self-end sm:self-center w-full sm:w-auto border-t sm:border-t-0 border-taupe-border/30 pt-2 sm:pt-0">
          <div className="text-right">
            <span className="font-serif text-lg sm:text-xl font-bold text-espresso tracking-tight block">
              {formatCurrency(item.price)}
            </span>
            <span className="text-[10px] text-mutedgray block uppercase tracking-wider">
              incl. taxes
            </span>
          </div>

          {/* Cart Quantity Controller or Add Button */}
          {quantityInCart > 0 ? (
            <div className="inline-flex items-center border border-espresso rounded bg-warmwhite shadow-sm overflow-hidden">
              <button
                onClick={() => updateQuantity(item.id, quantityInCart - 1)}
                className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-ivory transition-colors text-sm font-semibold"
                aria-label={`Decrease ${item.name} quantity`}
              >
                -
              </button>
              <span className="px-2.5 text-xs font-bold text-espresso">
                {quantityInCart}
              </span>
              <button
                onClick={() => updateQuantity(item.id, quantityInCart + 1)}
                className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-ivory transition-colors text-sm font-semibold"
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-editorial rounded transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                justAdded
                  ? 'bg-green-700 text-warmwhite'
                  : 'bg-espresso text-warmwhite hover:bg-caramel hover:text-espresso'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Added
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </>
              )}
            </button>
          )}
        </div>
      </article>
    );
  }

  // Grid / Card Layout
  return (
    <article className="group bg-warmwhite rounded border border-taupe-border/70 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300">
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!imgLoaded && (
            <div className="absolute inset-0 bg-taupe/20 animate-pulse" />
          )}

          {/* Veg indicator & badges */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <div className="bg-warmwhite/90 backdrop-blur-sm p-1 rounded shadow-sm">
              <VegBadge />
            </div>
            {item.isChefSpecial && (
              <span className="bg-espresso/90 text-warmwhite text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">
                Chef's Pick
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-1.5">
            <h3 className="font-serif text-lg font-semibold text-espresso leading-snug group-hover:text-caramel-dark transition-colors">
              {item.name}
            </h3>
          </div>
          {item.description && (
            <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed mb-3">
              {item.description}
            </p>
          )}
          <span className="text-[11px] text-mutedgray uppercase tracking-wider block">
            {item.category}
          </span>
        </div>
      </div>

      {/* Footer / Price & Add */}
      <div className="p-4 pt-2 border-t border-taupe-border/40 flex items-center justify-between">
        <div>
          <span className="font-serif text-xl font-bold text-espresso">
            {formatCurrency(item.price)}
          </span>
        </div>

        {quantityInCart > 0 ? (
          <div className="inline-flex items-center border border-espresso rounded bg-warmwhite shadow-sm overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, quantityInCart - 1)}
              className="w-7 h-7 flex items-center justify-center text-espresso hover:bg-ivory transition-colors text-sm font-semibold"
              aria-label={`Decrease ${item.name} quantity`}
            >
              -
            </button>
            <span className="px-2 text-xs font-bold text-espresso">
              {quantityInCart}
            </span>
            <button
              onClick={() => updateQuantity(item.id, quantityInCart + 1)}
              className="w-7 h-7 flex items-center justify-center text-espresso hover:bg-ivory transition-colors text-sm font-semibold"
              aria-label={`Increase ${item.name} quantity`}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-editorial rounded transition-all duration-200 flex items-center gap-1.5 ${
              justAdded
                ? 'bg-green-700 text-warmwhite'
                : 'bg-espresso text-warmwhite hover:bg-caramel hover:text-espresso'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                Add
              </>
            )}
          </button>
        )}
      </div>
    </article>
  );
};
