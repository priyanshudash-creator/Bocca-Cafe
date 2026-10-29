import React, { useState } from 'react';
import { Camera, X, ZoomIn, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Atmosphere & Books',
    'Coffee & Beverages',
    'Artisanal Food',
    'Bakery & Desserts',
  ];

  const filteredGallery =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-warmwhite min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-caramel text-xs uppercase tracking-widest font-semibold">
            <Camera className="w-4 h-4" />
            <span>Visual Story</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso">
            Photographic Gallery
          </h1>
          <p className="text-sm sm:text-base text-charcoal font-light leading-relaxed">
            A glimpse into the quiet mornings, artisanal cups, fresh plates, and book-lined
            tables at Bocca Cafe Bhubaneswar.
          </p>

          {/* Honest Note on Photography */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-ivory text-xs text-mutedgray border border-taupe-border">
            <Info className="w-3.5 h-3.5 text-caramel shrink-0" />
            <span>Curated editorial photography capturing our culinary style and book cafe mood.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-editorial transition-all border ${
                activeCategory === category
                  ? 'bg-espresso text-warmwhite border-espresso font-semibold shadow-xs'
                  : 'bg-ivory text-charcoal border-taupe-border hover:border-caramel'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer overflow-hidden rounded bg-ivory border border-taupe-border shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-espresso/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-warmwhite">
                <span className="text-[10px] uppercase tracking-widest text-caramel font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-taupe line-clamp-2">{item.caption}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-caramel-light font-medium">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge photograph</span>
                </div>
              </div>

              {/* Mobile Always-Visible Caption */}
              <div className="p-3.5 sm:hidden border-t border-taupe-border/50">
                <span className="text-[10px] uppercase text-caramel font-semibold block">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-espresso">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-warmwhite rounded overflow-hidden shadow-2xl border border-taupe-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-espresso/70 text-warmwhite hover:bg-espresso transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="aspect-[16/10] w-full bg-espresso overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Caption Panel */}
            <div className="p-6 bg-warmwhite space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-caramel font-bold">
                  {selectedPhoto.category}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-espresso">
                {selectedPhoto.title}
              </h2>
              <p className="text-sm text-charcoal leading-relaxed font-light">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
