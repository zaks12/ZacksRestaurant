import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "../components/Section";
import { SmartImage } from "../components/SmartImage";
import { galleryImages } from "../data/menu";
import { restaurantConfig } from "../data/config";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const galleryCategories = ["All", "Dishes", "Grills", "Preparation", "Atmosphere", "Interior"] as const;
const categoryMap: Record<string, string> = {
  All: "all",
  Dishes: "dishes",
  Grills: "grills",
  Preparation: "preparation",
  Atmosphere: "atmosphere",
  Interior: "interior",
};

export function GalleryPage() {
  useDocumentMeta({
    title: `Gallery — ${restaurantConfig.name}`,
    description: "Explore Zacks Restaurant's gallery of Nigerian dishes, food preparation, dining atmosphere, and restaurant interiors. Stock photography for demonstration.",
  });

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "All" || img.category === categoryMap[activeCategory]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal-950 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-400/40" />
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-gold-400">
              Gallery
            </p>
            <span className="h-px w-8 bg-gold-400/40" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-ivory-50 text-balance leading-[1.1]">
            A Visual Feast
          </h1>
          <p className="mt-6 text-base sm:text-lg font-sans text-ivory-200/70 max-w-2xl mx-auto leading-relaxed">
            Dishes, craft, and atmosphere — a glimpse into the world of Zacks Restaurant.
          </p>
          <p className="mt-4 text-xs font-sans text-ivory-200/55">
            Stock photography for demonstration purposes. Images do not depict the actual restaurant.
          </p>
        </div>
      </section>

      <Section className="bg-ivory-50">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2.5 min-h-9 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                activeCategory === category
                  ? "bg-charcoal-800 text-ivory-50"
                  : "text-charcoal-500 hover:text-charcoal-800 border border-charcoal-200 hover:border-charcoal-400"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid with consistent crops */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filteredImages.map((img, index) => {
            const isLarge = index % 7 === 0 || index % 7 === 3;
            return (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden bg-charcoal-100 ${
                  isLarge ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                } focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50`}
                aria-label={`View image: ${img.alt}`}
              >
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/25 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-charcoal-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[10px] sm:text-xs font-sans text-ivory-200/90 line-clamp-2 leading-snug">
                    {img.alt}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal-950/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close button — top right, clearly visible */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2 px-4 py-2 bg-charcoal-800/80 hover:bg-charcoal-700 text-ivory-50 transition-colors"
            aria-label="Close image viewer"
          >
            <X size={20} />
            <span className="text-xs font-sans font-medium uppercase tracking-wide hidden sm:inline">Close</span>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 sm:left-6 z-20 p-3 sm:p-3.5 min-w-11 min-h-11 flex items-center justify-center bg-charcoal-800/60 hover:bg-charcoal-700 text-ivory-100 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <figure
            className="max-w-4xl max-h-[85vh] px-12 sm:px-16 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-sm font-sans text-ivory-200/70 leading-relaxed">
                {filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-xs font-sans text-ivory-200/55 mt-1">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </figcaption>
          </figure>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-6 z-20 p-3 sm:p-3.5 min-w-11 min-h-11 flex items-center justify-center bg-charcoal-800/60 hover:bg-charcoal-700 text-ivory-100 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
