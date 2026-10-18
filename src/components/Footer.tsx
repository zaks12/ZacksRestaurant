import { Link } from "react-router-dom";
import { Camera, Share2, AtSign, Youtube, Globe, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { restaurantConfig } from "../data/config";
import { developerConfig } from "../data/developer";

const socialIcons = {
  instagram: Camera,
  facebook: Share2,
  twitter: AtSign,
  youtube: Youtube,
  linkedin: Globe,
  globe: Globe,
};

export function Footer() {
  const { nav, contact, address, openingHours, social, wordmark, tagline } = restaurantConfig;
  const developerPhones = developerConfig.contacts.filter((c) => c.label === "Phone");
  const developerEmails = developerConfig.contacts.filter((c) => c.label === "Email");

  return (
    <footer className="bg-charcoal-950 text-ivory-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="text-3xl font-serif font-semibold text-ivory-50">
              {wordmark}
            </Link>
            <p className="mt-4 text-sm font-sans leading-relaxed text-ivory-200/60 max-w-xs">
              {tagline}
            </p>
            {social.length > 0 && (
              <div className="mt-7 flex items-center gap-3">
                {social.map((s) => {
                  const Icon = socialIcons[s.icon];
                  if (!Icon || !s.url) return null;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center border border-charcoal-700 text-ivory-200/60 hover:border-gold-500/40 hover:text-gold-400 transition-colors duration-300"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-gold-400/80 mb-6">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm font-sans text-ivory-200/60 hover:text-gold-300 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/reservations"
                  className="text-sm font-sans text-ivory-200/60 hover:text-gold-300 transition-colors duration-300"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-gold-400/80 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              {contact.phone && contact.phoneHref && (
                <li className="flex items-start gap-3">
                  <Phone size={15} className="mt-0.5 text-gold-500/70 flex-shrink-0" />
                  <a
                    href={contact.phoneHref}
                    className="text-sm font-sans text-ivory-200/60 hover:text-gold-300 transition-colors duration-300"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="flex items-start gap-3">
                  <Mail size={15} className="mt-0.5 text-gold-500/70 flex-shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-sans text-ivory-200/60 hover:text-gold-300 transition-colors duration-300"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-gold-500/70 flex-shrink-0" />
                <span className="text-sm font-sans text-ivory-200/60 leading-relaxed">
                  {address.line1}, {address.line2}<br />
                  {address.city}, {address.region}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-gold-400/80 mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-2.5">
              {openingHours.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between gap-4 text-sm font-sans">
                  <span className="text-ivory-200/55">{entry.day}</span>
                  <span className={entry.hours === "Closed" ? "text-error-500/80" : "text-ivory-200/70"}>
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Developer credit and website enquiries */}
        <div className="mt-14 pt-10 border-t border-charcoal-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Sparkles size={16} className="text-gold-400/80" />
                <p className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-gold-400/80">
                  Website by {developerConfig.name}
                </p>
              </div>
              <p className="text-sm font-sans text-ivory-200/55 leading-relaxed max-w-md">
                This restaurant website demo was designed and developed by {developerConfig.name}. Interested in a website for your business? Get in touch using the contact details below.
              </p>
            </div>

            <div className="lg:justify-self-end lg:max-w-sm w-full">
              <h4 className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-ivory-200/50 mb-4">
                Contact {developerConfig.name}
              </h4>
              <ul className="space-y-2.5">
                {developerPhones.map((c) => (
                  <li key={c.value} className="flex items-center gap-3">
                    <Phone size={14} className="text-gold-500/60 flex-shrink-0" />
                    <a
                      href={c.href}
                      className="text-sm font-sans text-ivory-200/60 hover:text-gold-300 transition-colors duration-300"
                    >
                      {c.value}
                    </a>
                  </li>
                ))}
                {developerEmails.map((c) => (
                  <li key={c.value} className="flex items-center gap-3">
                    <Mail size={14} className="text-gold-500/60 flex-shrink-0" />
                    <a
                      href={c.href}
                      className="text-sm font-sans text-ivory-200/60 hover:text-gold-300 transition-colors duration-300"
                    >
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-ivory-200/55 text-center sm:text-left">
              © {new Date().getFullYear()} {wordmark}. All rights reserved.{" "}
              <span className="text-ivory-200/45">Demonstration project — fictional brand.</span>
            </p>
            <p className="text-xs font-sans text-ivory-200/45">
              Sample data for portfolio purposes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
