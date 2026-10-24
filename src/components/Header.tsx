
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { restaurantConfig } from "../data/config";
import { Button } from "./Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {restaurantConfig.announcement.enabled && (
        <div className="bg-charcoal-950 text-ivory-200/90 text-center text-[11px] sm:text-xs py-2.5 px-4 font-sans tracking-[0.05em]">
          {restaurantConfig.announcement.text}
        </div>
      )}

      <header className="sticky top-0 z-50 bg-ivory-50 border-b border-charcoal-100 shadow-sm">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="text-xl sm:text-2xl lg:text-[1.75rem] font-serif font-semibold tracking-tight text-charcoal-900"
            >
              {restaurantConfig.wordmark}
            </Link>

            <div className="hidden lg:flex items-center gap-9">
              {restaurantConfig.nav.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[13px] font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                      isActive
                        ? "text-gold-600"
                        : "text-charcoal-700 hover:text-gold-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Button to="/reservations" size="sm">
                Reserve a Table
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2.5 -mr-2.5 min-w-11 min-h-11 flex items-center justify-center text-charcoal-900 hover:text-gold-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden bg-ivory-50 border-t border-charcoal-100"
          >
            <div className="px-4 py-6 space-y-1">
              {restaurantConfig.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-3.5 min-h-11 text-sm font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-gold-600 bg-gold-300/15"
                      : "text-charcoal-700 hover:bg-charcoal-50 hover:text-gold-600"
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
