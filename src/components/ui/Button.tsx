import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-[0.7rem] uppercase tracking-[0.3em] transition-colors";

  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90"
      : "border border-text text-text hover:bg-text hover:text-white";

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

