import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div"> & {
  size?: "content" | "narrow";
};

const sizes = {
  content: "max-w-content",
  narrow: "max-w-narrow",
};

/** Centrirana kolona sadržaja (1128px, ili 936px za uske liste) sa bočnim razmakom na manjim ekranima. */
export function Container({
  size = "content",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div className="px-4 sm:px-6">
      <div className={`mx-auto w-full ${sizes[size]} ${className}`} {...props} />
    </div>
  );
}
