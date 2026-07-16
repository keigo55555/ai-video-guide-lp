"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type EventParamValue = string | number | boolean;

type TrackedExternalLinkProps = {
  href: string;
  eventName: string;
  eventParams: Record<string, EventParamValue>;
  className?: string;
  children: ReactNode;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: string;
  "aria-label"?: string;
};

export default function TrackedExternalLink({
  href,
  eventName,
  eventParams,
  className,
  children,
  target,
  rel,
  "aria-label": ariaLabel,
}: TrackedExternalLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      onClick={() => sendGAEvent("event", eventName, eventParams)}
    >
      {children}
    </a>
  );
}
