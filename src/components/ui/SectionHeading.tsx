import type { ComponentProps } from "react";

type SectionHeadingProps = ComponentProps<"h2"> & {
  align?: "center" | "left";
};

export function SectionHeading({
  align = "center",
  className = "",
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-h2 font-medium ${align === "center" ? "text-center" : ""} ${className}`}
      {...props}
    />
  );
}
