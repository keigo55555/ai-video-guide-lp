import type { Metadata } from "next";
import Container from "@/components/Container";
import PromptCard from "@/components/PromptCard";

export const metadata: Metadata = {
  title: "AI動画 完全版無料ガイド",
  description: "LINE登録者限定のAI動画完全版無料ガイドです。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const prompts = [
  {
    step: 1,
    title: "人物を白背景にする",
    description: "元画像から、動画素材に使う人物画像を作ります。",
    prompt: "人物の一貫性を保ったまま股上までの画像にして。カラー。背景は白。",
  },
  {
    step: 2,
    title: "2人を横構図で並べる",
    description: "2枚の人物画像を、同じ背景に配置します。",
    prompt: `添付した2枚の画像の人物をそのまま使用する。
顔・髪型・服装・体型は一切変更しない。
元画像と同一人物であることを厳密に保持する。
人物には一切変更を加えない。
1536x1024 横構図。
股上まで入る画像。
明治の洋館の室内で二人が立っている。
二人の身長は同じ。`,
    note: "「明治の洋館の室内」の部分を、作りたい背景に変更してください。",
  },
  {
    step: 3,
    title: "2人を縦動画用に並べる",
    description: "InstagramリールやTikTok用の縦画像を作ります。",
    prompt: `添付した2枚の画像の人物をそのまま使用する。
顔・髪型・服装・体型は一切変更しない。
元画像と同一人物であることを厳密に保持する。
人物には一切変更を加えない。
9:16縦構図。
股上まで入る画像。
明治の洋館の室内で二人が立っている。
二人の身長は同じ。
二人を画面中央に配置し、人物同士が重ならないようにする。`,
    note: "「明治の洋館の室内」の部分を、作りたい背景に変更してください。",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <a
        href="#guide-content"
        className="sr-only z-50 rounded-lg bg-white px-4 py-3 font-bold text-[#111111] shadow-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        本文へ移動
      </a>

      <header className="border-b border-[#E5E7EB] bg-white">
        <Container className="flex min-h-16 items-center justify-between gap-4 py-3 sm:min-h-[72px]">
          <p className="text-[15px] font-black tracking-[-0.02em] text-[#111111] sm:text-base">
            AI動画無料ガイド
          </p>
          <p className="shrink-0 rounded-full bg-[#111827] px-3 py-1.5 text-[11px] font-black tracking-[0.05em] text-white sm:px-4 sm:text-xs">
            LINE登録者限定
          </p>
        </Container>
      </header>

      <div id="guide-content">
        <section className="relative overflow-hidden px-0 pb-12 pt-10 sm:pb-16 sm:pt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-40 size-[30rem] rounded-full bg-[#E5E7EB]/65 blur-3xl"
          />
          <Container className="relative max-w-[880px] text-center">
            <p className="text-xs font-bold tracking-[0.14em] text-[#6B7280]">
              COMPLETE GUIDE
            </p>
            <h1 className="mt-3 text-[clamp(2rem,8vw,3.5rem)] font-black leading-[1.2] tracking-[-0.045em] text-[#111111]">
              AI動画 完全版無料ガイド
            </h1>
            <p className="mx-auto mt-5 max-w-[680px] text-sm leading-[1.9] text-[#666666] sm:text-lg">
              動画を見ながら、必要なプロンプトを下からコピーして使用してください。
            </p>
          </Container>
        </section>

        <section className="pb-14 sm:pb-20" aria-labelledby="guide-video-heading">
          <Container className="max-w-[960px]">
            <h2 id="guide-video-heading" className="sr-only">
              AI動画完全版ガイド動画
            </h2>
            <div className="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-black shadow-sm sm:rounded-[20px]">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/6Ll41OdSJwg?rel=0"
                  title="AI動画 完全版無料ガイド"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-[#E5E7EB] bg-white py-14 sm:py-20" aria-labelledby="tools-heading">
          <Container className="max-w-[880px]">
            <div className="text-center">
              <h2 id="tools-heading" className="text-[28px] font-black tracking-[-0.035em] text-[#111111] sm:text-[38px]">
                使用するツール
              </h2>
            </div>

            <div className="mt-9 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
              <article className="flex flex-col rounded-[18px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-7">
                <h3 className="text-[22px] font-black tracking-[-0.02em] text-[#111111]">
                  <a
                    href="https://chatgpt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9CA3AF]/35"
                  >
                    ChatGPT
                    <span aria-hidden="true" className="text-sm font-bold text-[#6B7280] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.85] text-[#666666] sm:text-base">
                  人物画像の生成や、背景・構図を変更した画像の作成に使用します。
                </p>
                <a
                  href="https://chatgpt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#111827] px-5 py-3 text-sm font-black text-white transition-colors hover:bg-[#374151] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9CA3AF]/35"
                >
                  ChatGPTを開く
                  <span aria-hidden="true" className="ml-2 text-xs">↗</span>
                </a>
              </article>

              <article className="flex flex-col rounded-[18px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-7">
                <h3 className="flex items-center gap-2 text-[22px] font-black tracking-[-0.02em] text-[#111111]">
                  <a
                    href="https://motivaiprivatelimited.sjv.io/ZVmLnk"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9CA3AF]/35"
                  >
                    PixVerse
                    <span aria-hidden="true" className="text-sm font-bold text-[#6B7280] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                  <span className="inline-flex shrink-0 items-center rounded border border-[#9CA3AF] bg-[#F3F4F6] px-2 py-0.5 text-xs font-bold leading-5 tracking-normal text-[#4B5563]">
                    PR
                  </span>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.85] text-[#666666] sm:text-base">
                  作成した画像を動画化し、人物のポーズ変更やトランジションを作るために使用します。
                </p>
                <a
                  href="https://motivaiprivatelimited.sjv.io/ZVmLnk"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#111827] px-5 py-3 text-sm font-black text-white transition-colors hover:bg-[#374151] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9CA3AF]/35"
                >
                  PixVerseを開く
                  <span aria-hidden="true" className="ml-2 text-xs">↗</span>
                </a>
              </article>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#E5E7EB] bg-[#F7F7F7] py-14 sm:py-20" aria-labelledby="prompts-heading">
          <Container className="max-w-[880px]">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.14em] text-[#6B7280]">
                COPY &amp; PASTE
              </p>
              <h2 id="prompts-heading" className="mt-3 text-[28px] font-black tracking-[-0.035em] text-[#111111] sm:text-[38px]">
                コピペ用プロンプト
              </h2>
            </div>

            <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6">
              {prompts.map((prompt) => (
                <PromptCard key={prompt.step} {...prompt} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20" aria-labelledby="support-heading">
          <Container className="max-w-[880px]">
            <div className="rounded-[18px] border border-[#E5E7EB] bg-white px-6 py-9 shadow-sm sm:rounded-[20px] sm:px-10 sm:py-11">
              <div className="flex flex-wrap items-center gap-3">
                <h2 id="support-heading" className="text-[25px] font-black leading-[1.45] tracking-[-0.03em] text-[#111111] sm:text-[34px]">
                  最初の1本が完成するまで7日間サポート
                </h2>
                <span className="shrink-0 rounded-full border border-[#E5E7EB] bg-[#F3F4F6] px-3 py-1.5 text-[11px] font-bold text-[#6B7280] sm:text-xs">
                  7日間サポート
                </span>
              </div>
              <p className="mt-5 max-w-[700px] text-sm leading-[1.9] text-[#666666] sm:text-base">
                登録日から7日間、最初の動画1本について質問できます。
                <br className="hidden sm:block" />
                分からない画面や生成結果を、LINEのトークに送ってください。
              </p>
            </div>
          </Container>
        </section>
      </div>

      <footer className="border-t border-[#E5E7EB] bg-white py-8">
        <Container className="max-w-[880px]">
          <p className="text-center text-xs leading-[1.9] text-[#666666] sm:text-sm">
            このページはLINE登録者向けの限定ガイドです。
            <br />
            URLおよび内容の無断転載・再配布はご遠慮ください。
          </p>
        </Container>
      </footer>
    </main>
  );
}
