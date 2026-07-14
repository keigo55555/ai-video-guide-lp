type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      <p className={`mb-4 text-xs font-black tracking-[0.2em] ${dark ? "text-emerald-400" : "text-emerald-700"}`}>{eyebrow}</p>
      <h2 className={`text-balance text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-zinc-950"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 whitespace-pre-line text-base leading-8 sm:text-lg sm:leading-9 ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
