import { ArrowRight, MapPin } from "lucide-react";
import { Section, SectionHeading } from "../components/Section";
import { Button } from "../components/Button";
import { SmartImage } from "../components/SmartImage";
import { restaurantConfig } from "../data/config";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function AboutPage() {
  useDocumentMeta({
    title: `About — ${restaurantConfig.name}`,
    description: "Learn about Zacks Restaurant's philosophy of contemporary Nigerian dining — celebrating familiar flavours with sophisticated presentation.",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <SmartImage
          src="https://images.pexels.com/photos/17952748/pexels-photo-17952748.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1600"
          alt="Close-up of West African jollof rice with fried plantains on a plate"
          className="h-full w-full object-cover"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-charcoal-950/30" />
        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-400/50" />
                <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-gold-400">
                  About Us
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-ivory-50 text-balance leading-[1.08]">
                The Zacks Story
              </h1>
              <p className="mt-5 text-base sm:text-lg font-sans text-ivory-200/80 leading-relaxed max-w-xl">
                A contemporary Nigerian restaurant in {restaurantConfig.address.city} — where bold flavours meet refined presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand introduction */}
      <Section className="bg-ivory-50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Welcome"
            title="A celebration of Nigerian cuisine"
            center
          />
          <p className="text-lg font-sans text-charcoal-500 leading-relaxed text-pretty">
            {restaurantConfig.name} is a contemporary Nigerian restaurant in {restaurantConfig.address.city}, created to celebrate the depth and richness of Nigerian cooking. We believe that the flavours of our heritage — the smoky jollof, the fiery suya, the comforting egusi — deserve to be presented with the same care and sophistication as any world cuisine.
          </p>
          <p className="mt-4 text-lg font-sans text-charcoal-500 leading-relaxed text-pretty">
            {restaurantConfig.tagline}
          </p>
        </div>
      </Section>

      {/* Philosophy — split editorial with image */}
      <Section className="bg-charcoal-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <SmartImage
              src="https://images.pexels.com/photos/36430088/pexels-photo-36430088.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
              alt="Chef garnishing a gourmet dish with precision in a professional kitchen"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-950/70 to-transparent p-6">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-400/80">
                The Kitchen
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="Tradition, refined"
              light
            />
            <p className="text-base font-sans text-ivory-200/70 leading-relaxed mb-6">
              We approach Nigerian food with reverence. Every recipe has a story — a family kitchen, a street corner, a celebration. Our role is to carry those stories forward with respect, presenting them in a way that feels both familiar and fresh.
            </p>
            <p className="text-base font-sans text-ivory-200/70 leading-relaxed mb-8">
              We source locally where we can, cook with intention, and plate with care. The result is food that is unmistakably Nigerian, yet undeniably refined.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                { title: "Locally sourced", text: "Fresh ingredients from Nigerian producers" },
                { title: "Made to order", text: "Every dish prepared fresh, never rushed" },
                { title: "Refined plating", text: "Modern presentation, traditional soul" },
                { title: "Warm hospitality", text: "Service that feels like home" },
              ].map((item) => (
                <div key={item.title} className="border-t border-ivory-200/15 pt-4">
                  <h3 className="text-base font-serif font-semibold text-ivory-50">{item.title}</h3>
                  <p className="text-sm font-sans text-ivory-200/60 mt-1 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Culinary inspiration — full-width image break */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <SmartImage
          src="https://images.pexels.com/photos/33624063/pexels-photo-33624063.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
          alt="Colorful variety of spices and herbs at a Nigerian market"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-ivory-50 text-balance max-w-3xl leading-[1.2]">
            "The flavours of our heritage deserve the same care and sophistication as any world cuisine."
          </p>
        </div>
      </section>

      {/* Regional inspiration */}
      <Section className="bg-ivory-50">
        <SectionHeading
          eyebrow="Inspiration"
          title="From every corner of Nigeria"
          description="Our menu draws from the culinary traditions that span Nigeria's diverse regions — each with its own flavours, techniques, and stories."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { title: "The South", text: "Rich soups and stews — egusi, banga, and okra — built on palm oil, peppers, and smoked fish." },
            { title: "The North", text: "The bold, dry-heat spice of suya and grilled meats, seasoned with yaji and cooked over open flame." },
            { title: "The West", text: "The celebratory rice dishes — jollof, fried rice, ofada — that anchor every Nigerian gathering." },
          ].map((item) => (
            <div key={item.title} className="border-t-2 border-gold-500/30 pt-6">
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{item.title}</h3>
              <p className="text-sm font-sans text-charcoal-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Service principles — reversed split */}
      <Section className="bg-ivory-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="The Experience"
              title="How we serve"
            />
            <div className="space-y-6">
              {[
                { title: "Attentive, not intrusive", text: "Our team reads the room — present when you need us, invisible when you don't." },
                { title: "Knowledge that guides", text: "We help you navigate the menu, from spice levels to pairing suggestions." },
                { title: "An unhurried pace", text: "Dining at Zacks Restaurant is meant to be savoured. We never rush a table." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-gold-500 pl-5">
                  <h3 className="text-lg font-serif font-semibold text-charcoal-900">{item.title}</h3>
                  <p className="text-sm font-sans text-charcoal-500 mt-1 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-sans text-charcoal-500">
              <MapPin size={16} className="text-gold-600" />
              <span>{restaurantConfig.address.line1}, {restaurantConfig.address.city}</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <SmartImage
              src="https://images.pexels.com/photos/10135116/pexels-photo-10135116.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
              alt="Cozy restaurant interior with elegant decor and warm lighting"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-950/60 to-transparent p-6">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-400/80">
                The Dining Room
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-charcoal-950 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-400/40" />
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-gold-400">
              Join Us
            </p>
            <span className="h-px w-8 bg-gold-400/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-ivory-50 text-balance leading-[1.12]">
            Experience Zacks Restaurant for yourself
          </h2>
          <p className="mt-5 text-base sm:text-lg font-sans text-ivory-200/70 max-w-xl mx-auto leading-relaxed">
            We'd be honoured to host you at our table. Reserve your spot and let us take care of the rest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/reservations" size="lg" variant="primary">
              Reserve a Table
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button to="/menu" size="lg" variant="ghost" className="text-ivory-200 hover:text-gold-300 hover:bg-ivory-200/5">
              Explore the Menu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
