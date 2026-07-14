type LineCtaProps = {
  href: string;
};

export default function LineCta({ href }: LineCtaProps) {
  const external = /^https?:\/\//.test(href);
  const label = "無料で完全版ガイドを受け取る";

  return (
    <a
      href={href}
      data-cta="line-registration"
      aria-label={`${label}（LINE公式アカウントへ移動）`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#06c755] px-5 py-4 text-center text-base font-black text-white shadow-[0_12px_28px_rgba(6,199,85,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#05b94e] hover:shadow-[0_16px_34px_rgba(6,199,85,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 sm:text-lg"
    >
      <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-[#06c755]">L</span>
      <span>{label}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
