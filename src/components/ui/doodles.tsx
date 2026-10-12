import type { SVGProps } from "react";

/* Dekorativni muzički elementi (uvek aria-hidden). Boja se zadaje klasom `text-*`. */

type DoodleProps = SVGProps<SVGSVGElement>;

export function NoteDoodle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 32 40" fill="none" aria-hidden {...props}>
      <path d="M22 4v22.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 4c3 2.5 6 3.5 8 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="15" cy="28" rx="7.5" ry="6" transform="rotate(-20 15 28)" fill="currentColor" />
    </svg>
  );
}

export function DoubleNoteDoodle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 44 40" fill="none" aria-hidden {...props}>
      <path d="M14 8v21M36 4v21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 8 36 4v7L14 15z" fill="currentColor" />
      <ellipse cx="8.5" cy="30" rx="6.5" ry="5.2" transform="rotate(-20 8.5 30)" fill="currentColor" />
      <ellipse cx="30.5" cy="26" rx="6.5" ry="5.2" transform="rotate(-20 30.5 26)" fill="currentColor" />
    </svg>
  );
}

export function SparkleDoodle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 1.5c.6 5.2 2.3 7.6 9.5 10.5-7.2 2.9-8.9 5.3-9.5 10.5-.6-5.2-2.3-7.6-9.5-10.5C9.7 9.1 11.4 6.7 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveDoodle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 80 16" fill="none" aria-hidden {...props}>
      <path
        d="M2 8c6-8 12-8 18 0s12 8 18 0 12-8 18 0 12 8 18 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
