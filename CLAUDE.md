# HP制作テンプレート 制作ルール

## 0. このファイルの目的

このプロジェクトでは、Figmaで作成されたWebデザインを以下の技術構成で実装する。

- Next.js App Router（14）/ React（18）/ TypeScript / Tailwind CSS（v3）

最優先事項は、次の2点とする。

1. **Figmaデザインを可能な限り正確に再現すること**
2. **後から見ても理解しやすく、修正・保守しやすいコードにすること**

作業開始前に必ずこの `CLAUDE.md` を読み、記載されたルールをすべて守ること。
`.claude/skills/` 配下のスキルとこのファイルの内容が矛盾する場合は、**このファイルを優先する**。

デザインがPDF等で共有された場合も、基準幅・スケール方式などは本ファイルと同じルールで実装する。

---

## 1. 使用技術（テンプレートに設定済み）

- Node.js / Next.js App Router（14）/ React（18）/ TypeScript / Tailwind CSS（v3）
- shadcn/ui（設定済み）/ react-icons / framer-motion / swiper

ルール:

- スタイリングは原則 Tailwind CSS で実装する
- 通常のCSSファイルやCSS Modulesは、原則として追加しない
- `globals.css` は、リセット・フォント変数・全体共通設定など最小限の記述に限定する
- 不要なライブラリを勝手に追加しない
- `!important` は使用しない
- インラインstyleは、動的な値が必要な場合を除いて使用しない

---

## 2. 案件開始時の前提

案件ごとに、原則として以下のFigmaデザインが渡される。

- **PCデザイン：幅 1280px**
- **SPデザイン：幅 390px**

どちらがPC用・SP用かはデザイン共有時に明示される。
Figmaに限らず、デザインが画像・PDF等で渡される場合も、PC用（1280px）かSP用（390px）かが伝えられる。

- 共有されたデザインがPC用かSP用か明示されていない場合は、見た目や縦横比から**推測せず、必ず確認してから**実装する
- `md` 未満（〜767px）は、幅390pxのSPデザインを基準にする
- `md` 以上（768px〜）は、幅1280pxのPCデザインを基準にする
- 390pxと1280pxの間の画面幅でも、レイアウトが破綻しないように調整する
- 幅390pxと幅1280pxでは、余白・文字サイズ・行間・画像比率・配置・装飾をFigmaと可能な限り一致させる
- Figmaにない要素や表現を、独自判断で追加しない
- 不足している画像・文言・リンク先などは勝手に確定せず、仮データまたは `TODO` として明示する

---

## 3. Figmaの数値・素材の取得方法（正確な再現の要）

デザインの数値・色・素材は、**スクリーンショットからの目測や感覚で決めない**。
FigmaのMCPツールを使い、Figma上の正確な値を取得して実装する。

| 目的 | 使うツール |
|---|---|
| サイズ・余白・色・行間・字間・角丸などの数値取得 | `get_design_context` |
| カラー変数・デザイントークンの確認 | `get_variable_defs` |
| ページ・セクションのノード構成の把握 | `get_metadata` |
| 見た目の確認・実装後の比較用スクリーンショット | `get_screenshot` |
| 写真・イラスト・ロゴなど画像素材の書き出し | `download_assets` |

ルール:

- 数値は必ずFigmaから取得し、目測で「だいたい32pxくらい」と決めない
- 実装前にPC・SP両方のデザインを確認し、差分（構成・トリミング・順序）を把握する
- 実装後は `get_screenshot` で取得した画像とブラウザ表示を並べて比較する
- FigmaのURLやノードが共有されていない・MCPで取得できない場合は、推測で進めず確認する

---

## 4. デザイン再現の優先順位

実装時は、以下の順番でデザインを確認する。

1. セクション構成
2. コンテンツの表示順
3. レイアウト
4. 横幅と高さ
5. 余白
6. 画像サイズとトリミング
7. フォント
8. 文字サイズ
9. 文字の太さ
10. 行間
11. 文字間
12. 色
13. 角丸
14. 枠線
15. 影
16. 背景
17. 装飾
18. ホバー・スクロール・表示アニメーション

見た目が近いだけの実装ではなく、Figma上の数値・比率・整列・余白の意図を確認して実装すること。

---

## 5. サイズ指定ルール（スケール方式・最重要）

すべてのサイズは「Figma上のpx値」をCSS変数に入れ、**固定の計算式**で画面幅に応じて縮小させる。
`html` の `font-size` は16px固定。remベースのスケールには依存しない。

### 基本変数

| 用途 | 変数名 |
|---|---|
| 基準となるFigma幅 | `--base` |
| font-size | `--fs` |
| width | `--w` |
| height | `--h` |
| 左右padding | `--px` |
| 上下padding | `--py` |
| gap | `--gap` |
| border-radius | `--radius` |
| 位置・余白（上下左右） | `--top` / `--right` / `--bottom` / `--left` |

### `--base` はセクションのルートに1回だけ設定する

CSS変数は子要素に継承されるため、`--base` は各セクションのルート要素で1回だけ宣言し、子要素では再宣言しない。

```tsx
<section className="[--base:390] md:[--base:1280] ...">
  {/* この中の要素はすべて var(--base) を継承して使える */}
</section>
```

### 文字サイズ（標準の計算式）

```tsx
<h2
  className="
    [--fs:28] md:[--fs:48]
    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
  "
>
  見出し
</h2>
```

- 第1引数の `min(16px,calc(var(--fs)*1px))` により:
  - 通常のテキストは、画面が狭くなっても**16px未満に縮小されない**
  - Figma上の値自体が16px未満の注釈などは、そのFigma値のまま固定され、それ以上縮小されない
    （`clamp()` の最小値が最大値を上回って壊れることを防ぐ）

### 幅・高さ・余白・gap・角丸（最小値が不要なもの）

```tsx
w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
```

### ブレークポイント別の変更

計算式は1回だけ書き、`md:` / `lg:` では**CSS変数の数値だけ**を上書きする。

```tsx
<p
  className="
    [--fs:16] md:[--fs:20] lg:[--fs:18]
    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
  "
>
  本文
</p>
```

### セクション全体の例

```tsx
<section
  className="
    [--base:390] md:[--base:1280]
    [--py:64] md:[--py:120]
    w-full
    py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
  "
>
  <div
    className="
      [--px:20] md:[--px:64]
      [--gap:24] md:[--gap:40]
      mx-auto flex w-full max-w-[1280px] flex-col
      gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
      px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
    "
  >
    ...
  </div>
</section>
```

### 禁止

- `text-[min(2.5vw,32px)]` のように vw を手計算する
- 同じ計算式をブレークポイントごとに重複して書く
- 固定pxだけで画面全体を組む（横スクロール・SP崩れの原因になる）

### JSにpx値を渡す場合

Swiperの `spaceBetween` など、JavaScriptにpx数値を渡す必要がある場合は `useDesignPx`（`lib/use-design-scale.ts`）を使う。
※ 現状は1280px基準のヘルパーのため、SP基準の値が必要な場合は換算に注意する。

---

## 6. レスポンシブの基本原則

- **横スクロールを発生させない**（最優先で確認する）
- 固定pxだけで画面全体を組まない
- 画面幅に応じて、Figma上の比率を維持しながら拡大・縮小する
- コンテンツ・通常画像・テキスト・ボタンなどは、原則として1280px相当を最大値とする
- 画面幅が1280pxを超えても、背景以外の要素は拡大し続けない
- 画面幅が狭くなっても、テキストは16px未満にしない（Figma値が16px未満の場合はそのFigma値を下限とする）
- 画像は、内容を判別できなくなるほど小さくしない。見づらくなる場合は、単純縮小ではなくSP用画像・トリミング変更・縦積み・最小幅の設定などで対応する
- 高さを固定しすぎず、`aspect-ratio` / `min-height` / 内容依存の高さを優先する
- `100vw` の多用を避け、通常は `w-full` を使用する
- 要素の順番が変わる場合は `order-*`、カラム数の変化は `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` のように管理する
- PCだけ整えてSPを崩れたままにしない

---

## 7. 1280pxを超える画面の処理

背景以外の主要コンテンツは、幅1280pxを最大とする。

```tsx
<section className="w-full">{/* 背景色・背景画像はこちら */}
  <div className="mx-auto w-full max-w-[1280px]">
    {/* テキスト・画像・カード・ボタンはこちら */}
  </div>
</section>
```

- 背景色・画面幅いっぱいの背景画像は、外側の `section` に設定する
- テキスト・通常画像・イラスト・カード・ボタンは、内側の `max-w-[1280px]` に配置する
- 1920pxなどの広い画面でも、通常コンテンツを1280px以上に引き伸ばさない
- Figma上で背景として扱われている画像のみ、必要に応じて画面端まで拡張する
- 1280pxを超える画面では、コンテンツを中央配置する

---

## 8. `position: absolute` の禁止

`position: absolute` は使用しない。

### 代替手段

- Flexbox / CSS Grid
- **Gridの同一セルへの重ね配置**（要素を重ねる場合の第一候補）
- `gap` / `margin` / `padding` / 負のmargin
- `transform`
- CSS背景画像
- `sticky`
- `aspect-ratio`

Figmaの見た目を再現するために `absolute` が必要に見える場合も、まずGrid・Flexbox・背景画像・余白設計で再現できないか検討する。
`next/image` の `fill` も内部で `absolute` になるため使用しない（→ セクション12）。

---

## 9. フォント

フォントは、原則としてGoogle Fontsを使用する。

- `next/font/google` を使用して読み込む（CSSの `@import` は使用しない）
- Figmaで使用されているフォントとウェイトを確認し、**使用するウェイトをすべて明示**して読み込む
- フォントが指定されていない場合は、デザインの印象に近いGoogle Fontsを選び、選定内容を報告する
- `line-height: normal` に依存せず、行間を明示する
- テキストに固定高さを設定しない
- フォント読み込み前後でレイアウトが大きく変わらないようにする（`display: "swap"`）

```tsx
import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});
```

---

## 10. 画像・イラストの取得

### 優先順位

1. **Figmaから書き出した素材**（`download_assets`）を使用する
2. クライアント・担当者から**支給された正式素材**を使用する
3. 取得・特定できない場合のみ **`/no-image.png`** を使用する

Figmaから保存できるにもかかわらず、`no-image.png` や独自プレースホルダーで代用してはならない。

### Figmaからの書き出しルール

- 保存可能な写真・画像・イラスト・ロゴ・画像アイコンは、必ず書き出して使用する
- 複数レイヤーで構成されていても、一つの素材として扱うべきものは適切な単位で書き出す
- PC用とSP用で構図・トリミング・比率が異なる場合は、別ファイルとして書き出す
- 写真は原則WebPを優先する
- 透過が必要な画像はPNG / WebP / SVGを使用する
- ロゴ・単色アイコン・ベクターイラストは、正しく書き出せる場合はSVGを優先する
- SVGに不要な編集情報・埋め込みフォント・巨大なキャンバスが含まれていないか確認する
- 書き出し後は、Figma上の縦横比・トリミング・角丸・配置を再現する
- 元画像の解像度を超える過度な拡大を避ける

### `no-image.png` を使用する場合

以下の場合は、`public` 直下にある共通の `no-image.png` を使用する。

- Figmaから画像を保存できない／画像レイヤーを特定できない
- 元画像にアクセスできない／書き出し権限がない
- 画像がスクリーンショット内にしか存在せず、正しく抽出できない
- 支給予定だが、まだ正式素材が届いていない

```tsx
<Image
  src="/no-image.png"
  alt="画像準備中"
  width={1280}
  height={720}
  className="h-full w-full object-cover"
/>
```

装飾目的の場合は `alt=""`、意味のある画像の代替の場合は `alt="画像準備中"` のように未設定であることが分かるaltにする。
`no-image.png` を使用した箇所は、正式画像へ差し替えやすい構造にする。

### 禁止

- 類似画像をWeb検索して勝手に使用する
- AIで類似画像・イラストを生成して勝手に使用する
- 人物や写真をCSSで疑似的に描画する／取得できない画像を推測でトレースする
- `no-image-01.png` `dummy-image.png` など、`no-image.png` 以外の代替画像を新しく作る
- `no-image.png` を各セクションフォルダへ複製する
- 外部URLの画像を直接参照する
- 出典や利用権限が不明な素材を使用する

---

## 11. 画像ディレクトリの管理

画像はページ・セクション単位でディレクトリを分けて管理する。
すべての画像を一つのフォルダへまとめて保存してはならない。

```text
public/
  no-image.png            ← 共通の代替画像。public直下に一つだけ

  main/                   ← トップページ
    fv/
      main-visual-pc.webp
      main-visual-sp.webp
    concept/
      concept-image.webp
    service/
      service-image-01.webp
      service-image-02.webp

  about/                  ← サブページ（URLパス名と一致させる）
    fv/
      about-fv-pc.webp
      about-fv-sp.webp
    message/
      representative-image.webp
```

### 命名ルール

- トップページは `public/main/セクション名/`、サブページは `public/サブページ名/セクション名/`
- サブページ名は、原則としてURLのパス名と一致させる
- ディレクトリ名・ファイル名は、すべて**小文字のケバブケース**にする
- ファイル名は用途が分かる名称にする（`image1.webp` `img02.png` は禁止）
- PC用には `-pc`、SP用には `-sp` を付ける
- 同じ用途の連番画像には `-01` `-02` のように番号を付ける

---

## 12. `next/image` の実装

- 通常画像には、原則 `next/image` の `Image` を使用する
- `width` と `height` を明示するか、画像比率を維持できる構造にする
- **`fill` は使用しない**（内部で `position: absolute` になり、absolute禁止ルールに抵触するため）
- Figmaのトリミングに合わせて `object-cover` / `object-contain` を使い分ける
- 画像表示領域には、可能な限り `aspect-ratio` を指定する
- 意味のある画像には適切な `alt` を設定し、装飾目的の画像は `alt=""` とする
- ファーストビューの画像には `priority` を付ける
- 外部画像URLを使用せず、`public` 配下のローカル画像を参照する

### PC・SP画像の切り替え

```tsx
<div>
  <Image
    src="/main/fv/main-visual-pc.webp"
    alt=""
    width={1280}
    height={720}
    className="hidden h-auto w-full md:block"
    priority
  />
  <Image
    src="/main/fv/main-visual-sp.webp"
    alt=""
    width={390}
    height={560}
    className="h-auto w-full md:hidden"
    priority
  />
</div>
```

---

## 13. 背景画像・装飾線

### 背景画像

- Figma上の背景画像は、保存できる場合は書き出して使用し、できない場合は背景領域に `/no-image.png` を使用する
- 背景画像の表示領域・縦横比・余白・画面端までの広がり方をFigmaと一致させる
- 背景は外側の `section`、背景上のコンテンツは内側の `max-w-[1280px]` に配置する
- 背景上にコンテンツを重ねる場合も `absolute` は使用せず、**Gridの同一セル配置**・背景指定・セクション構造で再現する
- PCとSPで背景の比率・構図が異なる場合は、表示領域・高さ・比率を切り替える

### 直線・波線・曲線

Figma内の直線・区切り線・波線・曲線・下線・囲み線は、**画像として書き出さず、コードで再現する**。

- 単純な直線：`border`、幅と高さを持つ要素、またはCSSグラデーション
- 点線・破線：`border-dashed` / `border-dotted`
- 波線・複雑な曲線：インラインSVGの `path`
- Figma上の線幅・長さ・色・透明度・角度・波の周期を可能な限り再現する
- 線の色は、可能な限り `currentColor` またはCSS変数で管理する
- SVGは `viewBox` と外側のクラスでサイズ調整できるようにし、固定サイズを持たせない
- 装飾目的のSVGには `aria-hidden="true"` を設定する
- 線の配置にも `absolute` は使用しない（Grid・Flexbox・margin・transform・同一セル重ねで調整）

```tsx
{/* 直線 */}
<div aria-hidden="true" className="h-px w-full bg-current opacity-30" />

{/* 波線（viewBox と path はFigmaの曲線に合わせて調整する） */}
<svg
  aria-hidden="true"
  viewBox="0 0 1200 40"
  preserveAspectRatio="none"
  className="h-auto w-full"
  fill="none"
>
  <path
    d="M0 20C100 0 200 40 300 20C400 0 500 40 600 20C700 0 800 40 900 20C1000 0 1100 40 1200 20"
    stroke="currentColor"
    strokeWidth="2"
    vectorEffect="non-scaling-stroke"
  />
</svg>
```

---

## 14. コンポーネント設計

- ページをセクション単位でコンポーネント化する
- `app/page.tsx` は、原則として各セクションを順番に並べるだけにする
- 同じUIが複数回使われる場合は共通コンポーネント化する
- 一度しか使わない小さな要素を過度に分割しない（再利用性より可読性・修正しやすさを優先）
- propsの型を必ず定義する／`any` は使用しない
- イベント処理・ブラウザAPI・状態管理が必要な場合のみ `"use client"` を付ける

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
    site-header.tsx
    site-footer.tsx
  sections/
    fv-section.tsx
    about-section.tsx
    service-section.tsx
    contact-section.tsx
  ui/
    primary-button.tsx
    section-heading.tsx

public/
  no-image.png
  main/
    fv/
    about/
    service/
```

---

## 15. 命名規則

- ディレクトリ名・ファイル名は、すべて**小文字のケバブケース**にする（大文字・スネークケース・スペース・日本語は禁止）
- ファイル名だけで用途が分かる名称にする
- Reactコンポーネントの識別子は、TypeScriptの慣例に従いPascalCaseを使用してよい

```text
✅ site-header.tsx / main-visual-pc.webp / contact-form.tsx
❌ SiteHeader.tsx / main_visual.webp / お問い合わせ.tsx
```

```tsx
// ファイル名は site-header.tsx、識別子は PascalCase
export function SiteHeader() {
  return <header>...</header>;
}
```

---

## 16. リンク実装

- サイト内のページ遷移・アンカーリンクには、必ず `next/link` の `Link` を使用する
- 内部ページへの遷移に直接 `<a>` を使用しない（本番ビルド後の遷移が不安定になるため）
- 外部サイト・`mailto:`・`tel:`・ファイルダウンロードは `<a>` を使用する

```tsx
import Link from "next/link";

<Link href="/about">私たちについて</Link>
<Link href="#contact">お問い合わせ</Link>

<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  外部サイト
</a>
<a href="tel:0000000000">電話をかける</a>
```

---

## 17. レイアウトの安定性

Mac / Windows、Chrome / Safariで見た目が大きく崩れないようにする。

- `box-sizing: border-box`・`overflow-x: clip`・`font-size: 16px` 固定は `globals.css` に設定済み
- テキスト要素に固定の高さを設定しない
- Flexbox / Gridの子要素には、必要に応じて `min-w-0` を設定する
- 長文で崩れる可能性がある箇所は、折り返しを確認する
- `whitespace-nowrap` を多用しない
- 見出しの改行位置がデザイン上重要な場合は、PC・SPを考慮して `<br />` を使用する
- フォントのウェイトと行間を明示する
- ブラウザ標準のフォームデザインに依存しない
- スクロールバーの有無でレイアウト幅が変わらないようにする
- 横スクロールが発生していないことを確認する

---

## 18. アニメーション

アニメーションは、**Figmaまたは案件指示にある場合のみ**実装する。

- アニメーションを独自判断で追加しない
- 見やすさを損なう過度な動き・レイアウトを崩す動きを付けない
- `transform` と `opacity` を中心に実装する
- `prefers-reduced-motion` を考慮する
- スクロールアニメーションは、表示位置のズレや初期ちらつきがないようにする
- Swiper使用時は、フォント・画像読み込み後のサイズ変化を確認する

---

## 19. アクセシビリティ

- 見出しレベル（h1 → h2 → h3）を順番に使用する
- クリック可能な要素は、`button` / `Link` / `a` を用途に応じて正しく使う（`div` にクリックイベントだけを付けない）
- 画像に適切な `alt` を設定する（`alt="画像"` のような意味のないaltは禁止）
- フォームには `label` を設定する
- キーボード操作ができ、フォーカス表示を完全に消さない
- 文字と背景のコントラストを確保する
- テキストを画像化しない／文章を勝手に変更しない

---

## 20. 実装手順

### 1. 既存プロジェクトの確認

`package.json` / `app/` / `components/` / `public/` / Tailwind設定 / 既存フォント・ライブラリ・命名規則・共通コンポーネントを確認する。
既存の意図が分からないコードを安易に削除しない。

### 2. Figmaデザインの確認（MCPで取得）

PC 1280px / SP 390px の両方について、フォント・ウェイト・色・画像・余白・セクション順・リンク先・アニメーション・PCとSPの差分を確認する。

### 3. 実装計画

実装前に以下を整理する。

- 作成するセクション・コンポーネント
- Figmaから書き出す画像・イラスト・背景画像（`download_assets`）
- `/no-image.png` を使用する領域
- コードで再現する直線・波線・曲線
- PC・SPで切り替える要素／共通化するUI
- 不足している情報

### 4. 実装

- セクション単位で作成し、途中で画面幅を確認しながら進める
- 1280pxと390pxのFigmaを基準にする
- 本ファイルのスケール方式・absolute禁止・`Link`・命名規則・画像ルールに従う

### 5. 検証

最低限、以下の画面幅で確認する。

**390px / 768px / 1024px / 1280px / 1440px / 1920px**

- 特に **390pxと1280pxでは、Figmaのスクリーンショットと並べて比較**する
- 各幅で横スクロールが発生していないことを確認する

---

## 21. 完了前の確認項目

### デザイン

- [ ] 幅1280pxでPCデザイン、幅390pxでSPデザインと一致している
- [ ] セクション順・余白・文字サイズ・行間・ウェイト・色が正しい
- [ ] 画像の縦横比・トリミング・角丸がFigmaと一致している
- [ ] 背景の表示領域と広がり方がFigmaと一致している
- [ ] 直線・波線・曲線が画像ではなくコードで再現され、線幅・色・形状が一致している
- [ ] 1280px以上で通常コンテンツが拡大していない
- [ ] テキストが16px未満（Figma値が16px未満の場合はFigma値未満）になっていない
- [ ] 画像が判別できないほど縮小されていない

### コード

- [ ] `absolute`・`fill` を使用していない
- [ ] Figmaから保存可能な素材を実ファイルで反映し、取得できない画像のみ `/no-image.png` を使用している
- [ ] 画像がページ・セクション単位のディレクトリで管理されている
- [ ] 内部リンクに `Link` を使用している
- [ ] ファイル名・ディレクトリ名が小文字のケバブケースになっている
- [ ] `any`・不要な `"use client"`・不要なライブラリがない
- [ ] `app/page.tsx` に全実装を詰め込んでいない
- [ ] スケール方式の計算式が重複しておらず、CSS変数の上書きだけでサイズ調整できる
- [ ] 横スクロールが発生していない／コンソールエラーがない

### ビルド

以下を実行し、エラーがないことを確認する。

```bash
npm run lint
npm run build
```

---

## 22. 作業完了時の報告

作業完了時は、以下を簡潔に報告する。

1. 実装した内容／作成・変更したファイル
2. PC・SPで切り替えた要素
3. 使用したフォント
4. Figmaから書き出して反映した画像・イラストと保存先ディレクトリ
5. `/no-image.png` を使用した箇所
6. CSSまたはSVGで再現した直線・波線・曲線
7. 仮文言・未確定リンク
8. Figmaとの差異が残っている箇所
9. `npm run lint` / `npm run build` の結果

問題を隠さず、未完了箇所や確認が必要な箇所を明示すること。

---

## 23. 最重要禁止事項

- Figmaにない要素を独自判断で追加する
- Figma確認なしで余白やサイズを感覚的に決める
- Figmaから保存可能な素材を保存せずに代替画像で済ませる
- 取得・トレースできない画像を推測で再現する／AI生成・Web検索画像で代用する
- `no-image.png` 以外の代替画像を作成する／`no-image.png` を複製する
- 画像を一つのフォルダへまとめて保存する
- 直線・波線・曲線を画像ファイルとして実装する
- `position: absolute`・`next/image` の `fill` を使用する
- 内部リンクに直接 `<a>` を使用する
- ファイル名・ディレクトリ名に大文字を使用する
- 1ファイルにページ全体を詰め込む
- `any` を使用する／不要なClient Component化
- テキストを16px未満に縮小する（Figma値が16px未満の場合を除く）
- 通常コンテンツを1280px以上に拡大する
- `!important` を使用する／不要なライブラリを追加する
- エラーを残したまま完了扱いにする

---

## 24. 最終原則

迷った場合は、以下を優先する。

1. Figmaの再現性
2. ユーザーの明示指示
3. この `CLAUDE.md`
4. 可読性
5. 保守性
6. レスポンシブの安定性
7. 実装の簡潔さ

見た目を合わせるためだけに、保守できないコードを作らない。
保守性を理由に、Figmaの再現を大きく崩さない。
デザイン再現と保守性の両方を満たす構造を選択すること。
