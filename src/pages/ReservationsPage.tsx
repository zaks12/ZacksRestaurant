import { useState, type FormEvent } from "react";
import { CheckCircle, MessageCircle, Calendar, Clock, Users, AlertCircle, RotateCcw } from "lucide-react";
import { Section } from "../components/Section";
import { restaurantConfig } from "../data/config";
import { buildWhatsappLink, isValidWhatsappNumber, formatDateDisplay } from "../utils/format";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
  consent?: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
  consent: false,
};

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
];

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

export function ReservationsPage() {
  useDocumentMeta({
    title: `Reservations — ${restaurantConfig.name}`,
    description: "Reserve a table at Zacks Restaurant. Submit a reservation inquiry and our team will confirm your booking.",
  });

  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const todayStr = getTodayStr();
  const whatsappEnabled = isValidWhatsappNumber();

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (field in errors && errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};

    if (!data.name.trim()) e.name = "Please enter your name";
    else if (data.name.trim().length < 2) e.name = "Name must be at least 2 characters";

    if (!data.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email address";

    if (!data.phone.trim()) e.phone = "Please enter your phone number";
    else if (data.phone.trim().length < 7) e.phone = "Please enter a valid phone number";

    if (!data.date) e.date = "Please select a date";
    else if (data.date < todayStr) e.date = "Date cannot be in the past";

    if (!data.time) e.time = "Please select a preferred time";

    const guestNum = parseInt(data.guests, 10);
    if (!data.guests) e.guests = "Please enter the number of guests";
    else if (isNaN(guestNum) || guestNum < 1) e.guests = "At least 1 guest is required";
    else if (guestNum > 20) e.guests = "For parties larger than 20, please call us directly";

    if (!data.consent) e.consent = "Please consent to be contacted about your inquiry";

    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const whatsappMessage = `Hello, I'd like to follow up on a reservation inquiry at ${restaurantConfig.name}.
Name: ${data.name}
Date: ${formatDateDisplay(data.date)}
Time: ${data.time}
Guests: ${data.guests}${data.requests ? `\nNote: ${data.requests}` : ""}`;

  if (submitted) {
    return (
      <Section className="bg-ivory-50 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center w-full">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success-500/10 border border-success-500/20 mb-6">
            <CheckCircle size={40} className="text-success-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-charcoal-900 mb-4 text-balance">
            Inquiry Received
          </h1>
          <p className="text-base font-sans text-charcoal-500 leading-relaxed max-w-lg mx-auto">
            Thank you, {data.name.split(" ")[0]}. Your reservation inquiry has been captured as a demonstration. This submission has <strong>not</strong> been delivered to the restaurant, and no table has been reserved.
          </p>

          <div className="mt-8 bg-ivory-100 border border-charcoal-200 p-6 text-left max-w-md mx-auto">
            <h2 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-600 mb-4">
              Your Reservation Details
            </h2>
            <dl className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-charcoal-400 flex-shrink-0" />
                <dt className="text-sm font-sans text-charcoal-500">Date:</dt>
                <dd className="text-sm font-sans font-medium text-charcoal-800">{formatDateDisplay(data.date)}</dd>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-charcoal-400 flex-shrink-0" />
                <dt className="text-sm font-sans text-charcoal-500">Time:</dt>
                <dd className="text-sm font-sans font-medium text-charcoal-800">{data.time}</dd>
              </div>
              <div className="flex items-center gap-3">
                <Users size={18} className="text-charcoal-400 flex-shrink-0" />
                <dt className="text-sm font-sans text-charcoal-500">Guests:</dt>
                <dd className="text-sm font-sans font-medium text-charcoal-800">{data.guests}</dd>
              </div>
            </dl>
          </div>

          <p className="mt-6 text-sm font-sans text-charcoal-500 leading-relaxed max-w-md mx-auto">
            To confirm your reservation, please contact the restaurant directly{whatsappEnabled ? " via WhatsApp or phone" : " by phone"}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {whatsappEnabled && (
              <a
                href={buildWhatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-sans font-medium uppercase tracking-[0.12em] bg-olive-600 text-ivory-50 hover:bg-olive-700 transition-colors"
              >
                <MessageCircle size={18} />
                Open WhatsApp to Follow Up
              </a>
            )}
            <a
              href={restaurantConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-sans font-medium uppercase tracking-[0.12em] border border-charcoal-300 text-charcoal-800 hover:border-charcoal-800 hover:text-charcoal-900 transition-colors"
            >
              Call {restaurantConfig.contact.phone}
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setData(initialData);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-medium uppercase tracking-[0.12em] text-charcoal-500 hover:text-charcoal-800 transition-colors"
            >
              <RotateCcw size={16} />
              Make Another Inquiry
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal-950 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-400/40" />
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-gold-400">
              Reservations
            </p>
            <span className="h-px w-8 bg-gold-400/40" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-ivory-50 text-balance leading-[1.1]">
            Reserve a Table
          </h1>
          <p className="mt-6 text-base sm:text-lg font-sans text-ivory-200/70 max-w-xl mx-auto leading-relaxed">
            Tell us when you'd like to join us. Submit the form below and our team will confirm your reservation.
          </p>
        </div>
      </section>

      <Section className="bg-ivory-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-ivory-100 border border-charcoal-200 p-4 mb-8 flex items-start gap-3">
            <AlertCircle size={18} className="text-warning-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-sans text-charcoal-600 leading-relaxed">
              This is a demonstration form. Submissions are not delivered to the restaurant and no table is actually reserved. This is for portfolio purposes only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                Full Name <span className="text-error-500" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                  errors.name
                    ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                    : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                  Email Address <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                    errors.email
                      ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                      : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                  Phone Number <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                    errors.phone
                      ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                      : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  required
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                  Date <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  min={todayStr}
                  value={data.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                    errors.date
                      ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                      : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                  }`}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  required
                />
                {errors.date && (
                  <p id="date-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                  Preferred Time <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <select
                  id="time"
                  value={data.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                    errors.time
                      ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                      : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                  }`}
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? "time-error" : undefined}
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {errors.time && (
                  <p id="time-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                    {errors.time}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                  Guests <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="guests"
                  type="number"
                  min={1}
                  max={20}
                  value={data.guests}
                  onChange={(e) => updateField("guests", e.target.value)}
                  className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                    errors.guests
                      ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                      : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                  }`}
                  aria-invalid={!!errors.guests}
                  aria-describedby={errors.guests ? "guests-error" : undefined}
                  required
                />
                {errors.guests && (
                  <p id="guests-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                    {errors.guests}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="requests" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                Special Requests <span className="text-charcoal-400 text-xs">(optional)</span>
              </label>
              <textarea
                id="requests"
                rows={4}
                value={data.requests}
                onChange={(e) => updateField("requests", e.target.value)}
                placeholder="Dietary needs, seating preferences, celebrations..."
                className="w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border border-charcoal-200 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
              />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => updateField("consent", e.target.checked)}
                  className="mt-1 w-5 h-5 accent-gold-500 flex-shrink-0"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <span className="text-sm font-sans text-charcoal-600 leading-relaxed">
                  I consent to be contacted about this reservation inquiry. <span className="text-error-500" aria-hidden="true">*</span>
                </span>
              </label>
              {errors.consent && (
                <p id="consent-error" className="mt-1.5 text-xs font-sans text-error-500" role="alert">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-sans font-medium uppercase tracking-[0.12em] bg-charcoal-800 text-ivory-50 hover:bg-charcoal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-ivory-200/30 border-t-ivory-50 rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
