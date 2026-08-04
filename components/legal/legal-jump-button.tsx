"use client";

import type { MouseEvent } from "react";
import { ArrowDown } from "lucide-react";

type LegalJumpButtonProps = {
  targetId: string;
  label: string;
};

export default function LegalJumpButton({
  targetId,
  label,
}: LegalJumpButtonProps) {
  const handleJump = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const header = document.querySelector<HTMLElement>("header");
    const headerHeight = header?.offsetHeight ?? 0;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

    window.history.replaceState(null, "", `#${targetId}`);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleJump}
      className="group relative z-10 flex min-h-11 touch-manipulation select-none items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
    >
      {label}
      <ArrowDown
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
      />
    </a>
  );
}
