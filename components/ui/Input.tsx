import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  error,
  helperText,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-secondary-700"
        >
          {label}
          {props.required && <span className="text-error-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={[
          "w-full rounded-lg border px-4 py-2.5 text-secondary-900 placeholder:text-secondary-400",
          "bg-white transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-offset-1",
          error
            ? "border-error-400 focus:ring-error-300"
            : "border-secondary-200 focus:border-primary-400 focus:ring-primary-200",
          "disabled:bg-neutral-100 disabled:text-secondary-400 disabled:cursor-not-allowed",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && <p className="text-xs text-error-600">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-secondary-400">{helperText}</p>
      )}
    </div>
  );
}
