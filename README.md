# Next.js テンプレート

Next.js + React + TypeScript + Tailwind CSS + shadcn/ui + react-icons + Framer Motion の最小構成テンプレートです。

## このテンプレートについて

このリポジトリは GitHub Template Repository として公開されています。新しいプロジェクトを開始する際に、このテンプレートを使用してリポジトリを作成できます。

### Template Repositoryから作成する方法

1. このリポジトリのページで「Use this template」ボタンをクリック
2. 新しいリポジトリ名を入力
3. 「Create repository from template」をクリック

## 技術スタック

- **Next.js 14** - React フレームワーク
- **React 18** - UI ライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **shadcn/ui** - 再利用可能なコンポーネント
- **react-icons** - アイコンライブラリ
- **Framer Motion** - アニメーションライブラリ

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザでターミナルに表示されたLocal URL（通常 [http://localhost:3000](http://localhost:3000)）を開く

## 制作プロンプト（CLAUDE.md）の説明

このテンプレートの中核は、リポジトリ直下の [`CLAUDE.md`](./CLAUDE.md) です。
Claude Code がセッション開始時に自動で読み込む「制作ルールのプロンプト」で、**Figmaデザインの正確な再現**と**保守しやすいコード**の両立を目的に設計しています。

### 全体設計の考え方

AI実装で起きがちな失敗を想定し、それを防ぐ仕組みを4つの層に分けて定義しています。

| 層 | 防ぎたい失敗 | 仕組み |
|---|---|---|
| 1. 入力の正確性 | 目測・推測でサイズや色を決める | 数値・素材はFigma MCP（`get_design_context` / `download_assets` 等）から実測取得。不明点は推測せず確認 |
| 2. 出力の一貫性 | 実装のたびに書き方がブレる・レイアウトが破綻する | サイズは全箇所共通の「スケール方式」計算式。`absolute` 禁止・二層構造などの構造制約で破綻パターン自体を排除 |
| 3. 検証の強制 | PCだけ整えて完了扱いにする | 6画面幅チェック・Figmaスクリーンショット比較・lint / build・チェックリスト・報告フォーマット |
| 4. 判断の優先順位 | ルール同士が衝突したとき勝手に解釈する | 「Figma再現 > ユーザー指示 > CLAUDE.md > 可読性 > 保守性…」の優先順位を明文化 |

### 前提：2つの基準幅

- **PCデザイン = 幅1280px / SPデザイン = 幅390px** の2枚を基準にする
- `md`（768px）未満はSPデザイン、以上はPCデザインを基準に実装する
- デザインを共有するとき（Figma・画像・PDFいずれも）に **PC用かSP用かを明示する運用**。明示がない場合、AIは推測せず必ず確認する

### スケール方式（サイズ再現の中核）

「Figma上のpx値」をCSS変数に入れ、固定の計算式で画面幅に応じて縮小させます。

```
実際のサイズ = min( 100vw × Figma値 ÷ 基準幅, Figma値px )
```

- 基準幅ちょうど（390px / 1280px）では **Figmaの数値と完全一致**する
- それより狭い画面では **等比で縮小**し、広い画面では **それ以上拡大しない**
- 基準幅は CSS変数 `--base` で持ち、セクションのルートに1回だけ `[--base:390] md:[--base:1280]` と宣言する（子要素へ継承される）

```tsx
<section className="[--base:390] md:[--base:1280]">
  <h2
    className="
      [--fs:28] md:[--fs:48]
      text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
    "
  >
    SPで28px・PCで48pxの見出し
  </h2>
</section>
```

この方式にしている理由:

- **計算式が全箇所で同一文字列**になるため、AIの出力が安定し、レビューは `[--fs:28]` などの数値だけ見ればよい
- ブレークポイントでは計算式を書き直さず **CSS変数の数値だけ上書き**するので、修正箇所が最小になる
- 文字サイズは `clamp()` の第1引数 `min(16px, Figma値px)` により、通常テキストは**16px未満に縮小されない**。Figma値自体が16px未満の注釈などはそのFigma値で固定される（最小値が最大値を上回って `clamp()` が壊れるのを防ぐ）
- 余白・幅・高さ・gap・角丸など最小値が不要なものは `min()` のみの式を使う

Swiper など JavaScript にpx値を渡す場合は `useDesignPx`（`lib/use-design-scale.ts`）を使います（現状は1280px基準）。

### 構造の制約

- **`position: absolute` を全面禁止**。重ね表示はGridの同一セル配置・背景画像・余白設計で再現する（座標ズレ・要素の重なり事故を構造的に排除するため）
- `next/image` の `fill` も内部でabsoluteになるため禁止（`width` / `height` を明示する）
- 1280pxを超える画面は「外側 `section`（背景）＋内側 `max-w-[1280px]`（コンテンツ）」の二層構造で、背景だけ画面端まで広げる
- **横スクロールを発生させない**ことを最優先の確認事項とする

### 素材の扱い

- 優先順位：**Figmaから書き出した素材 → 支給された正式素材 → `/no-image.png`**
- `public/no-image.png` は「唯一の共通プレースホルダー」。これ以外の代替画像の作成・複製は禁止
- AI生成画像・Web検索画像・推測でのトレースは禁止（本番に紛れ込む事故を防ぐため）
- 直線・波線・曲線は画像にせず、CSS（border等）またはインラインSVGで再現する
- 画像は `public/main/セクション名/`（トップ）、`public/サブページ名/セクション名/`（下層）で管理する

### 保守性の規約

- ページはセクション単位でコンポーネント化し、`app/page.tsx` はセクションを並べるだけにする
- ファイル名・ディレクトリ名は小文字ケバブケース（コンポーネント識別子はPascalCase）
- 内部リンクは必ず `next/link` の `Link` を使用する
- `any` 禁止・不要な `"use client"` 禁止・不要なライブラリ追加禁止

### 検証と報告

- **390 / 768 / 1024 / 1280 / 1440 / 1920px** の6幅で確認し、特に390pxと1280pxはFigmaのスクリーンショットと並べて比較する
- `npm run lint` / `npm run build` をエラーなしで通す
- 完了時は「no-image使用箇所・仮文言・Figmaとの差異」など隠れやすい情報を必ず報告させるフォーマットを定義している

### 補助スキル（.claude/skills/）

作業フェーズ別の詳細ガイド（スケール方式・コンポーネント構成・コード規約・画像/アクセシビリティ・検証チェック）を配置しています。
**注意：現在スキルの一部は旧「1280px単一基準」のままで、CLAUDE.mdと未同期です。矛盾する場合はCLAUDE.mdを優先します。**

### 既知の未同期・今後ブラッシュアップしたい箇所

- `.claude/skills/` 配下5スキル … 旧1280px単一基準・PascalCaseファイル名・`/Hero/1.png` 式の画像パスのまま
- `lib/use-design-scale.ts` … `DESIGN_WIDTH = 1280` 固定（SP基準390pxに未対応）
- `components/sections/` の既存サンプル … `HeroSection.tsx` などPascalCaseファイル名のまま（新規則はケバブケース）
- `app/globals.css` 冒頭コメント … 旧方式の説明のまま

## プロジェクト構造

```
.
├── CLAUDE.md               # 制作ルールプロンプト（Claude Codeが自動で読み込む）
├── .claude/
│   └── skills/             # 作業別の詳細ガイド（※一部旧基準のまま。CLAUDE.md優先）
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ（セクションを並べるだけ）
│   └── globals.css         # グローバルスタイル
├── components/
│   └── sections/           # セクションコンポーネント
├── lib/
│   ├── use-design-scale.ts # JSにpx値を渡す用のスケールヘルパー（現状1280px基準）
│   └── utils.ts            # ユーティリティ関数
├── public/
│   └── no-image.png        # 共通プレースホルダー（唯一の代替画像）
├── components.json         # shadcn/ui 設定
├── tailwind.config.ts      # Tailwind CSS 設定
└── tsconfig.json           # TypeScript 設定
```

## 使用方法

### shadcn/ui コンポーネントの追加

```bash
npx shadcn-ui@latest add [component-name]
```

### react-icons の使用

```tsx
import { FiHeart } from "react-icons/fi"

<FiHeart className="h-4 w-4" />
```

### Framer Motion の使用

```tsx
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## ビルド

```bash
npm run build
npm start
```
