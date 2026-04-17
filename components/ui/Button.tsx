import { ReactNode } from "react";

type Variant = "contained" | "outlined" | "soft" | "text";
type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "neutral";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  color?: Color;
  size?: Size;
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}

const variantColorStyles: Record<Variant, Record<Color, string>> = {
  contained: {
    primary:
      "bg-primary-900 text-white hover:bg-primary-700 focus-visible:ring-primary-900",
    secondary:
      "bg-secondary-700 text-white hover:bg-secondary-600 focus-visible:ring-secondary-700",
    accent:
      "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500",
    success:
      "bg-success-500 text-white hover:bg-success-600 focus-visible:ring-success-500",
    warning:
      "bg-warning-500 text-white hover:bg-warning-600 focus-visible:ring-warning-500",
    error:
      "bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500",
    neutral:
      "bg-neutral-700 text-white hover:bg-neutral-600 focus-visible:ring-neutral-700",
  },
  outlined: {
    primary:
      "border-2 border-primary-900 text-primary-900 hover:bg-primary-50 focus-visible:ring-primary-900",
    secondary:
      "border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-50 focus-visible:ring-secondary-600",
    accent:
      "border-2 border-accent-500 text-accent-500 hover:bg-accent-50 focus-visible:ring-accent-500",
    success:
      "border-2 border-success-500 text-success-600 hover:bg-success-50 focus-visible:ring-success-500",
    warning:
      "border-2 border-warning-500 text-warning-600 hover:bg-warning-50 focus-visible:ring-warning-500",
    error:
      "border-2 border-error-500 text-error-600 hover:bg-error-50 focus-visible:ring-error-500",
    neutral:
      "border-2 border-neutral-500 text-neutral-600 hover:bg-neutral-100 focus-visible:ring-neutral-500",
  },
  soft: {
    primary:
      "bg-primary-50 text-primary-900 hover:bg-primary-100 focus-visible:ring-primary-900",
    secondary:
      "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus-visible:ring-secondary-500",
    accent:
      "bg-accent-50 text-accent-700 hover:bg-accent-100 focus-visible:ring-accent-500",
    success:
      "bg-success-50 text-success-700 hover:bg-success-100 focus-visible:ring-success-500",
    warning:
      "bg-warning-50 text-warning-700 hover:bg-warning-100 focus-visible:ring-warning-500",
    error:
      "bg-error-50 text-error-700 hover:bg-error-100 focus-visible:ring-error-500",
    neutral:
      "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus-visible:ring-neutral-500",
  },
  text: {
    primary:
      "text-primary-900 hover:bg-primary-50 focus-visible:ring-primary-900",
    secondary:
      "text-secondary-600 hover:bg-secondary-100 focus-visible:ring-secondary-500",
    accent:
      "text-accent-600 hover:bg-accent-50 focus-visible:ring-accent-500",
    success:
      "text-success-600 hover:bg-success-50 focus-visible:ring-success-500",
    warning:
      "text-warning-600 hover:bg-warning-50 focus-visible:ring-warning-500",
    error: "text-error-600 hover:bg-error-50 focus-visible:ring-error-500",
    neutral:
      "text-neutral-600 hover:bg-neutral-100 focus-visible:ring-neutral-500",
  },
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export default function Button({
  variant = "contained",
  color = "primary",
  size = "md",
  children,
  className = "",
  href,
  type = "button",
  disabled = false,
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold leading-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const classes = [
    base,
    variantColorStyles[variant][color],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
