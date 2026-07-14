# AI Video Guide LP

Instagramから訪れたユーザーに、顔出し・撮影・専門スキルなしで始められるAI動画制作の可能性を伝え、LINE公式アカウントへの登録につなげる1ページ構成のランディングページです。

実績、よくある悩み、AI動画で可能になること、無料公開の理由、登録特典、7日間の個別サポートを、モバイルファーストで読みやすく構成しています。

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

品質確認には次のコマンドを使います。

```bash
npm run lint
npm run build
```

## LINE登録URLの設定

すべてのLINE登録ボタンは、環境変数 `NEXT_PUBLIC_LINE_URL` を参照します。未設定時は `#` になります。

`.env.example` をコピーして `.env.local` を作成し、実際のLINE公式アカウントURLへ変更してください。

```bash
NEXT_PUBLIC_LINE_URL=https://line.me/R/ti/p/XXXXXXXX
```

変更後は開発サーバーを再起動してください。Vercelでは、プロジェクトの「Settings」→「Environment Variables」に同じ名前と値を登録して再デプロイします。

## 画像・動画素材の差し替え

素材は `public/assets` に配置します。ファイルがない間は、用途と差し替え先が分かるCSSプレースホルダーが表示されます。実物を同じファイル名で配置し、再ビルドすると自動的に画像・動画へ切り替わります。

| ファイル | 用途 | 推奨仕様 |
| --- | --- | --- |
| `public/assets/hero-video.mp4` | ファーストビューのAI動画作例 | 縦型 1080×1350px または 1080×1920px、H.264、10MB以下推奨 |
| `public/assets/hero-poster.webp` | ファーストビュー動画のポスター | 動画と同じ縦横比、幅1080px程度 |
| `public/assets/instagram-insight.webp` | 実際のInstagramインサイト画像 | 1600×900px程度、個人情報を確認して掲載 |
| `public/assets/sample-video.mp4` | AI動画作例 | 縦型 1080×1350px または 1080×1920px、H.264、10MB以下推奨 |
| `public/assets/sample-poster.webp` | 作例動画のポスター | 動画と同じ縦横比、幅1080px程度 |
| `public/assets/og-image.webp` | SNSシェア時のOG画像 | 1200×630px |

動画には `controls`、`muted`、`loop`、`playsInline`、`preload="metadata"` を設定しています。架空のInstagram画面や偽の実績グラフは使用していません。

## 主な編集ファイル

- `app/page.tsx`: ページ内の文章、実績数値、カード、注意事項
- `app/globals.css`: 全体の色、文字、余白、長文の読みやすさ
- `app/layout.tsx`: タイトル、説明文、OGP、robots設定
- `components/LineCta.tsx`: LINE登録ボタンの見た目とアクセシビリティ
- `components/PlaceholderMedia.tsx`: 画像・動画とプレースホルダーの切り替え
- `.env.local`: LINE登録URL（Git管理対象外）

## Vercelへの公開

1. このリポジトリをVercelへインポートします。
2. Framework Presetが「Next.js」になっていることを確認します。
3. Environment Variablesへ `NEXT_PUBLIC_LINE_URL` を登録します。
4. Deployを実行します。
5. 公開後、LINE登録ボタン、OG画像、実績画像、動画を実機で確認します。

公開後にLINE URLだけを変更する場合も、Vercelの環境変数を更新して再デプロイしてください。

## 注意

実績数値は本人申告の運用実績として表示しています。公開前に実際の数値、LINE URL、画像内の個人情報、利用サービスの規約を確認してください。
