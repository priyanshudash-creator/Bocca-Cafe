import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Coffee, Heart, Sparkles } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <div className="bg-warmwhite min-h-screen">
      {/* 1. Header / Editorial Intro */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-taupe-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-caramel/15 text-caramel-dark text-xs uppercase tracking-widest font-semibold border border-caramel/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Bocca Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
            Coffee, books, and the art of taking your time.
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            "We believe that a great café is never just about what is on your plate; it is about the space you are given to simply be."
          </p>
        </div>
      </section>

      {/* 2. Asymmetric Essay & Imagery: The City & The Sanctuary */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] rounded overflow-hidden shadow-xl border border-taupe-border bg-ivory">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
                  alt="Quiet cafe table with books and coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 aspect-square rounded shadow-lg border-4 border-warmwhite overflow-hidden bg-espresso-700">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
                  alt="Freshly brewed coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Prose */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-editorial text-caramel font-semibold block">
                Janpath, Master Canteen
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso leading-snug">
                A second floor sanctuary in Bhubaneswar
              </h2>

              <p className="text-base text-charcoal leading-relaxed font-light">
                Perched above the lively pulse of Janpath Road, Bocca Cafe was created to offer
                Bhubaneswar a different pace. When you climb the stairs to the second floor, the
                incessant honking of Master Canteen gives way to the gentle hum of espresso machines,
                the turning of pages, and unhurried conversation.
              </p>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                From our beginning, Bocca has been intertwined with the creative and literary spirit
                of Odisha. Our shelves hold a thoughtfully gathered collection of literature, arts,
                and essays. Guests are encouraged to pick up a book, settle into a comfortable seat,
                and linger without feeling pressured to rush.
              </p>

              <div className="p-5 rounded bg-ivory border-l-4 border-caramel space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-espresso">
                  An Honest Note on Our Identity
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  We don't invent grand corporate mythologies. Bocca is an independent café shaped day
                  by day by our baristas, kitchen team, and the students, writers, travelers, and
                  families of Bhubaneswar who make these tables their home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars: Books, Kitchen, Community */}
      <section className="py-20 bg-ivory border-y border-taupe-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              What Defines Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              The Three Pillars of Bocca
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-warmwhite p-8 rounded border border-taupe-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-ivory border border-taupe-border flex items-center justify-center text-caramel">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">The Book Culture</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                A curated mini-library in the café celebrating classic fiction, poetry, regional
                writing, and contemporary thought. Books you can open while enjoying your drink.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-warmwhite p-8 rounded border border-taupe-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-ivory border border-taupe-border flex items-center justify-center text-caramel">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">Craft Coffee & Kitchen</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Hand-pulled espresso, thin-crust pizzas, comforting pastas, and fresh desserts baked
                daily in small batches. Honest food crafted to nourish both heart and mind.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-warmwhite p-8 rounded border border-taupe-border shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-ivory border border-taupe-border flex items-center justify-center text-caramel">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">Creative Community</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                A warm gathering place that supports local art, book reading circles, acoustic open
                mics, and thoughtful dialogues that reflect the warmth of Bhubaneswar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Experience */}
      <section className="py-20 lg:py-28 text-center bg-espresso text-warmwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Sparkles className="w-6 h-6 text-caramel mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Write your next chapter here.
          </h2>
          <p className="text-base text-taupe font-light leading-relaxed max-w-xl mx-auto">
            Whether you come alone with your journal or bring friends for an evening meal, our door
            on Janpath is open seven days a week.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="px-7 py-3 bg-caramel text-espresso hover:bg-caramel-light text-xs uppercase tracking-editorial font-bold rounded transition-colors shadow-md"
            >
              See the Menu
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 border border-taupe text-warmwhite hover:border-warmwhite text-xs uppercase tracking-editorial font-medium rounded transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
