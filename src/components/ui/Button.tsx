import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-[18px] font-bold text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink";

const variants: Record<Variant, string> = {
  primary: "bg-yellow px-[54px] py-[18px] hover:bg-yellow-light",
  outline: "border-2 border-pink px-[52px] py-4 hover:bg-pink hover:text-paper",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({
  variant,
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({
  variant,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, className)}
      {...props}
    />
  );
}
