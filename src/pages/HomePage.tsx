import { Link } from "react-router-dom";
import { ArrowRight, Calendar, UtensilsCrossed, Star, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "../components/Section";
import { Button } from "../components/Button";
import { SmartImage } from "../components/SmartImage";
import { restaurantConfig } from "../data/config";
import { menuItems, testimonials } from "../data/menu";
import { galleryImages } from "../data/menu";
import { formatPrice, buildWhatsappLink, isValidWhatsappNumber } from "../utils/format";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const galleryPreview = galleryImages.slice(0, 6);
const featuredItems = menuItems.filter((item) => item.featured).slice(0, 4);
const whatsappEnabled = isValidWhatsappNumber();

export function HomePage() {
  useDocumentMeta({
    title: restaurantConfig.seo.title,
    description: restaurantConfig.seo.description,
  });

  return (
    <>
      {/* ─────────────────────────────── Hero ─────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src="https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Nigerian jollof rice with grilled chicken skewers and roasted fish"
            className="h-full w-full object-cover"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/75 via-charcoal-950/45 to-charcoal-950/85" />
        </div>

        {/* Decorative side rules */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 h-40 w-px bg-gold-400/30" />
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 h-40 w-px bg-gold-400/30" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center py-20">
          <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.4em] text-gold-400 mb-8 animate-fade-up">
            {restaurantConfig.tagline}
          </p>
          <h1
            className="text-[2.25rem] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-serif font-semibold text-ivory-50 leading-[1.08] text-balance animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Authentic Nigerian Flavours.
            <br />
            <span className="text-gold-300">An Extraordinary Dining Experience.</span>
          </h1>
          <p
            className="mt-8 text-base sm:text-lg lg:text-xl font-sans text-ivory-200/80 max-w-xl mx-auto leading-relaxed text-pretty animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the richness of Nigerian cuisine, thoughtfully prepared and served with a contemporary touch.
          </p>
          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button to="/menu" size="lg" variant="primary">
              Explore Our Menu
            </Button>
            <Button
              to="/reservations"
              size="lg"
              variant="outline"
              className="border-ivory-200/40 text-ivory-50 hover:border-gold-400 hover:text-gold-300"
            >
              Reserve a Table
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-ivory-200/50">Scroll</span>
          <ChevronDown size={16} className="text-ivory-200/50" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory-50 to-transparent pointer-events-none" />
      </section>

      {/* ─────────────────────────── Philosophy ──────────────────────────── */}
      <Section className="bg-ivory-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <SmartImage
                src="https://images.pexels.com/photos/633627/pexels-photo-633627.jpeg?auto=compress&cs=tinysrgb&h=800&w=640"
                alt="Traditional Nigerian dish presented on a red plate with vegetable stew"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-gold-500/30 hidden sm:block" />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Where tradition meets contemporary dining"
              description="At Zacks Restaurant, we honour the soul of Nigerian cooking while presenting it with refinement and intention. Every dish celebrates familiar flavours, elevated through careful technique and an uncompromising commitment to quality."
            />
            <div className="space-y-7 mt-10">
              {[
                { icon: UtensilsCrossed, title: "Thoughtfully sourced", text: "Fresh, locally-sourced ingredients chosen with care and integrity." },
                { icon: Star, title: "Refined presentation", text: "Classic Nigerian dishes plated with a modern, editorial sensibility." },
                { icon: Calendar, title: "Unhurried dining", text: "An atmosphere designed for connection, conversation, and appreciation." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold-500/8 border border-gold-500/20 transition-colors duration-500 group-hover:bg-gold-500/15">
                    <item.icon size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal-900">{item.title}</h3>
                    <p className="text-sm font-sans text-charcoal-500 mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────────── Featured Signature Dishes ────────────────── */}
      <Section className="bg-ivory-100">
        <SectionHeading
          eyebrow="Signature Dishes"
          title="Our most-loved plates"
          description="A selection of dishes that define the Zacks Restaurant experience. Illustrative prices shown in Nigerian Naira."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              to="/menu"
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
                {/* Gradient overlay on hover for legibility */}
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
                    View Menu
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/menu" variant="outline">
            View Full Menu
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Section>

      {/* ─────────────────────── Menu Preview (dark) ─────────────────────── */}
      <Section className="bg-charcoal-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The Menu"
              title="A curated journey through Nigerian cuisine"
              description="From smoky jollof to perfectly grilled suya, our menu brings together beloved classics and contemporary interpretations — all made with purpose."
              light
            />
            <div className="space-y-0">
              {menuItems.slice(0, 5).map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-baseline justify-between gap-4 py-4 ${
                    idx !== 4 ? "border-b border-charcoal-700/60" : ""
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-base font-serif font-medium text-ivory-50">{item.name}</h3>
                    <p className="text-xs font-sans text-ivory-200/60 mt-0.5 uppercase tracking-wide">{item.category}</p>
                  </div>
                  <span className="text-sm font-sans font-semibold text-gold-400 flex-shrink-0">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button to="/menu" variant="primary">
                Explore Full Menu
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <SmartImage
                src="https://images.pexels.com/photos/37648018/pexels-photo-37648018.jpeg?auto=compress&cs=tinysrgb&h=600&w=450"
                alt="Traditional African soup with meat and vegetables"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <SmartImage
                src="https://images.pexels.com/photos/5840330/pexels-photo-5840330.jpeg?auto=compress&cs=tinysrgb&h=600&w=450"
                alt="Chicken skewers grilling over hot charcoal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────────── Gallery Preview ─────────────────────────── */}
      <Section className="bg-ivory-50">
        <SectionHeading
          eyebrow="Gallery"
          title="A feast for the eyes"
          description="Dishes, atmosphere, and the craft behind every plate. Stock photography for demonstration purposes."
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryPreview.map((img) => (
            <Link
              key={img.id}
              to="/gallery"
              className="aspect-square overflow-hidden group relative"
            >
              <SmartImage
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.12]"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-500" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/gallery" variant="outline">
            View Full Gallery
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Section>

      {/* ─────────────────────── Story / About Preview ───────────────────── */}
      <Section className="bg-ivory-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionHeading
              eyebrow="Our Story"
              title="Born from a love of Nigerian flavour"
              description="Zacks Restaurant was created to show that Nigerian cuisine deserves a place at the finest tables. We celebrate the depth, warmth, and generosity of our culinary heritage — reimagined for the discerning diner."
            />
            <p className="text-base font-sans text-charcoal-500 leading-relaxed mb-8">
              Our kitchen draws inspiration from every corner of Nigeria, from the pepper soups of the South-South to the suya of the North. We believe great food is both comfort and craft.
            </p>
            <Button to="/about" variant="outline">
              Read Our Story
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <SmartImage
                src="https://images.pexels.com/photos/17318176/pexels-photo-17318176.jpeg?auto=compress&cs=tinysrgb&h=600&w=450"
                alt="Two chefs working in a professional kitchen"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <SmartImage
                src="https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=600&w=450"
                alt="Elegant restaurant interior with wooden furniture and warm lighting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────────── Reservation Steps ───────────────────────── */}
      <Section className="bg-ivory-50">
        <SectionHeading
          eyebrow="Reservations"
          title="Reserving your table is simple"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            { step: "01", title: "Choose your date", text: "Select a date and time that suits your plans." },
            { step: "02", title: "Tell us your party size", text: "Let us know how many guests will be joining." },
            { step: "03", title: "We'll confirm your inquiry", text: "Our team will reach out to finalise your reservation." },
          ].map((item) => (
            <div key={item.step} className="text-center relative">
              <div className="text-5xl font-serif font-semibold text-gold-500/30 mb-5">{item.step}</div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{item.title}</h3>
              <p className="text-sm font-sans text-charcoal-500 leading-relaxed max-w-xs mx-auto">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Button to="/reservations" size="lg">
            Reserve a Table
          </Button>
        </div>
      </Section>

      {/* ─────────────────────── Testimonials ────────────────────────────── */}
      <Section className="bg-charcoal-900">
        <SectionHeading
          eyebrow="Guest Voices"
          title="What our guests say"
          description="The following testimonials are fictional demonstration content and do not represent real reviews."
          center
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="border border-charcoal-700/60 p-8 lg:p-10 flex flex-col transition-colors duration-500 hover:border-gold-500/30">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg font-serif italic text-ivory-100 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-charcoal-700/60">
                <p className="text-sm font-sans font-medium text-ivory-50">{t.name}</p>
                <p className="text-xs font-sans text-ivory-200/40 mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── Hours & Location ────────────────────────── */}
      <Section className="bg-ivory-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Visit Us"
              title="Find your way to Zacks Restaurant"
            />
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">Address</h3>
                  <p className="text-sm font-sans text-charcoal-500 mt-1">
                    {restaurantConfig.address.line1}, {restaurantConfig.address.line2}<br />
                    {restaurantConfig.address.city}, {restaurantConfig.address.region}
                  </p>
                  <a
                    href={restaurantConfig.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-gold-600 hover:text-gold-700 mt-2 inline-block"
                  >
                    View on map →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">Opening Hours</h3>
                  <ul className="mt-2 space-y-1.5 max-w-xs">
                    {restaurantConfig.openingHours.map((entry) => (
                      <li key={entry.day} className="flex justify-between text-sm font-sans">
                        <span className="text-charcoal-500">{entry.day}</span>
                        <span className={entry.hours === "Closed" ? "text-error-500" : "text-charcoal-700"}>
                          {entry.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto overflow-hidden min-h-[320px]">
            <SmartImage
              src="https://images.pexels.com/photos/35833817/pexels-photo-35833817.jpeg?auto=compress&cs=tinysrgb&h=600&w=800"
              alt="Warm restaurant interior with wooden tables and soft lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ─────────────────────── Final CTA ───────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src="https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&h=600&w=1920"
            alt="Elegant dining table setup"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-950/82" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center py-24 lg:py-32">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[0.4em] text-gold-400 mb-6">
            {restaurantConfig.tagline}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-ivory-50 text-balance leading-[1.1]">
            Reserve your table at Zacks Restaurant
          </h2>
          <p className="mt-6 text-base sm:text-lg font-sans text-ivory-200/70 max-w-xl mx-auto leading-relaxed">
            Join us for an unforgettable Nigerian dining experience in the heart of Abuja.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/reservations" size="lg" variant="primary">
              Reserve a Table
            </Button>
            {whatsappEnabled && (
              <a
                href={buildWhatsappLink("Hello, I'd like to inquire about dining at Zacks Restaurant.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-sans font-medium uppercase tracking-wide text-ivory-50 border border-ivory-200/25 hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
              >
                <MessageCircle size={18} />
                Open WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
