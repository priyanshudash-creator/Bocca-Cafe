import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, LayoutGrid, List, CheckCircle2, X } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { MENU_CATEGORIES } from '../data/categories';
import { MenuCategoryName } from '../types';
import { MenuItemCard } from '../components/MenuItemCard';
import { useCart } from '../hooks/useCart';

export const Menu: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as MenuCategoryName) || 'All Items';

  const [activeCategory, setActiveCategory] = useState<MenuCategoryName>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [viewMode, setViewMode] = useState<'row' | 'grid'>('row');

  const { totalItems, setIsCartOpen } = useCart();

  // Handle category change and sync with searchParams
  const handleCategorySelect = (category: MenuCategoryName) => {
    setActiveCategory(category);
    if (category === 'All Items') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  // Filtered Items logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'All Items' || item.category === activeCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query);

      // Diet match
      const matchesDiet =
        dietFilter === 'all'
          ? true
          : dietFilter === 'veg'
          ? item.isVeg
          : !item.isVeg;

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [activeCategory, searchQuery, dietFilter]);

  // Group items by category if "All Items" is selected without active text search,
  // providing a clean, classic bistro menu structure
  const groupedByCategory = useMemo(() => {
    if (activeCategory !== 'All Items' || searchQuery.trim() !== '') {
      return null;
    }

    const groups: { category: MenuCategoryName; items: typeof MENU_ITEMS }[] = [];
    MENU_CATEGORIES.forEach((cat) => {
      if (cat.id === 'All Items') return;
      const itemsInCat = filteredItems.filter((item) => item.category === cat.id);
      if (itemsInCat.length > 0) {
        groups.push({ category: cat.id, items: itemsInCat });
      }
    });
    return groups;
  }, [activeCategory, searchQuery, filteredItems]);

  return (
    <div className="bg-ivory/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Culinary Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso">
            The Menu
          </h1>
          <p className="text-sm sm:text-base text-charcoal font-light leading-relaxed">
            From the first cup of coffee to the last bite of dessert. Every dish is prepared
            fresh in our kitchen with honest ingredients and artisan care.
          </p>
        </div>

        {/* Search, Diet Filter & Layout Toggle Controls */}
        <div className="bg-warmwhite rounded border border-taupe-border/80 p-4 mb-8 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedgray" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dish name, pasta, latte, cheesecake..."
                className="w-full pl-10 pr-9 py-2.5 bg-ivory/50 border border-taupe-border/80 rounded text-sm text-espresso placeholder:text-mutedgray focus:outline-none focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-mutedgray hover:text-espresso"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Diet Filter Buttons & View Mode Toggle */}
            <div className="flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto">
              {/* Veg / Non-Veg filters */}
              <div className="inline-flex rounded border border-taupe-border/80 p-0.5 bg-ivory/50 text-xs font-medium">
                <button
                  onClick={() => setDietFilter('all')}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    dietFilter === 'all'
                      ? 'bg-espresso text-warmwhite font-semibold shadow-xs'
                      : 'text-charcoal hover:text-espresso'
                  }`}
                >
                  All ({MENU_ITEMS.length})
                </button>
                <button
                  onClick={() => setDietFilter('veg')}
                  className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
                    dietFilter === 'veg'
                      ? 'bg-green-700 text-warmwhite font-semibold shadow-xs'
                      : 'text-charcoal hover:text-green-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Vegetarian
                </button>
                <button
                  onClick={() => setDietFilter('nonveg')}
                  className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
                    dietFilter === 'nonveg'
                      ? 'bg-red-800 text-warmwhite font-semibold shadow-xs'
                      : 'text-charcoal hover:text-red-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Non-Veg
                </button>
              </div>

              {/* View Layout Switcher (Row vs Grid) */}
              <div className="hidden sm:inline-flex rounded border border-taupe-border/80 p-0.5 bg-ivory/50 text-xs">
                <button
                  onClick={() => setViewMode('row')}
                  title="Bistro list view"
                  className={`p-1.5 rounded ${
                    viewMode === 'row' ? 'bg-espresso text-warmwhite' : 'text-mutedgray hover:text-espresso'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  title="Card grid view"
                  className={`p-1.5 rounded ${
                    viewMode === 'grid' ? 'bg-espresso text-warmwhite' : 'text-mutedgray hover:text-espresso'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Horizontal Scrolling Navigation Bar */}
          <div className="pt-2 border-t border-taupe-border/40">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
              {MENU_CATEGORIES.map((cat) => {
                const count =
                  cat.id === 'All Items'
                    ? MENU_ITEMS.length
                    : MENU_ITEMS.filter((i) => i.category === cat.id).length;
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full transition-all border ${
                      isSelected
                        ? 'bg-espresso text-warmwhite border-espresso font-semibold shadow-sm'
                        : 'bg-warmwhite hover:bg-ivory text-charcoal border-taupe-border hover:border-caramel'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`ml-1.5 text-[10px] ${
                        isSelected ? 'text-taupe-light' : 'text-mutedgray'
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter & Active Category Subtitle */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-2xl font-bold text-espresso">
              {activeCategory}
            </h2>
            <span className="text-xs text-mutedgray">
              — Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
            </span>
          </div>

          {totalItems > 0 && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-xs font-semibold text-caramel hover:text-caramel-dark underline flex items-center gap-1"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{totalItems} in tray</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="bg-warmwhite rounded border border-taupe-border p-12 text-center space-y-4 my-8">
            <SlidersHorizontal className="w-10 h-10 text-mutedgray mx-auto" />
            <div className="space-y-1">
              <p className="font-serif text-xl font-bold text-espresso">
                No matching dishes found
              </p>
              <p className="text-xs text-mutedgray max-w-sm mx-auto">
                We couldn't find any dish matching "{searchQuery}". Try clearing search or choosing another category.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Items');
                setDietFilter('all');
              }}
              className="px-5 py-2.5 bg-espresso text-warmwhite text-xs uppercase tracking-editorial font-semibold rounded hover:bg-caramel hover:text-espresso transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Display Items: If All Items and no search query, display grouped sections for high editorial readability */}
        {groupedByCategory ? (
          <div className="space-y-12">
            {groupedByCategory.map((group) => (
              <section key={group.category} className="space-y-4">
                <div className="flex items-baseline justify-between border-b-2 border-espresso/80 pb-2">
                  <h3 className="font-serif text-2xl font-bold text-espresso tracking-wide">
                    {group.category}
                  </h3>
                  <span className="text-xs text-mutedgray font-medium">
                    {group.items.length} items
                  </span>
                </div>

                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                      : 'bg-warmwhite rounded border border-taupe-border/80 divide-y divide-taupe-border/50 shadow-sm'
                  }
                >
                  {group.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} layout={viewMode} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Filtered flat list */
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'bg-warmwhite rounded border border-taupe-border/80 divide-y divide-taupe-border/50 shadow-sm'
            }
          >
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} layout={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
