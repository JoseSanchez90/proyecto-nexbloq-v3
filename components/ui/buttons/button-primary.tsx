"use client";

import { ChevronRight } from "lucide-react";

interface ButtonPrimaryProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  font?: "medium" | "semibold" | "bold" | "extrabold" | "black";
}

interface SizeConfig {
  textSize: string;
  btnPadding: string;
  circleSize: string;
  arrowSize: string;
  gap: string;
}

const configMap: Record<NonNullable<ButtonPrimaryProps["size"]>, SizeConfig> = {
  xs: {
    textSize: "text-xs",
    btnPadding: "py-2 pl-4 pr-3",
    circleSize: "h-8 w-8",
    arrowSize: "h-4 w-4",
    gap: "gap-2",
  },
  sm: {
    textSize: "text-sm",
    btnPadding: "py-2 pl-5 pr-3",
    circleSize: "h-9 w-9",
    arrowSize: "h-5 w-5",
    gap: "gap-3",
  },
  md: {
    textSize: "text-base",
    btnPadding: "py-2 pl-5.5 pr-3",
    circleSize: "h-10 w-10",
    arrowSize: "h-6 w-6",
    gap: "gap-3.5",
  },
  lg: {
    textSize: "text-lg",
    btnPadding: "py-2 pl-6.5 pr-3",
    circleSize: "h-11 w-11",
    arrowSize: "h-7 w-7",
    gap: "gap-4",
  },
  xl: {
    textSize: "text-xl",
    btnPadding: "py-2 pl-8 pr-3",
    circleSize: "h-12 w-12",
    arrowSize: "h-8 w-8",
    gap: "gap-4.5",
  },
  "2xl": {
    textSize: "text-2xl",
    btnPadding: "py-2 pl-9 pr-3",
    circleSize: "h-13 w-13",
    arrowSize: "h-9 w-9",
    gap: "gap-5",
  },
};

const fontClassMap: Record<
  NonNullable<ButtonPrimaryProps["font"]>,
  string
> = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

export default function ButtonPrimary({
  text = "Hover me",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  size = "sm",
  font = "medium",
}: ButtonPrimaryProps) {
  const Tag = href ? "a" : "button";
  const config = configMap[size];

  return (
    <Tag
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled || undefined}
      className={`group relative flex cursor-pointer select-none items-center justify-between rounded-full border-0 bg-blue-600 transition-transform duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-60 ${config.btnPadding} ${config.gap} ${className}`}
    >
      <span
        className={`relative z-10 h-[1.4em] overflow-hidden leading-[1.4] text-white ${config.textSize} ${fontClassMap[font]}`}
      >
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <span className="flex h-[1.4em] items-center whitespace-nowrap">
            {text}
          </span>
          <span
            aria-hidden="true"
            className="flex h-[1.4em] items-center whitespace-nowrap"
          >
            {text}
          </span>
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`relative z-10 flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-black ${config.circleSize}`}
      >
        <ChevronRight
          className={`absolute transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[180%] ${config.arrowSize}`}
        />
        <ChevronRight
          className={`absolute translate-x-[180%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0 ${config.arrowSize}`}
        />
      </span>
    </Tag>
  );
}
