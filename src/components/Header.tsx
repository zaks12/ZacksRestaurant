import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { restaurantConfig } from "../data/config";
import { Button } from "./Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled && !isOpen;

  const headerBg = isTransparent
    ? "bg-transparent"
    : "bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100";

  const linkColor = isTransparent
    ? "text-ivory-50/90 hover:text-gold-300"
    : "text-charcoal-600 hover:text-gold-600";

  const wordmarkColor = isTransparent
    ? "text-ivory-50"
    : "text-charcoal-900";

  return (
    <>
      {restaurantConfig.announcement.enabled && (
        <div className="bg-charcoal-950 text-ivory-200/90 text-center text-[11px] sm:text-xs py-2.5 px-4 font-sans tracking-[0.05em]">
          {restaurantConfig.announcement.text}
        </div>
      )}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${headerBg}`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className={`text-2xl lg:text-[1.75rem] font-serif font-semibold tracking-tight transition-colors duration-300 ${wordmarkColor}`}
            >
              {restaurantConfig.wordmark}
            </Link>

            <div className="hidden lg:flex items-center gap-9">
              {restaurantConfig.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[13px] font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    location.pathname === item.path
                      ? isTransparent
                        ? "text-gold-300"
                        : "text-gold-600"
                      : linkColor
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button to="/reservations" size="sm">
                Reserve a Table
              </Button>
            </div>

            <button
              className="lg:hidden p-2.5 -mr-2.5 min-w-11 min-h-11 flex items-center justify-center transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className={isTransparent ? "text-ivory-50" : "text-charcoal-900"} size={22} />
              ) : (
                <Menu className={isTransparent ? "text-ivory-50" : "text-charcoal-900"} size={22} />
              )}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="lg:hidden bg-ivory-50 border-t border-charcoal-100 animate-fade-in">
            <div className="px-4 py-6 space-y-1">
              {restaurantConfig.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-3.5 min-h-11 text-sm font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-gold-600 bg-gold-300/15"
                      : "text-charcoal-600 hover:bg-charcoal-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button to="/reservations" size="md" className="w-full">
                  Reserve a Table
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
