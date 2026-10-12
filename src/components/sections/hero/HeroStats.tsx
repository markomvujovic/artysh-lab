import Image from "next/image";

import { stats } from "@/content/landing";

export function HeroStats({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-12 lg:gap-[120px] ${className}`}
    >
      {stats.map((stat) => (
        <li key={stat.label} className="flex items-center gap-2">
          <Image src={stat.icon} alt="" width={80} height={80} />
          <p className="flex flex-col">
            <span className="text-stat">{stat.value}</span>
            <span className="-mt-2 text-lead">{stat.label}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
