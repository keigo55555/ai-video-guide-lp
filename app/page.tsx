import Image from "next/image";
import Container from "@/components/Container";
import HeroVideo from "@/components/HeroVideo";
import LineCta from "@/components/LineCta";
import SectionHeading from "@/components/SectionHeading";

const results = [
  { value: "16,873,128", label: "約1か月の合計閲覧数" },
  { value: "50万回以上", label: "リール1本あたりの平均閲覧数", note: "※対象期間の投稿本数から算出" },
  { value: "7,637,277", label: "リーチしたアカウント" },
];

const concerns = [
  "顔を出したくない",
  "撮影する場所や機材がない",
  "編集が難しそう",
  "どのAIを使えばいいか分からない",
];

const steps = [
  {
    number: "01",
    title: "画像を用意する",
    text: "人物や背景の画像を作り、動画の元になる素材を準備します。",
  },
  {
    number: "02",
    title: "AIで動画化する",
    text: "画像を読み込み、短い指示文で動きや表情を付けます。",
  },
  {
    number: "03",
    title: "編集して投稿する",
    text: "音声、字幕、テンポを整え、Instagram用に書き出します。",
  },
];

const guideBenefits = [
  {
    title: "解説動画",
    text: "実際の制作手順を、操作画面を見ながら順番に確認できます。",
    tone: "bg-[#F4F0FF]",
    icon: "play" as const,
  },
  {
    title: "使用AIツール一覧",
    text: "実際に使用しているAIと、必要な設定をまとめています。",
    tone: "bg-[#EEF6FF]",
    icon: "tools" as const,
  },
  {
    title: "コピペ用プロンプト集",
    text: "動画内で使用しているプロンプトを、そのまま使える形で受け取れます。",
    tone: "bg-[#FFF6E8]",
    icon: "copy" as const,
  },
  {
    title: "制作順チェックリスト",
    text: "動画を見たあとに迷わないよう、作業の順番を一覧で確認できます。",
    tone: "bg-[#EFFAF4]",
    icon: "check" as const,
  },
];

const faqs = [
  {
    question: "本当に無料ですか？",
    answer: "LINE登録後にお渡しする解説動画、使用AIツール一覧、プロンプト集、制作順チェックリスト、7日間サポートはすべて無料です。AI動画を実際に作る際は、利用するAIツールの料金として、選ぶプランによって月額数千円程度かかる場合があります。",
  },
  {
    question: "AI初心者でも作れますか？",
    answer: "初めての人が順番に進められるように、操作画面、設定、入力する文章まで具体的に説明します。",
  },
  {
    question: "スマホだけでも作れますか？",
    answer: "一部はスマホでも進められますが、画像管理や動画編集はPCを併用した方が進めやすい場合があります。",
  },
  {
    question: "同じ閲覧数を出せますか？",
    answer: "同じ成果を保証するものではありません。投稿ジャンル、内容、継続期間、各SNSの状況によって結果は変わります。",
  },
  {
    question: "どのAIを使いますか？",
    answer: "画像生成、動画化、編集に使用するツールと設定をガイド内で説明します。サービスの料金や仕様は変更される場合があります。",
  },
  {
    question: "7日間サポートでは何を相談できますか？",
    answer: "登録後7日以内に作る最初の動画1本について、テーマ、構成、冒頭、テロップ、生成結果、完成動画の改善点を相談できます。制作代行は含まれません。",
  },
];

const disclaimers = [
  "本ガイドは、同じ閲覧数や収益を保証するものではありません。",
  "結果は投稿ジャンル、内容、継続期間、各SNSの状況などによって異なります。",
  "AIサービスの料金、仕様、利用可能なモデルは変更される場合があります。",
];

type BenefitIconType = (typeof guideBenefits)[number]["icon"];

function BenefitIcon({ type }: { type: BenefitIconType }) {
  if (type === "play") {
    return <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-current" />;
  }

  if (type === "tools") {
    return (
      <span className="grid w-8 gap-2">
        {["left-1", "left-4", "left-2"].map((position) => (
          <span key={position} className="relative block h-0.5 w-8 bg-current">
            <span className={`absolute -top-[3px] size-2 rounded-full border-2 border-current bg-white ${position}`} />
          </span>
        ))}
      </span>
    );
  }

  if (type === "copy") {
    return (
      <span className="relative block size-8">
        <span className="absolute left-1 top-1 size-5 rounded border-2 border-current" />
        <span className="absolute bottom-1 right-1 size-5 rounded border-2 border-current bg-white/80" />
      </span>
    );
  }

  return (
    <span className="grid w-8 gap-1.5">
      {[0, 1, 2].map((item) => (
        <span key={item} className="flex items-center gap-1.5">
          <span className="block h-1.5 w-2.5 -rotate-45 border-b-2 border-l-2 border-current" />
          <span className="block h-0.5 flex-1 bg-current" />
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const configuredLineUrl = process.env.NEXT_PUBLIC_LINE_URL?.trim();
  const lineUrl = configuredLineUrl && /^https:\/\/([a-z0-9-]+\.)?(line\.me|lin\.ee)\//i.test(configuredLineUrl)
    ? configuredLineUrl
    : undefined;

  if (process.env.NODE_ENV === "development" && !lineUrl) {
    console.warn("NEXT_PUBLIC_LINE_URLに有効なLINE URLが設定されていません。CTAを無効表示します。");
  }
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only z-50 rounded-xl bg-white px-4 py-3 font-bold text-[#171717] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        本文へ移動
      </a>

      <header className="border-b border-black/10 bg-[#F7F5EF]">
        <Container className="flex h-16 items-center justify-between sm:h-[72px]">
          <a
            href="#main-content"
            className="rounded-lg text-[15px] font-black tracking-[-0.02em] text-[#171717] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6547E8]/25 sm:text-base"
            aria-label="AI動画無料ガイド トップ"
          >
            AI動画無料ガイド
          </a>
          <div className="hidden sm:block">
            <LineCta href={lineUrl} location="header" compact />
          </div>
        </Container>
      </header>

      <div id="main-content">
        <section className="relative overflow-hidden bg-[#F7F5EF] py-10 sm:py-14 lg:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-40 size-[32rem] rounded-full bg-[#E5DEFF]/55 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[18%] size-72 rounded-full bg-[#CFC2FF]/30 blur-3xl" />
          <Container className="grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <div className="relative z-10 min-w-0 max-w-[730px]">
              <p className="inline-flex rounded-full border border-[#6547E8]/20 bg-white/80 px-4 py-2 text-[13px] font-bold text-[#4D35B8] sm:text-sm">
                顔出しなし・撮影なし・専門スキルなし
              </p>
              <h1 className="mt-5 text-[clamp(2rem,8.8vw,3.75rem)] font-black leading-[1.16] tracking-[-0.05em] text-[#171717] lg:text-[clamp(2.25rem,3.4vw,3rem)]">
                <span className="block whitespace-nowrap">AIを使って作った</span>
                <span className="block whitespace-nowrap">Instagramリールが、</span>
                <span className="mt-1 block lg:flex lg:items-baseline lg:gap-[0.18em] lg:whitespace-nowrap">
                  <span className="block whitespace-nowrap">約1か月で</span>
                  <span className="relative block w-fit whitespace-nowrap text-[#6547E8] after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#6547E8]/45 after:to-transparent">合計1,687万閲覧。</span>
                </span>
              </h1>
              <p className="mt-7 text-[18px] font-black leading-[1.75] tracking-[-0.025em] text-[#171717] sm:text-[22px] sm:leading-[1.7]">
                使用しているAIも、制作手順も、<br className="sm:hidden" />すべて公開。<br />
                設定・プロンプト・操作画面まで、<br />
                実際に使っている形のまままとめました。
              </p>
              <p className="mt-5 max-w-[680px] text-[15px] leading-[1.9] text-[#66635C] sm:text-[17px]">
                LINEで無料ガイドを受け取れば、<br className="hidden sm:block" />
                約1か月で合計1,687万閲覧を記録したリールと<br className="hidden sm:block" />
                ほぼ同じようなAI動画を、自分で作れるようになります。
              </p>

              <div className="mt-7 max-w-[560px]">
                <LineCta href={lineUrl} location="hero" />
                <p className="mt-3 text-center text-sm font-bold text-[#35332F]">登録後すぐに完全版ガイドが届きます</p>
                <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs leading-6 text-[#66635C] sm:text-[13px]">
                  <span>最初の1本まで<span className="whitespace-nowrap font-bold text-[#4D35B8]">7日間サポート付き</span></span>
                  <span>ガイドの追加料金なし</span>
                </div>
                <p className="mt-2 text-center text-[11px] leading-5 text-[#77736B] sm:text-xs">※同じ閲覧数や成果を保証するものではありません。</p>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[350px]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-10 rounded-full bg-[#7B5CFF]/30 blur-3xl" />
              <p className="mb-3 text-center text-xs font-bold tracking-[0.08em] text-[#66635C]">実際に作成したAI動画</p>
              <div className="relative"><HeroVideo /></div>
            </div>
          </Container>
        </section>

        <section className="section-space border-y border-black/10 bg-white" aria-labelledby="results-heading">
          <Container className="grid max-w-[1160px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_470px] lg:items-center lg:gap-20">
            <div className="min-w-0">
              <SectionHeading
                id="results-heading"
                label="実際の運用結果"
                title={<>2026年5月10日〜6月10日<br />Instagramリール運用実績</>}
                align="left"
              />
              <p className="mt-6 max-w-[620px] text-base leading-[1.9] text-[#66635C] sm:text-[18px]">
                AIを使って作ったInstagramリールの<br />
                合計閲覧数は<span className="whitespace-nowrap font-bold text-[#6547E8]">16,873,128</span>。<br />
                リーチしたアカウントは<span className="whitespace-nowrap font-bold text-[#171717]">7,637,277</span>でした。
              </p>
              <div className="mt-9 grid grid-cols-1 gap-3">
                {results.map((result) => (
                  <div key={result.label} className="flex items-center justify-between gap-4 rounded-[18px] border border-[#6547E8]/10 bg-[#FAF9FF] px-5 py-4 shadow-[0_7px_18px_rgba(23,23,23,0.035)] transition-transform duration-200 hover:-translate-y-0.5">
                    <p className="whitespace-nowrap text-[clamp(1.75rem,4vw,2.5rem)] font-black tracking-[-0.04em] text-[#4D35B8]">
                      {result.value}{result.note ? <sup className="ml-0.5 align-super text-xs">※</sup> : null}
                    </p>
                    <div className="text-right">
                      <p className="text-xs font-bold leading-5 text-[#66635C] lg:text-sm">{result.label}</p>
                      {result.note ? <p className="mt-1 text-[10px] leading-4 text-[#77736B] sm:text-[11px]">{result.note}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[470px]">
              <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white p-2 shadow-[0_18px_45px_rgba(23,23,23,0.12)] sm:p-3">
                <Image
                  src="/assets/instagram-insight.webp"
                  alt="5月10日から6月10日の閲覧数16,873,128、フォロワー以外99.1%、リーチしたアカウント7,637,277を示すInstagramインサイト"
                  width={1206}
                  height={1711}
                  className="h-auto w-full rounded-[20px] object-contain"
                  sizes="(max-width: 768px) 92vw, 470px"
                />
              </div>
            </figure>
          </Container>
        </section>

        <section className="section-space bg-[#F7F5EF]" aria-labelledby="concerns-heading">
          <Container>
            <SectionHeading id="concerns-heading" label="始められない理由" title="こんな理由で、動画発信を止めていませんか？" />
            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
              {concerns.map((concern) => (
                <div key={concern} className="rounded-[22px] border border-black/10 bg-white px-5 py-6 sm:px-6 sm:py-7">
                  <span aria-hidden="true" className="mb-5 block h-1.5 w-8 rounded-full bg-[#6547E8]" />
                  <p className="text-[15px] font-bold leading-[1.7] text-[#171717] sm:text-lg">{concern}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-[760px] text-center text-base font-medium leading-[2] text-[#4F4C46] sm:text-lg">
              必要なのは、出演者や高価な撮影機材ではありません。<br className="hidden sm:block" />
              画像を用意し、AIで動かし、短く編集する。最初の1本は、この順番で作れます。
            </p>
          </Container>
        </section>

        <section className="section-space border-y border-black/10 bg-white" aria-labelledby="steps-heading">
          <Container>
            <SectionHeading id="steps-heading" label="制作の流れ" title="最初の1本は、3ステップ" />
            <div className="relative mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7">
              <div aria-hidden="true" className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-[#6547E8]/25 lg:block" />
              {steps.map((step) => (
                <article key={step.number} className="relative rounded-[24px] border border-black/10 bg-[#F7F5EF] p-6 sm:p-8">
                  <span className="relative z-10 grid size-16 place-items-center rounded-full bg-[#6547E8] text-sm font-black text-white shadow-[0_8px_20px_rgba(101,71,232,0.18)]">STEP<br />{step.number}</span>
                  <h3 className="mt-6 text-xl font-black tracking-[-0.02em] text-[#171717] sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-[#66635C] sm:text-base">{step.text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-space border-y border-[#6547E8]/10 bg-[#FAF8FF]" aria-labelledby="guide-heading">
          <Container>
            <SectionHeading id="guide-heading" label="LINE登録特典" title={<>使っているAIも、制作手順も、<br className="hidden sm:block" />すべて公開</>} />
            <p className="mx-auto mt-6 max-w-[820px] text-center text-base leading-[1.9] text-[#66635C] sm:text-[18px]">
              一部のコツだけではありません。<br className="hidden sm:block" />
              実際に使用しているAI、設定、プロンプト、操作画面を含め、<br className="hidden sm:block" />
              普段行っている制作手順を最初から最後までまとめています。
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {guideBenefits.map((benefit) => (
                <article key={benefit.title} className={`rounded-[24px] border border-black/10 p-6 shadow-[0_10px_24px_rgba(23,23,23,0.05)] transition-transform duration-200 hover:-translate-y-1 sm:p-7 ${benefit.tone}`}>
                  <span aria-hidden="true" className="grid size-14 place-items-center rounded-2xl border border-white/80 bg-white/75 text-[#6547E8] shadow-sm">
                    <BenefitIcon type={benefit.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-black tracking-[-0.02em] text-[#171717] sm:text-xl">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#66635C] sm:text-[15px]">{benefit.text}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-[560px]">
              <LineCta href={lineUrl} location="guide" />
              <p className="mt-4 text-center text-xs leading-6 text-[#66635C] sm:text-sm">解説動画・ツール一覧・プロンプト集・チェックリストはすべて無料です。</p>
            </div>
          </Container>
        </section>

        <section className="border-y border-black/10 bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="reason-heading">
          <Container size="text">
            <SectionHeading id="reason-heading" label="無料公開の理由" title="遠回りした部分まで、まとめて公開します" align="left" />
            <div className="mt-8 space-y-5 text-base leading-[2] text-[#5B5852] sm:text-[18px]">
              <p>私自身、最初はどのAIを使えばいいか分からず、必要のないプランを契約したり、思うような動画が作れず、何度も生成をやり直したりしました。</p>
              <p>これから始める人には、同じ遠回りをしてほしくありません。そこで、実際に使っている制作手順と、失敗しやすいポイントを無料でまとめました。</p>
            </div>
          </Container>
        </section>

        <section className="section-space bg-[#F7F5EF]" aria-labelledby="support-heading">
          <Container size="text">
            <SectionHeading id="support-heading" label="7日間サポート" title="最初の1本を完成させるための、7日間サポート" align="left" />
            <p className="mt-7 text-base leading-[1.95] text-[#66635C] sm:text-[18px]">
              登録後7日以内に作る最初の動画1本について、テーマ、構成、冒頭の見せ方、テロップ、生成結果、完成動画の改善点をLINEで相談できます。
            </p>
            <p className="mt-6 border-l-[3px] border-[#6547E8] pl-5 text-lg font-black leading-[1.8] text-[#171717] sm:text-xl">
              作り方を読むだけで終わらず、最初の1本を完成させるところまで進めてもらうためのサポートです。
            </p>
            <p className="mt-6 text-sm leading-7 text-[#66635C] sm:text-[15px]">
              対象は、登録後7日以内に制作する最初の動画1本です。<br />
              動画の制作代行・編集代行ではありません。
            </p>
            <p className="mt-6 rounded-r-[16px] border-l-4 border-[#6547E8] bg-[#F0ECFF] px-5 py-4 text-sm font-bold leading-7 text-[#4F476A] sm:text-[15px]">
              ※7日間サポートは、対応可能人数に達した場合は受付を終了します。
            </p>
          </Container>
        </section>

        <section className="section-space border-y border-black/10 bg-white" aria-labelledby="faq-heading">
          <Container size="text">
            <SectionHeading id="faq-heading" label="よくある質問" title="登録前のご質問" />
            <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-base font-black leading-7 text-[#171717] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6547E8]/20 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span><span className="mr-2 text-[#6547E8]">Q.</span>{faq.question}</span>
                    <span aria-hidden="true" className="text-2xl font-light text-[#6547E8] transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <div className="pb-6 pr-8 text-[15px] leading-[1.9] text-[#66635C] sm:text-base">
                    <span className="mr-2 font-black text-[#171717]">A.</span>{faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-gradient-to-br from-[#241747] to-[#6547E8] py-16 text-white sm:py-24" aria-labelledby="final-heading">
          <Container size="text" className="text-center">
            <p className="text-sm font-bold text-[#B8A9FF]">完全版ガイド＋7日間サポート</p>
            <h2 id="final-heading" className="mt-4 text-[2.15rem] font-black leading-[1.25] tracking-[-0.04em] sm:text-5xl">まずは1本、完成させる。</h2>
            <p className="mx-auto mt-6 max-w-[620px] text-base leading-[1.9] text-white/70 sm:text-lg">
              登録後すぐに完全版ガイドが届きます。<br className="hidden sm:block" />途中で迷ったら、7日間のサポートを使ってください。
            </p>
            <div className="mx-auto mt-9 max-w-[560px]">
              <LineCta href={lineUrl} location="final" />
              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs leading-6 text-white/60 sm:text-[13px]">
                <span>登録後すぐに届きます</span>
                <span>ガイドの追加料金なし</span>
                <span>最初の1本まで<span className="whitespace-nowrap">7日間サポート</span></span>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <footer className="bg-[#F7F5EF] py-10 sm:py-12">
        <Container size="text">
          <ul className="space-y-2 text-[11px] leading-6 text-[#77736B] sm:text-xs">
            {disclaimers.map((text) => <li key={text}>※{text}</li>)}
          </ul>
          <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-[#77736B] sm:flex-row sm:items-center sm:justify-between">
            <span className="font-black text-[#35332F]">AI動画無料ガイド</span>
            <span>© {new Date().getFullYear()} AI Video Guide</span>
          </div>
        </Container>
      </footer>
    </main>
  );
}
