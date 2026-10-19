import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary" | "inverse";

export function Button({ href, children, variant = "primary", className = "", ...props }: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cx("button", `button--${variant}`, className);
  return href ? <Link href={href} className={classes}>{children}</Link> : <button className={classes} {...props}>{children}</button>;
}
