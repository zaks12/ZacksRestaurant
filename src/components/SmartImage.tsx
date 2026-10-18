import { useState, type ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackClassName?: string;
  eager?: boolean;
}

export function SmartImage({ src, alt, className = "", eager = false, ...rest }: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-charcoal-100 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-charcoal-300 text-sm font-sans px-4 text-center">
          Image unavailable
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading={eager ? "eager" : "lazy"}
      {...rest}
    />
  );
}
