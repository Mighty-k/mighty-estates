type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-control transition-all duration-150 active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const styles =
    variant === "primary"
      ? "bg-ledger text-white hover:bg-ledger-dim shadow-soft hover:shadow-float"
      : variant === "accent"
      ? "bg-gold text-white hover:bg-gold/90 shadow-soft"
      : "bg-ledger-tint text-ledger hover:bg-ledger-tint/80 border border-ledger/10";

  return (
    <button
      className={`${base} ${sizes[size]} ${styles} ${className}`}
      {...props}
    />
  );
}