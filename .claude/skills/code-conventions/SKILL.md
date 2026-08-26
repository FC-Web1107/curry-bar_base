---
name: code-conventions
description: HP制作テンプレートのコードの書き方・className並び順・コメントアウト・配列データ管理のルール。TSXコンポーネントを実装/編集する時に読み込む。
---

# コードの書き方 詳細ガイド

## 基本ルール

- TypeScript で記述する
- 関数コンポーネントで作成する
- コンポーネント名は PascalCase
- 配列データはコンポーネント上部に定義する
- 同じ HTML 構造の繰り返しは `map()` で管理する
- 複雑な三項演算子を JSX 内に直接書かない
- 不要な `div` を増やさない
- 命名は意味が分かるものにする
- 使っていない import / 変数 / 関数を残さない
- 同じ Tailwind 指定を何度も繰り返す場合は、データ化・コンポーネント化で整理する

## className の並び順

`className` は、ベース → `md:` → `lg:` を行ごとに分けて見やすくする。Tailwind の class は原則として以下の順番で並べる。

1. CSS 変数
2. position / z-index
3. display
4. flex / grid
5. width / height
6. margin / padding
7. border / radius
8. background
9. typography
10. shadow / opacity
11. transform / animation
12. responsive 指定

具体的な計算式の書き方は [[scale-system]] を参照。

## コメントアウト

「何の表示か」が分かるタイトルのみ残す。

```tsx
{/* 見出し */}
{/* 本文 */}
{/* メイン画像 */}
{/* CTAボタン */}
```

編集履歴・作業メモ（`{/* ここを修正しました */}` など）は残さない。

## データ管理

メニュー・特徴・口コミ・FAQ・流れなど、同じ構造の繰り返しは配列データで管理し、`map()` で表示する。

```tsx
const features = [
  { title: "特徴タイトル", text: "本文。", image: "/Feature/1.png", alt: "特徴を説明する画像" },
  { title: "特徴タイトル", text: "本文。", image: "/Feature/2.png", alt: "特徴を説明する画像" },
];
```

```tsx
{features.map((feature) => (
  <article key={feature.title}>{/* ... */}</article>
))}
```
