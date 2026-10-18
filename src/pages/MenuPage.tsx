import { useState, useMemo } from "react";
import { Search, X, UtensilsCrossed, ArrowRight, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { SmartImage } from "../components/SmartImage";
import { Button } from "../components/Button";
import { menuItems, menuCategories } from "../data/menu";
import { restaurantConfig } from "../data/config";
import { formatPrice } from "../utils/format";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { DietaryLabel, AvailabilityStatus } from "../types";

const dietaryLabels: Record<DietaryLabel, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  spicy: "Spicy",
  halal: "Halal",
  "gluten-free": "Gluten-Free",
  "nut-free": "Nut-Free",
};

const dietaryDotColors: Record<DietaryLabel, string> = {
  vegetarian: "bg-olive-500",
  vegan: "bg-olive-600",
  spicy: "bg-error-500",
  halal: "bg-gold-500",
  "gluten-free": "bg-success-500",
  "nut-free": "bg-warning-500",
};

const availabilityStyles: Record<AvailabilityStatus, { label: string; dotClass: string; textClass: string }> = {
  available: { label: "Available", dotClass: "bg-success-500", textClass: "text-success-500" },
  limited: { label: "Limited", dotClass: "bg-warning-500", textClass: "text-warning-500" },
  unavailable: { label: "Unavailable", dotClass: "bg-error-500", textClass: "text-error-500" },
};

export function MenuPage() {
  useDocumentMeta({
    title: `Menu — ${restaurantConfig.name}`,
    description:
      "Explore Zacks Restaurant's full menu of Nigerian dishes — jollof rice, suya, egusi soup, and more. Illustrative prices in Nigerian Naira.",
  });

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...menuCategories];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const hasFilters = activeCategory !== "All" || searchQuery !== "";

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <>
      {/* ───────────────── Page header ───────────────── */}
      <section className="bg-charcoal-950 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-400/40" />
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-gold-400">
              Our Menu
            </p>
            <span className="h-px w-8 bg-gold-400/40" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-ivory-50 text-balance leading-[1.1]">
            The Zacks Kitchen
          </h1>
          <p className="mt-6 text-base sm:text-lg font-sans text-ivory-200/70 max-w-xl mx-auto leading-relaxed">
            A curated selection of Nigerian classics, prepared with care and presented with intention.
          </p>
          <p className="mt-4 text-xs font-sans text-ivory-200/40 max-w-lg mx-auto">
            All prices are illustrative and shown in Nigerian Naira (₦). Menu items are sample data for demonstration purposes.
          </p>
        </div>
      </section>

      {/* ──────────────── Featured dishes ──────────────── */}
      {activeCategory === "All" && searchQuery === "" && (
        <Section className="bg-ivory-100" id="featured">
          <div className="mb-10 lg:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-500/40" />
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-gold-600">
                Chef's Selection
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-[1.12] text-charcoal-900 text-balance">
              Signature dishes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                to="#menu-list"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("menu-list")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex flex-col overflow-hidden bg-ivory-50 transition-shadow duration-500 hover:shadow-2xl"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  {item.image ? (
                    <SmartImage
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    />
                  ) : (
                    <div className="h-full w-full bg-charcoal-100 flex items-center justify-center">
                      <UtensilsCrossed size={32} className="text-charcoal-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-serif font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm font-sans text-charcoal-500 leading-relaxed flex-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-charcoal-100 flex items-center justify-between">
                    <span className="text-base font-sans font-semibold text-gold-700">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-charcoal-400 group-hover:text-gold-500 transition-colors duration-300">
                      View Dish
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ──────────────── Search & filter bar ──────────────── */}
      <div id="menu-list" className="bg-ivory-50 border-y border-charcoal-100 sticky top-16 lg:top-20 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          {/* Search */}
          <div className="max-w-md mx-auto mb-5">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dish name or description..."
                className="w-full pl-12 pr-4 py-3 font-sans text-sm text-charcoal-800 bg-ivory-100 border border-charcoal-200 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 min-w-8 min-h-8 text-charcoal-400 hover:text-charcoal-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 min-h-9 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-charcoal-800 text-ivory-50"
                    : "text-charcoal-500 hover:text-charcoal-800 border border-charcoal-200 hover:border-charcoal-400"
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
            {hasFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.1em] text-gold-600 hover:text-gold-700 transition-colors"
                aria-label="Clear all filters"
              >
                <X size={13} />
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ──────────────── Menu items ──────────────── */}
      <Section className="bg-ivory-50">
        {/* Results count */}
        <div className="flex items-center gap-3 mb-8">
          <SlidersHorizontal size={14} className="text-charcoal-300" />
          <p className="text-sm font-sans text-charcoal-500">
            {filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}
            {activeCategory !== "All" && <> in {activeCategory}</>}
          </p>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-ivory-100 overflow-hidden flex flex-col group transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="aspect-[16/11] overflow-hidden relative">
                  {item.image ? (
                    <SmartImage
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="h-full w-full bg-charcoal-100 flex items-center justify-center">
                      <UtensilsCrossed size={36} className="text-charcoal-300" />
                    </div>
                  )}
                  {/* Availability dot */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-ivory-50/90 backdrop-blur-sm px-2.5 py-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${availabilityStyles[item.availability].dotClass}`} />
                    <span className={`text-[10px] font-sans font-medium uppercase tracking-wide ${availabilityStyles[item.availability].textClass}`}>
                      {availabilityStyles[item.availability].label}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-serif font-semibold text-charcoal-900 leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-base font-sans font-semibold text-gold-700 flex-shrink-0 whitespace-nowrap">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm font-sans text-charcoal-500 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  {/* Dietary labels */}
                  {item.dietary.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-charcoal-100 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {item.dietary.map((label) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.08em] text-charcoal-500"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${dietaryDotColors[label]}`} />
                          {dietaryLabels[label]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20 lg:py-28">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal-100 mb-6">
              <Search size={28} className="text-charcoal-300" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">
              No dishes found
            </h3>
            <p className="text-sm font-sans text-charcoal-500 mb-8 max-w-sm mx-auto leading-relaxed">
              We couldn't find any dishes matching {searchQuery ? `"{searchQuery}"` : "this category"}. Try adjusting your filters or search term.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-11 text-xs font-sans font-medium uppercase tracking-[0.12em] bg-charcoal-800 text-ivory-50 hover:bg-charcoal-700 transition-colors"
            >
              <X size={15} />
              Clear All Filters
            </button>
          </div>
        )}
      </Section>

      {/* ──────────────── Bottom CTA ──────────────── */}
      <section className="bg-charcoal-950 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-ivory-50 text-balance">
            Ready to join us?
          </h2>
          <p className="mt-3 text-sm font-sans text-ivory-200/60">
            Reserve a table and experience the Zacks kitchen in person.
          </p>
          <div className="mt-8">
            <Button to="/reservations" size="lg" variant="primary">
              Reserve a Table
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
