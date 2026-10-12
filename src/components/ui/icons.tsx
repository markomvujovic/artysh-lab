import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const STAR_PATH =
  "M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.5501 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z";

/** Red od pet zvezdica (ocena). */
export function Stars({ rating = 5, ...props }: IconProps & { rating?: number }) {
  return (
    <svg viewBox="0 0 120 24" fill="none" aria-label={`Ocena ${rating} od 5`} role="img" {...props}>
      {Array.from({ length: 5 }, (_, i) => (
        <path
          key={i}
          d={STAR_PATH}
          transform={`translate(${i * 24} 0)`}
          className={i < rating ? "fill-star" : "fill-star/30"}
        />
      ))}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden {...props}>
      <circle cx="22" cy="22" r="22" className="fill-pink" />
      <path
        d="M32.7071 22.7071C33.0976 22.3166 33.0976 21.6834 32.7071 21.2929L26.3431 14.9289C25.9526 14.5384 25.3195 14.5384 24.9289 14.9289C24.5384 15.3195 24.5384 15.9526 24.9289 16.3431L30.5858 22L24.9289 27.6569C24.5384 28.0474 24.5384 28.6805 24.9289 29.0711C25.3195 29.4616 25.9526 29.4616 26.3431 29.0711L32.7071 22.7071ZM12 22V23H32V22V21H12V22Z"
        className="fill-paper"
      />
    </svg>
  );
}

/**
 * Krug sa plusom; kada je otvoren rotira se za 45° u „x“ i popunjava roze bojom.
 */
export function FaqToggleIcon({ open, className = "" }: { open: boolean; className?: string }) {
  const motion = "duration-350 ease-smooth motion-reduce:transition-none";
  const line = `absolute rounded-full transition-colors ${motion} ${open ? "bg-paper" : "bg-pink"}`;
  return (
    <span
      aria-hidden
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full border-2 transition-[rotate,background-color,border-color] ${motion} ${
        open ? "rotate-45 border-pink bg-pink" : "border-pink/40 group-hover:border-pink"
      } ${className}`}
    >
      <span className={`h-0.5 w-5 ${line}`} />
      <span className={`h-5 w-0.5 ${line}`} />
    </span>
  );
}

const socialStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...socialStroke}>
        <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" />
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M17.64 7h.01" />
      </g>
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...socialStroke}>
        <path
          d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
        />
        <path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" />
      </g>
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...socialStroke} strokeMiterlimit={10}>
        <path d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5" />
        <path d="m11.4 9.5 2.5 1.5c.9.6.9 1.5 0 2.1l-2.5 1.5c-1 .6-1.8.1-1.8-1v-3c0-1.3.8-1.7 1.8-1.1" />
      </g>
    </svg>
  );
}
