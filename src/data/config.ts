import type { RestaurantConfig } from "../types";

// ─────────────────────────────────────────────────────────────────────────
// BRAND CONFIGURATION — Replace all values below with your client's real info.
// This is demo data for a fictional restaurant called Zacks Restaurant.
// ─────────────────────────────────────────────────────────────────────────
export const restaurantConfig: RestaurantConfig = {
  name: "Zacks Restaurant",
  tagline: "Bold flavours. Exceptional experiences.",
  description:
    "Contemporary Nigerian dining that celebrates familiar flavours with a sophisticated presentation.",
  wordmark: "Zacks",
  logoText: "Zacks Restaurant",
  brandColors: {
    primary: "#1f1c18",
    secondary: "#f9f6ef",
    accent: "#bf9d5f",
  },
  contact: {
    phone: "+234 801 234 5678",
    phoneHref: "tel:+2348012345678",
    email: "hello@zacksrestaurant.ng",
    whatsapp: "2348012345678",
    whatsappNumber: "+234 801 234 5678",
  },
  address: {
    // Illustrative demo location — replace with the actual restaurant address before launch.
    line1: "Wuse 2",
    line2: "Abuja",
    city: "Abuja",
    region: "FCT",
    country: "Nigeria",
    mapUrl: "https://maps.google.com/?q=Wuse+2+Abuja+FCT+Nigeria",
  },
  openingHours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "12:00 — 22:00" },
    { day: "Wednesday", hours: "12:00 — 22:00" },
    { day: "Thursday", hours: "12:00 — 22:00" },
    { day: "Friday", hours: "12:00 — 23:00" },
    { day: "Saturday", hours: "11:00 — 23:00" },
    { day: "Sunday", hours: "11:00 — 21:00" },
  ],
  // Demo social links — replace with the client's actual profile URLs.
  // Leave the array empty [] to hide the social section entirely.
  social: [
    { label: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { label: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
  currency: {
    code: "NGN",
    symbol: "₦",
    locale: "en-NG",
  },
  announcement: {
    enabled: true,
    text: "Now accepting reservations for weekend dining — reserve your table today",
  },
  seo: {
    title: "Zacks Restaurant — Contemporary Nigerian Dining in Abuja",
    description:
      "Discover the richness of Nigerian cuisine at Zacks Restaurant. Bold flavours, thoughtfully prepared and served with a contemporary touch. Reserve your table in Wuse 2, Abuja.",
    ogImage: "",
  },
  nav: [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ],
  demonstrationNotice:
    "Zacks Restaurant is a fictional demonstration brand. All menu items, prices, contact details, and business information are sample data for portfolio purposes.",
};
