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
    <div className={centered ? "mx-auto max-w-[1100px]" : "max-w-[800px]"}>
      <div className="relative pt-4">
        <p className="absolute left-6 top-0 z-10 inline-flex rounded-full bg-[#28345C] px-4 py-2 text-xs font-black tracking-[0.08em] text-white shadow-[0_4px_12px_rgba(40,52,92,0.12)] sm:left-8 sm:text-[13px]">{label}</p>
        <div className="relative overflow-hidden rounded-[16px] border border-black/10 bg-white px-5 pb-6 pt-11 shadow-[0_10px_28px_rgba(21,21,21,0.055)] sm:rounded-[18px] sm:px-9 sm:pb-7 sm:pt-12">
          <span aria-hidden="true" className="absolute bottom-4 left-5 top-10 w-px bg-[#C6A46A]/70 sm:left-7 sm:top-11" />
          <span aria-hidden="true" className="absolute -right-9 -top-10 size-28 rounded-full border border-[#C6A46A]/45" />
          <h2 id={id} className="pl-4 text-left text-[clamp(1.75rem,3.5vw,2.65rem)] font-black leading-[1.35] tracking-[-0.035em] text-[#151515] sm:pl-5">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
