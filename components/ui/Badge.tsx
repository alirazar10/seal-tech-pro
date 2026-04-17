type Variant = "contained" | "outlined" | "soft" | "text";
type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "neutral";

interface BadgeProps {
  variant?: Variant;
  color?: Color;
  children: React.ReactNode;
  className?: string;
}

const variantColorStyles: Record<Variant, Record<Color, string>> = {
  contained: {
    primary: "bg-primary-900 text-white",
    secondary: "bg-secondary-600 text-white",
    accent: "bg-accent-500 text-white",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-white",
    error: "bg-error-500 text-white",
    neutral: "bg-neutral-600 text-white",
  },
  outlined: {
    primary: "border border-primary-900 text-primary-900",
    secondary: "border border-secondary-500 text-secondary-600",
    accent: "border border-accent-500 text-accent-600",
    success: "border border-success-500 text-success-700",
    warning: "border border-warning-500 text-warning-700",
    error: "border border-error-500 text-error-600",
    neutral: "border border-neutral-400 text-neutral-600",
  },
  soft: {
    primary: "bg-primary-50 text-primary-900",
    secondary: "bg-secondary-100 text-secondary-700",
    accent: "bg-accent-50 text-accent-700",
    success: "bg-success-50 text-success-700",
    warning: "bg-warning-50 text-warning-700",
    error: "bg-error-50 text-error-700",
    neutral: "bg-neutral-100 text-neutral-700",
  },
  text: {
    primary: "text-primary-900",
    secondary: "text-secondary-600",
    accent: "text-accent-600",
    success: "text-success-600",
    warning: "text-warning-600",
    error: "text-error-600",
    neutral: "text-neutral-600",
  },
};

export default function Badge({
  variant = "soft",
  color = "primary",
  children,
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold leading-none";

  const classes = [base, variantColorStyles[variant][color], className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
