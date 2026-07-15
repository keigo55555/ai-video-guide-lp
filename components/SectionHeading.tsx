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
      <div className="relative overflow-hidden rounded-[16px] border border-black/10 bg-white px-5 pb-6 pt-[4.5rem] shadow-[0_10px_28px_rgba(21,21,21,0.055)] sm:rounded-[18px] sm:px-9 sm:pb-8 sm:pt-[5.25rem]">
        <span aria-hidden="true" className="absolute bottom-4 left-5 top-4 w-px bg-[#C6A46A]/70 sm:left-7" />
        <span aria-hidden="true" className="absolute -right-9 -top-10 size-28 rounded-full border border-[#C6A46A]/45" />
        <span aria-hidden="true" className="absolute right-9 top-8 grid grid-cols-4 gap-2 opacity-45">
          {Array.from({ length: 8 }, (_, index) => <span key={index} className="size-1 rounded-full bg-[#C6A46A]" />)}
        </span>
        <p className="absolute left-9 top-5 inline-flex rounded-full bg-[#28345C] px-4 py-2 text-xs font-black tracking-[0.08em] text-white shadow-[0_4px_12px_rgba(40,52,92,0.12)] sm:left-12 sm:text-[13px]">{label}</p>
        <h2 id={id} className="pl-4 text-left text-[clamp(1.75rem,3.5vw,2.65rem)] font-black leading-[1.35] tracking-[-0.035em] text-[#151515] sm:pl-5">
          {title}
        </h2>
        <span aria-hidden="true" className="absolute bottom-5 right-6 h-px w-16 bg-[#C6A46A]/65" />
      </div>
    </div>
  );
}
