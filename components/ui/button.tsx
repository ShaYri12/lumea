import { cn } from "@/lib/utils";
import { type BaseComponentProps } from "@/types";

interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-light tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950",
    secondary:
      "border border-neutral-900 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100",
    ghost: "text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
}
