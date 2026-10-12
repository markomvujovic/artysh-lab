import Image from "next/image";

/** Vidljivi deo slike u udelima (0–1) njene širine i visine — isto što i Figma "Crop". */
export type ImageCrop = { x: number; y: number; width: number; height: number };

type CroppedImageProps = {
  src: string;
  alt: string;
  crop?: ImageCrop;
  sizes: string;
  priority?: boolean;
};

/**
 * Popunjava roditelja (mora biti `relative`/`absolute` i `overflow-hidden` ili maskiran)
 * prikazujući samo `crop` deo slike. Bez `crop` ponaša se kao object-cover.
 */
export function CroppedImage({ src, alt, crop, sizes, priority }: CroppedImageProps) {
  if (!crop) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />;
  }

  const pct = (n: number) => `${n * 100}%`;
  return (
    <div
      className="absolute"
      style={{
        width: pct(1 / crop.width),
        height: pct(1 / crop.height),
        left: pct(-crop.x / crop.width),
        top: pct(-crop.y / crop.height),
      }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-fill" />
    </div>
  );
}
