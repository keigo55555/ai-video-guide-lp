import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "text";
};

export default function Container({ children, className = "", size = "default" }: ContainerProps) {
  const width = size === "text" ? "max-w-[800px]" : "max-w-[1120px]";

  return <div className={`mx-auto w-full ${width} px-5 sm:px-8 ${className}`}>{children}</div>;
}
