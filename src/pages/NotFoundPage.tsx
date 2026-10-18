import { Button } from "../components/Button";
import { restaurantConfig } from "../data/config";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function NotFoundPage() {
  useDocumentMeta({
    title: `Page Not Found — ${restaurantConfig.name}`,
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-ivory-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl sm:text-8xl font-serif font-semibold text-gold-500/40 mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-base font-sans text-charcoal-500 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has moved. Let us guide you back.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary">
            Return Home
          </Button>
          <Button to="/menu" variant="outline">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
