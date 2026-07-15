# AI Video Guide LP

Instagramから訪れたユーザーへ、顔出し・撮影・専門スキルなしで始められるAI動画制作を伝え、LINE公式アカウントへの登録につなげるランディングページです。

2026年5月10日〜6月10日の1か月におけるInstagram運用実績（合計16,873,128再生、フォロワー以外99.1%、リーチ7,637,277）と実際のインサイト画像を提示し、完全版ガイドと最初の1本までの7日間サポートを案内します。

## 使用技術

- Next.js 16（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- npm

バックエンド、認証、データベースは使用していません。Vercelへそのまま公開できます。

## ローカル起動

Node.js 20.9以上を用意し、次のコマンドを実行してください。

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

品質確認：

```bash
npm run lint
npm run build
```

## LINE登録URLの設定

すべてのLINE登録ボタンは、環境変数 `NEXT_PUBLIC_LINE_URL` を参照します。未設定またはLINE公式ドメイン以外のURLの場合は、リンクを生成せず「LINE登録は現在準備中です」と表示します。

`.env.example` をコピーして `.env.local` を作成し、実際のLINE公式アカウントURLへ変更してください。

```env
NEXT_PUBLIC_LINE_URL=https://line.me/R/ti/p/XXXXXXXX
```

変更後は開発サーバーを再起動してください。Vercelでは、プロジェクトの「Settings」→「Environment Variables」に同じ名前と値を登録して再デプロイします。

## 使用素材

素材は `public/assets` に配置します。

| ファイル | 用途 | 仕様 |
| --- | --- | --- |
| `public/assets/hero-video.mp4` | ファーストビューのAI動画作例 | 1080×1920px、9:16、元画質を維持 |
| `public/assets/hero-poster.webp` | 動画の初期表示 | 1080×1920px、9:16 |
| `public/assets/instagram-insight.webp` | 実際のInstagramインサイト | 1206×1711px、数値と期間は未加工 |
| `public/assets/og-image.webp` | SNSシェア画像 | 1200×630px |

公開ページには不足素材用のプレースホルダーやファイルパスを表示しません。画像・動画を変更する場合は、同じファイル名と用途を保って差し替えてください。

## 主な編集ファイル

- `app/page.tsx`: ページ構成、文章、実績、FAQ、構造化データ
- `app/globals.css`: 色、フォント、セクション余白、共通スタイル
- `app/layout.tsx`: タイトル、説明文、canonical、OGP、robots
- `components/HeroVideo.tsx`: 動画再生と停止、motion設定
- `components/LineCta.tsx`: CTA文言、リンク属性、配置識別用データ属性
- `components/CheckList.tsx`: 登録特典一覧
- `.env.local`: LINE登録URL（Git管理対象外）

## Vercelへの公開

1. このリポジトリをVercelへインポートします。
2. Framework Presetが「Next.js」になっていることを確認します。
3. Environment Variablesへ `NEXT_PUBLIC_LINE_URL` を登録します。
4. Deployを実行します。
5. 公開後、LINE登録ボタン、動画、インサイト画像、OG画像を実機で確認します。

公開URL：<https://ai-video-guide-lp.vercel.app/>

## 表現上の注意

実績表現は「1か月で合計1,687万再生」を使用します。平均再生数は公開しているすべての動画から算出した数値として扱い、同じ再生数や成果を保証する表現は使用しません。
