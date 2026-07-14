import Container from "@/components/Container";
import CheckList from "@/components/CheckList";
import LineCta from "@/components/LineCta";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import SectionHeading from "@/components/SectionHeading";

const concerns = [
  ["01", "顔出しをしたくない"],
  ["02", "撮影できる環境がない"],
  ["03", "動画編集が難しそう"],
  ["04", "AIをどう使えばいいか分からない"],
  ["05", "何を投稿すればいいか分からない"],
];

const benefits = [
  ["01", "再生数アップ", "多くの人に届く可能性が広がる"],
  ["02", "フォロワー増加", "投稿を待ってくれる人が増える"],
  ["03", "案件・収益化への活用", "アフィリエイトや商品案内に活用できる"],
  ["04", "顔出しなしで発信", "自分の生活や身元を出さずに続けやすい"],
];

const guideItems = [
  "AI動画の完全版制作ガイド",
  "実際の操作画面を使った解説動画",
  "そのまま使えるプロンプト",
  "使用ツールと設定方法",
  "失敗しやすいポイントと対処法",
  "登録後7日間、最初の1本が完成するまで個別相談",
];

const supportNotes = [
  "個別サポートは、LINE登録後7日以内に制作する最初の動画1本が対象です。",
  "動画の制作代行や編集代行ではありません。",
  "内容によっては、すべての要望に対応できない場合があります。",
];

const disclaimers = [
  "本ガイドは、同じ再生数や収益を保証するものではありません。",
  "結果は投稿ジャンル、内容、継続期間、各SNSの状況などによって異なります。",
  "一部のサービス紹介リンクには、アフィリエイトリンクが含まれる場合があります。",
  "リンクを経由しても、利用者の料金が上乗せされるものではありません。",
  "AIサービスの料金、仕様、利用可能なモデルは変更される場合があります。",
];

export default function Home() {
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL || "#";

  return (
    <main>
      <a
        href="#content"
        className="sr-only z-50 rounded-md bg-white px-4 py-3 text-sm font-bold text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        本文へ移動
      </a>

      <section className="relative overflow-hidden border-b border-zinc-200 bg-white pb-20 pt-6 sm:pb-28 sm:pt-8 lg:pb-32">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-45" />
        <Container className="relative">
          <header className="mb-14 flex items-center justify-between sm:mb-20">
            <a
              href="#content"
              className="inline-flex items-center gap-3 rounded-md font-extrabold tracking-tight text-zinc-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              aria-label="AI Video Guide トップ"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-zinc-950 text-xs text-white">AI</span>
              <span>AI Video Guide</span>
            </a>
            <span className="hidden text-sm font-medium text-zinc-500 sm:block">無料完全ガイド</span>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                顔出しなし・撮影なし・専門スキルなし
              </p>
              <h1 className="text-balance text-[clamp(2.35rem,6vw,4.65rem)] font-black leading-[1.12] tracking-[-0.045em] text-zinc-950">
                <span className="block">月間<span className="text-emerald-700">1,500万再生</span>を達成した</span>
                <span className="mt-2 block"><span className="underlined">AI動画</span>の作り方を<span className="text-emerald-700">無料公開</span></span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
                私が実際に運用しているInstagramアカウントで使っている、画像生成から動画編集までの制作手順を公開します。
              </p>
              <div className="mt-9 max-w-xl">
                <LineCta href={lineUrl} />
                <p className="mt-4 text-center text-sm font-medium text-zinc-600">LINE登録後、完全版ガイドのURLが自動で届きます</p>
                <p className="mt-1 text-center text-xs text-zinc-500">追加料金はかかりません</p>
              </div>
            </div>

            <PlaceholderMedia
              kind="hero"
              label="AI動画の作例"
              source="/assets/hero-video.mp4"
              poster="/assets/hero-poster.webp"
              priority
            />
          </div>
        </Container>
      </section>

      <div id="content">
        <section className="section-space bg-zinc-50">
          <Container>
            <SectionHeading
              eyebrow="RESULTS"
              title="顔を出さなくても、動画はここまで伸ばせます"
              description="私は顔出しをせず、撮影機材も使わずにInstagramを運用しています。特別な動画編集スキルがあったわけでもありません。AIを使った動画制作を試しながら改善した結果、月間の再生数は約1,500万回まで伸びました。"
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["月間再生数", "約1,500万回"],
                ["フォロワー", "約1.4万人"],
                ["1本あたり平均", "約50万再生"],
              ].map(([label, value]) => (
                <article key={label} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_12px_35px_rgba(24,24,27,0.05)] sm:p-8">
                  <p className="text-sm font-bold text-zinc-500">{label}</p>
                  <p className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">{value}</p>
                  <p className="mt-4 text-xs text-zinc-500">本人が申告する運用実績</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-500">※運用中のアカウント実績。再生数やフォロワー数は時期により変動します。</p>

            <div className="mt-10">
              <PlaceholderMedia
                kind="image"
                label="Instagramインサイト画像をここに配置"
                source="/assets/instagram-insight.webp"
              />
            </div>
          </Container>
        </section>

        <section className="section-space bg-white">
          <Container>
            <SectionHeading eyebrow="CONCERNS" title="こんな悩みはありませんか？" />
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {concerns.map(([number, label]) => (
                <article key={number} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_10px_30px_rgba(24,24,27,0.04)] sm:p-6">
                  <span className="grid size-10 place-items-center rounded-full bg-emerald-50 text-xs font-black text-emerald-700">{number}</span>
                  <h3 className="mt-5 text-sm font-bold leading-6 text-zinc-900 sm:text-base sm:leading-7">{label}</h3>
                </article>
              ))}
            </div>
            <div className="prose-copy mx-auto mt-12 max-w-3xl border-l-2 border-emerald-500 pl-6">
              <p>動画を始めたいと思っていても、顔出し、撮影、編集の壁で止まってしまう人は少なくありません。</p>
              <p>私自身も、以前は同じ理由でなかなか始められませんでした。</p>
            </div>
          </Container>
        </section>

        <section className="section-space overflow-hidden bg-emerald-50/70">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="WHAT AI MAKES POSSIBLE"
                  title="画像だった人物が、自然に動き出す"
                />
                <div className="prose-copy mt-8">
                  <p>以前なら、撮影や専門的な編集が必要だった映像も、今は数枚の画像とAIを使って形にできるようになりました。</p>
                  <p>出演者を用意したり、外へ撮影に行ったりしなくても、自分のアイデアを動画として発信できます。</p>
                </div>
              </div>
              <PlaceholderMedia
                kind="video"
                label="AI動画の作例をここに配置"
                source="/assets/sample-video.mp4"
                poster="/assets/sample-poster.webp"
              />
            </div>
            <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-7 shadow-[0_12px_40px_rgba(6,78,59,0.07)] sm:p-9">
              <p className="text-base font-bold leading-8 text-zinc-900 sm:text-lg">完成した動画を見ると難しそうに感じるかもしれません。</p>
              <div className="prose-copy mt-4">
                <p>ですが、実際に行うのは、決められた順番で画像を用意し、AIに指示を出すことです。</p>
                <p>具体的な操作画面と入力する文章は、LINE登録後の完全版ガイドで公開します。</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-space bg-white">
          <Container size="text">
            <SectionHeading align="left" eyebrow="WHY FREE" title="なぜ、無料で公開するのか" />
            <div className="story-copy mt-12 border-l-2 border-emerald-500 pl-6 sm:pl-10">
              <p>私自身、以前から動画を作って発信してみたいと思っていました。</p>
              <p>ただ、顔出しには抵抗がありました。撮影する場所や機材もなく、動画編集の専門知識もありません。</p>
              <blockquote>「自分には難しそう」<br />「顔を出せないなら無理だろう」</blockquote>
              <p>そう考えて、興味はあっても、なかなか始めることができませんでした。</p>
              <p className="font-bold text-zinc-950">そんな状況を変えてくれたのが、AIです。</p>
              <p>AIが登場したことで、顔を出さなくても、撮影をしなくても、頭の中にあるアイデアを動画として形にできるようになりました。</p>
              <p>ただ、最初はどのAIを使えばいいのか分からず、必要のないプランを契約したり、使えない動画に時間や費用を使ったりしました。</p>
              <p>かなり遠回りをしたと思います。</p>
              <p>だからこそ、これから始める人には、私と同じ失敗を繰り返してほしくありません。</p>
              <p>今は、情報もツールも次々に更新される時代です。自分だけが知っている方法を隠し続けても、いずれ似た情報は広がっていきます。</p>
              <p>それなら、私が実際に試して分かったことを使える形でまとめて公開した方がいいと考えました。</p>
              <p>このガイドを見れば、私が遠回りした部分を省き、最初の一本を完成させるところまで、より早く進めるはずです。</p>
              <p>顔を出せないことや、専門スキルがないことを理由に、やってみたい気持ちを諦める必要はありません。</p>
              <p className="font-bold text-zinc-950">その最初のきっかけとして、今回の制作手順を無料で公開します。</p>
            </div>
          </Container>
        </section>

        <section className="section-space bg-zinc-950 text-white">
          <Container>
            <SectionHeading
              dark
              eyebrow="YOUR NEXT STEP"
              title="今度は、あなたの動画が伸びる番かもしれません"
            />
            <div className="future-copy mx-auto mt-12 max-w-3xl">
              <p>この作り方を身につければ、ただAI動画を一本作れるようになるだけではありません。</p>
              <blockquote>「撮影できないから無理」<br />「顔を出したくないから発信できない」</blockquote>
              <p>と諦めていたアイデアも、動画として形にできるようになります。</p>
              <p>外に撮影へ行かなくても、出演者を用意しなくても、自分のパソコンやスマートフォンから動画を作って投稿できます。</p>
              <p className="text-center text-2xl font-black leading-relaxed text-white sm:text-3xl">数千回、数万回、数十万回。<br />内容によっては、100万回以上の人へ。</p>
              <p>私自身も、最初から月1,500万回再生されていたわけではありません。試しながら一本ずつ動画を作り、伸びた理由と失敗した理由を確認し、少しずつ現在の形にたどり着きました。</p>
              <p>もちろん、このガイドを見れば誰でも必ず同じ再生数になるわけではありません。投稿するジャンル、内容、継続期間によって結果は変わります。</p>
              <p>ただ、私が実際に使用している作り方を知ることで、何も分からない状態から一人で遠回りする必要はなくなります。</p>
              <p>今は動画を見る側でも、数週間後には、自分が作った動画の再生数が伸びていく画面を見ているかもしれません。</p>
              <p>フォロワーが増え、コメントや保存が入り、自分の発信を待ってくれる人が生まれる。そこから、アフィリエイト、企業や個人からの案件、自分の商品やサービスの集客につなげていくこともできます。</p>
              <p className="font-bold text-white">その最初の一歩は、まず一本の動画を自分で完成させることです。</p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(([number, title, description]) => (
                <article key={number} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <span className="text-xs font-black tracking-widest text-emerald-400">{number}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-xl">
              <LineCta href={lineUrl} />
              <p className="mt-4 text-center text-sm text-zinc-400">登録後、完全版ガイドのURLが自動で届きます</p>
            </div>
          </Container>
        </section>

        <section className="section-space bg-emerald-50/70">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div>
                <SectionHeading align="left" eyebrow="FREE GUIDE" title="LINE登録後に受け取れる内容" />
                <div className="mt-9">
                  <CheckList items={guideItems} />
                </div>
                <div className="prose-copy mt-9">
                  <p>登録後に、完全版ガイドを見るためのURLが自動で届きます。教材を受け取るための追加料金はありません。</p>
                  <p>LINEは、ガイドの配布、内容の更新、動画内で説明しきれなかった補足を届けるために使用します。</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ["GUIDE", "完全版ガイド", "画像生成から編集までを順番に"],
                  ["VIDEO", "解説動画", "実際の操作画面で迷わず進める"],
                  ["PROMPT", "プロンプト集", "そのまま使える指示文を収録"],
                ].map(([tag, title, text]) => (
                  <article key={tag} className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_12px_35px_rgba(6,78,59,0.06)]">
                    <span className="text-xs font-black tracking-[0.18em] text-emerald-700">{tag}</span>
                    <h3 className="mt-3 text-xl font-black text-zinc-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{text}</p>
                    <span aria-hidden="true" className="absolute -bottom-6 -right-4 text-8xl font-black text-emerald-50">{tag.slice(0, 1)}</span>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="section-space bg-white">
          <Container size="text">
            <SectionHeading eyebrow="7-DAY SUPPORT" title="最初の1本を完成させるための個別サポート" />
            <div className="story-copy mt-12">
              <p>ガイドを見ても、</p>
              <blockquote>「どんな動画を作ればいいか分からない」<br />「この構成でいいのか不安」<br />「生成した動画のどこを直せばいいか分からない」</blockquote>
              <p>と迷うこともあると思います。</p>
              <p>そこで、LINE登録後7日以内に制作する最初の動画1本について、内容や構成の相談を受け付けます。</p>
              <p>動画のテーマ、構成、冒頭の見せ方、ナレーション、テロップ、生成結果、完成動画の改善点など、迷った部分はLINEから相談してください。</p>
              <p className="font-bold text-zinc-950">作り方を知るだけで終わらず、実際に最初の1本を完成させるところまで進めてもらいたいと思っています。</p>
            </div>
            <aside className="mt-10 rounded-3xl bg-zinc-50 p-6 sm:p-8" aria-label="個別サポートの注意事項">
              <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                {supportNotes.map((note) => <li key={note}>※{note}</li>)}
              </ul>
            </aside>
          </Container>
        </section>

        <section className="bg-zinc-950 py-20 text-white sm:py-28">
          <Container size="text" className="text-center">
            <p className="mb-5 text-xs font-black tracking-[0.2em] text-emerald-400">START TODAY</p>
            <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">顔出しなしで、最初の一本を作ってみてください</h2>
            <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
              <p>私が遠回りして見つけた作り方を、あなたは最初から使えます。</p>
              <p>最初から完璧に理解する必要はありません。ガイドを見ながら同じ順番で進め、まずは一本、自分の動画を形にしてみてください。</p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <LineCta href={lineUrl} />
              <p className="mt-4 text-sm text-zinc-400">登録後、完全版ガイドのURLが自動で届きます</p>
              <p className="mt-1 text-xs text-zinc-500">追加料金はかかりません</p>
            </div>
          </Container>
        </section>
      </div>

      <footer className="border-t border-zinc-200 bg-white py-12">
        <Container size="text">
          <ul className="space-y-2 text-xs leading-6 text-zinc-500">
            {disclaimers.map((text) => <li key={text}>※{text}</li>)}
          </ul>
          <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-bold text-zinc-800">AI Video Guide</span>
            <span>© {new Date().getFullYear()} AI Video Guide</span>
          </div>
        </Container>
      </footer>
    </main>
  );
}
