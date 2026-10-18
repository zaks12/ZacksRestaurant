export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "instagram" | "facebook" | "twitter" | "youtube" | "linkedin" | "globe";
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface DeveloperContact {
  label: string;
  value: string;
  href: string;
}

export interface DeveloperConfig {
  name: string;
  tagline: string;
  contacts: DeveloperContact[];
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  description: string;
  wordmark: string;
  logoText: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    whatsapp: string;
    whatsappNumber: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    region: string;
    country: string;
    mapUrl: string;
  };
  openingHours: OpeningHour[];
  social: SocialLink[];
  currency: {
    code: string;
    symbol: string;
    locale: string;
  };
  announcement: {
    enabled: boolean;
    text: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  nav: NavItem[];
  demonstrationNotice: string;
}

export type DietaryLabel = "vegetarian" | "vegan" | "spicy" | "halal" | "gluten-free" | "nut-free";

export type AvailabilityStatus = "available" | "limited" | "unavailable";

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image?: string;
  dietary: DietaryLabel[];
  availability: AvailabilityStatus;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "dishes" | "preparation" | "atmosphere" | "interior" | "grills";
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}
