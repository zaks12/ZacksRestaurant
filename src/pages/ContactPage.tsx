import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, Camera, Share2, AtSign, Youtube, Globe } from "lucide-react";
import { Section, SectionHeading } from "../components/Section";
import { restaurantConfig } from "../data/config";
import { buildWhatsappLink, isValidWhatsappNumber } from "../utils/format";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const socialIcons = {
  instagram: Camera,
  facebook: Share2,
  twitter: AtSign,
  youtube: Youtube,
  linkedin: Globe,
  globe: Globe,
};

export function ContactPage() {
  useDocumentMeta({
    title: `Contact — ${restaurantConfig.name}`,
    description: "Get in touch with Zacks Restaurant. Find our address, phone, email, opening hours, and send us a message.",
  });

  const [data, setData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappEnabled = isValidWhatsappNumber();

  const updateField = (field: keyof ContactFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): ContactFormErrors => {
    const e: ContactFormErrors = {};
    if (!data.name.trim()) e.name = "Please enter your name";
    else if (data.name.trim().length < 2) e.name = "Name must be at least 2 characters";

    if (!data.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email address";

    if (!data.message.trim()) e.message = "Please enter a message";
    else if (data.message.trim().length < 10) e.message = "Message must be at least 10 characters";

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
    }, 1000);
  };

  const whatsappMessage = `Hello ${restaurantConfig.name}, I have a question. My name is ${data.name}.`;

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal-900 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold-400 mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-ivory-50 text-balance">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg font-sans text-ivory-200/70 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out with questions, feedback, or special requests.
          </p>
        </div>
      </section>

      <Section className="bg-ivory-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact details */}
          <div>
            <SectionHeading
              eyebrow="Details"
              title="Visit or reach us"
            />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-gold-500/10 border border-gold-500/20">
                  <Phone size={18} className="text-gold-600" />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">Phone</h3>
                  <a href={restaurantConfig.contact.phoneHref} className="text-sm font-sans text-charcoal-500 hover:text-gold-600 transition-colors mt-1 block">
                    {restaurantConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-gold-500/10 border border-gold-500/20">
                  <Mail size={18} className="text-gold-600" />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">Email</h3>
                  <a href={`mailto:${restaurantConfig.contact.email}`} className="text-sm font-sans text-charcoal-500 hover:text-gold-600 transition-colors mt-1 block">
                    {restaurantConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-gold-500/10 border border-gold-500/20">
                  <MapPin size={18} className="text-gold-600" />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">Address</h3>
                  <p className="text-sm font-sans text-charcoal-500 mt-1">
                    {restaurantConfig.address.line1}, {restaurantConfig.address.line2}<br />
                    {restaurantConfig.address.city}, {restaurantConfig.address.region}, {restaurantConfig.address.country}
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
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-gold-500/10 border border-gold-500/20">
                  <Clock size={18} className="text-gold-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">Opening Hours</h3>
                  <ul className="mt-2 space-y-1.5">
                    {restaurantConfig.openingHours.map((entry) => (
                      <li key={entry.day} className="flex justify-between text-sm font-sans max-w-xs">
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

            {/* WhatsApp */}
            <div className="mt-8 p-5 bg-olive-500/5 border border-olive-500/20">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle size={20} className="text-olive-600" />
                <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900">WhatsApp</h3>
              </div>
              <p className="text-sm font-sans text-charcoal-500 mb-4">
                {whatsappEnabled
                  ? "Prefer to chat? Open WhatsApp to send us a message — this opens the WhatsApp app, it does not send a message automatically."
                  : "WhatsApp is not configured for this demonstration. Please reach us by phone or email instead."}
              </p>
              {whatsappEnabled && (
                <a
                  href={buildWhatsappLink(`Hello ${restaurantConfig.name}, I have a question.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium uppercase tracking-[0.12em] bg-olive-600 text-ivory-50 hover:bg-olive-700 transition-colors"
                >
                  <MessageCircle size={16} />
                  Open WhatsApp
                </a>
              )}
            </div>

            {/* Social */}
            <div className="mt-8">
              <h3 className="text-sm font-sans font-medium uppercase tracking-wider text-charcoal-900 mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                {restaurantConfig.social.map((s) => {
                  const Icon = socialIcons[s.icon];
                  if (!Icon || !s.url) return null;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center border border-charcoal-200 text-charcoal-600 hover:border-gold-500 hover:text-gold-600 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading
              eyebrow="Message"
              title="Send us a note"
            />

            {submitted ? (
              <div className="bg-ivory-100 border border-charcoal-200 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success-500/10 border border-success-500/20 mb-4">
                  <CheckCircle size={32} className="text-success-500" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">Message Captured</h3>
                <p className="text-sm font-sans text-charcoal-500 leading-relaxed mb-6">
                  Thank you, {data.name.split(" ")[0]}. This is a demonstration form — your message has not been delivered to the restaurant. No email has been sent.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={buildWhatsappLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium uppercase tracking-wide bg-olive-600 text-ivory-50 hover:bg-olive-700 transition-colors"
                  >
                    <MessageCircle size={16} />
                    Send via WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setData({ name: "", email: "", message: "" });
                    }}
                    className="inline-flex items-center px-5 py-2.5 text-sm font-sans font-medium uppercase tracking-wide text-charcoal-700 border border-charcoal-200 hover:border-charcoal-400 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-ivory-100 border border-charcoal-200 p-4 mb-6 flex items-start gap-3">
                  <AlertCircle size={18} className="text-warning-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-sans text-charcoal-600 leading-relaxed">
                    This is a demonstration form. Submissions are not sent to any server and no message is actually delivered.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                      Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={data.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                        errors.name
                          ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                          : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs font-sans text-error-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                      Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={data.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                          : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-xs font-sans text-error-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-sans font-medium text-charcoal-800 mb-2">
                      Message <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={data.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="How can we help you?"
                      className={`w-full px-4 py-3.5 min-h-11 font-sans text-sm text-charcoal-800 bg-ivory-50 border transition-colors focus:outline-none focus:ring-1 ${
                        errors.message
                          ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                          : "border-charcoal-200 focus:border-gold-500 focus:ring-gold-500"
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs font-sans text-error-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-sans font-medium uppercase tracking-[0.12em] bg-charcoal-800 text-ivory-50 hover:bg-charcoal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-ivory-200/30 border-t-ivory-50 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
