type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "accent"; size?: "sm" | "md" | "lg"; };
export default function Button({ variant = "primary", size = "md", className = "", ...props }: Props) {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-5 py-2.5 text-sm", lg: "px-8 py-4 text-base" };
  const styles = variant === "primary" ? "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-arch-soft hover:shadow-arch-medium" : variant === "accent" ? "bg-accent text-white hover:bg-accent-dark" : "bg-transparent border-2 border-charcoal-200 text-charcoal-700 hover:border-charcoal-300 hover:bg-charcoal-50";
  return <button className={base + " " + sizes[size] + " " + styles + " " + className} {...props} />;
}