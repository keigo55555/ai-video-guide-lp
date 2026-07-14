type CtaLocation = "header" | "hero" | "guide" | "final";

type LineCtaProps = {
  href?: string;
  location: CtaLocation;
  compact?: boolean;
};

export default function LineCta({ href, location, compact = false }: LineCtaProps) {
  const label = "LINEで無料ガイドを受け取る";
  const sizeClasses = compact ? "min-h-12 px-5 py-2 text-sm" : "min-h-[60px] gap-3 px-5 py-4 text-[16px] sm:text-[17px]";

  if (!href) {
    return (
      <span
        data-cta="line-registration"
        data-cta-location={location}
        data-cta-state="unconfigured"
        aria-disabled="true"
        className={`flex w-full cursor-not-allowed items-center justify-center rounded-[18px] border border-black/10 bg-[#E4E1DA] font-bold text-[#6B6862] ${sizeClasses}`}
      >
        LINE登録は現在準備中です
      </span>
    );
  }

  return (
    <a
      href={href}
      data-cta="line-registration"
      data-cta-location={location}
      aria-label={`${label}（LINE公式アカウントへ移動）`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex w-full items-center justify-center rounded-[18px] bg-[#06C755] font-black text-white shadow-[0_10px_24px_rgba(6,199,85,0.2)] transition-colors duration-200 hover:bg-[#05B94E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#28345C]/25 focus-visible:ring-offset-2 ${sizeClasses}`}
    >
      <span>{compact ? "無料ガイドを受け取る" : label}</span>
      {!compact ? <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span> : null}
    </a>
  );
}
