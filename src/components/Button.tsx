import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: undefined;
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string;
  href?: undefined;
  onClick?: undefined;
  type?: undefined;
  disabled?: undefined;
  ariaLabel?: string;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  to?: undefined;
  onClick?: undefined;
  type?: undefined;
  disabled?: undefined;
  ariaLabel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-charcoal-900 hover:bg-gold-400 focus-visible:ring-gold-400 shadow-sm",
  secondary:
    "bg-charcoal-800 text-ivory-50 hover:bg-charcoal-700 focus-visible:ring-charcoal-400",
  outline:
    "border border-charcoal-300 text-charcoal-800 hover:border-charcoal-800 hover:text-charcoal-900 focus-visible:ring-charcoal-400",
  ghost:
    "text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 focus-visible:ring-charcoal-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3 text-xs",
  lg: "px-9 py-4 text-sm",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className = "" } = props;
  const classes = `inline-flex items-center justify-center font-medium tracking-[0.12em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes} aria-label={props.ariaLabel}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
      aria-label={props.ariaLabel}
    >
      {children}
    </button>
  );
}
