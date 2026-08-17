import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost-on-dark";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide font-heading transition-all duration-300 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white border border-brand-red hover:bg-brand-bg hover:text-brand-red",
  secondary:
    "bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-white",
  "ghost-on-dark":
    "bg-transparent text-white border border-white hover:bg-brand-bg hover:text-brand-black",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
