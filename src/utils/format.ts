import { restaurantConfig } from "../data/config";

export function formatPrice(amount: number): string {
  const { symbol, locale } = restaurantConfig.currency;
  return `${symbol}${amount.toLocaleString(locale)}`;
}

const DIGITS_ONLY = /^\d{6,15}$/;

export function isValidWhatsappNumber(): boolean {
  const num = restaurantConfig.contact.whatsapp;
  return DIGITS_ONLY.test(num);
}

export function buildWhatsappLink(message: string): string {
  const number = restaurantConfig.contact.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatDateDisplay(isoDate: string): string {
  const date = new Date(isoDate + "T00:00:00");
  if (isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
