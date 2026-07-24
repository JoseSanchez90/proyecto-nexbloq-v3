import type { CSSProperties, ReactNode } from "react";

type LogoNode = {
  node: ReactNode;
  title?: string;
  ariaLabel?: string;
  href?: string;
};

type LogoImage = {
  src: string;
  alt?: string;
  title?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  href?: string;
};

export type LogoLoopItem = LogoNode | LogoImage;

export type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoLoopItem, key: string) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

declare const LogoLoop: (props: LogoLoopProps) => ReactNode;

export { LogoLoop };
export default LogoLoop;
