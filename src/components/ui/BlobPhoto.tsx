import type { CSSProperties } from "react";

import { CroppedImage, type ImageCrop } from "@/components/ui/CroppedImage";
import { cssUrl } from "@/lib/asset";

const shapes = {
  tall: { mask: "/shapes/program-blob.svg", aspect: "348 / 463" },
  wide: { mask: "/shapes/saradnje-blob.svg", aspect: "633 / 477" },
} as const;

type BlobPhotoProps = {
  src: string;
  alt: string;
  shape: keyof typeof shapes;
  crop?: ImageCrop;
  sizes: string;
  /** Klasa boje senke iza fotografije, npr. "bg-pink" ili "bg-yellow" */
  shadow?: string;
  priority?: boolean;
  className?: string;
};

/** Fotografija isečena u organski oblik, sa pomerenom senkom u boji brenda. */
export function BlobPhoto({
  src,
  alt,
  shape,
  crop,
  sizes,
  shadow = "bg-pink",
  priority,
  className = "",
}: BlobPhotoProps) {
  const { mask, aspect } = shapes[shape];
  const maskStyle: CSSProperties = {
    maskImage: cssUrl(mask),
    maskSize: "100% 100%",
    maskRepeat: "no-repeat",
  };

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: aspect }}>
      <div aria-hidden className={`absolute inset-0 translate-x-[3.5%] translate-y-[3%] ${shadow}`} style={maskStyle} />
      <div className="absolute inset-0 overflow-hidden" style={maskStyle}>
        <CroppedImage src={src} alt={alt} crop={crop} sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}
