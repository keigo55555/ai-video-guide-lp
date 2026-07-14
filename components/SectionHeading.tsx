import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: ReactNode;
  align?: "center" | "left";
};

export default function SectionHeading({ id, label, title, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-[820px] text-center" : "max-w-[760px] text-left"}>
      <p className="mb-4 inline-flex rounded-full border border-[#6547E8]/10 bg-[#F0ECFF] px-3 py-1.5 text-xs font-black tracking-[0.1em] text-[#6547E8] sm:text-[13px]">{label}</p>
      <h2 id={id} className="text-[clamp(1.85rem,4vw,3rem)] font-black leading-[1.3] tracking-[-0.04em] text-[#171717]">
        {title}
      </h2>
    </div>
  );
}
