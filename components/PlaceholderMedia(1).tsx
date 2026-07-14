import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

type PlaceholderMediaProps = {
  kind: "hero" | "image" | "video";
  label: string;
  source: string;
  poster?: string;
  priority?: boolean;
};

function publicFileExists(path?: string) {
  if (!path) return false;
  return existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));
}

export default function PlaceholderMedia({ kind, label, source, poster, priority = false }: PlaceholderMediaProps) {
  const sourceExists = publicFileExists(source);
  const posterExists = publicFileExists(poster);
  const displayPath = `/public${source}`;

  if ((kind === "video" || kind === "hero") && sourceExists) {
    const isHero = kind === "hero";

    return (
      <div
        className={`mx-auto w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 shadow-[0_24px_70px_rgba(24,24,27,0.14)] ${
          isHero ? "max-w-[360px]" : "max-w-[420px]"
        }`}
      >
        <video
          className="block aspect-[9/16] w-full bg-black object-contain"
          controls={!isHero}
          autoPlay={isHero}
          muted
          loop
          playsInline
          preload={isHero ? "auto" : "metadata"}
          poster={posterExists ? poster : undefined}
          aria-label={label}
        >
          <source src={source} type="video/mp4" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>
    );
  }

  if ((kind === "image" && sourceExists) || (!sourceExists && posterExists && poster)) {
    const imageSource = sourceExists ? source : poster;
    return (
      <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(24,24,27,0.08)]">
        <Image
          src={imageSource!}
          alt={label}
          width={1206}
          height={1711}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 92vw, 460px"
          priority={priority}
        />
      </div>
    );
  }

  if (kind === "hero") {
    return (
      <div className="relative mx-auto w-full max-w-[500px] rounded-[2rem] border border-zinc-200 bg-zinc-50 p-5 shadow-[0_28px_80px_rgba(24,24,27,0.12)] sm:p-7">
        <div className="mb-4 flex items-center justify-between text-[11px] font-bold tracking-widest text-zinc-500">
          <span>AI VIDEO / PREVIEW</span>
          <span className="size-2 rounded-full bg-emerald-500" />
        </div>
        <div className="grid gap-4 sm:grid-cols-[0.82fr_1.18fr]">
          <div className="order-2 flex flex-col gap-3 sm:order-1">
            {["IMAGE", "MOTION", "EDIT"].map((item, index) => (
              <div key={item} className="flex flex-1 items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3">
                <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-[10px] font-black text-emerald-700">0{index + 1}</span>
                <span className="text-[11px] font-black tracking-widest text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="order-1 relative grid min-h-72 place-items-center overflow-hidden rounded-[1.5rem] bg-zinc-950 sm:order-2 sm:min-h-96">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(52,211,153,0.26),transparent_32%)]" />
            <div className="relative grid size-20 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur">▶</div>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-widest text-zinc-300">SHORT VIDEO</span>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-white px-4 py-3 text-center text-[11px] leading-5 text-zinc-500">
          作例動画をここに配置<br /><code className="font-mono text-[10px] text-zinc-700">{displayPath}</code>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid place-items-center rounded-[2rem] border border-dashed border-zinc-300 bg-white p-8 text-center ${kind === "video" ? "aspect-[9/16] max-h-[640px] bg-zinc-900 text-white" : "aspect-[16/7] text-zinc-800"}`}>
      <div>
        <span aria-hidden="true" className={`mx-auto mb-5 grid size-14 place-items-center rounded-2xl text-xl ${kind === "video" ? "bg-white/10" : "bg-emerald-50 text-emerald-700"}`}>
          {kind === "video" ? "▶" : "▧"}
        </span>
        <p className="font-bold">{label}</p>
        <code className={`mt-3 block font-mono text-[11px] ${kind === "video" ? "text-zinc-400" : "text-zinc-500"}`}>{displayPath}</code>
        {poster ? <code className={`mt-1 block font-mono text-[11px] ${kind === "video" ? "text-zinc-500" : "text-zinc-400"}`}>/public{poster}</code> : null}
      </div>
    </div>
  );
}
