---
name: scale-system
description: HP制作テンプレートのスケール方式(CSS変数 + min()/clamp())の詳細な計算式・命名規則・コード例。フォントサイズ/余白/幅/高さ/角丸/gapの実装時、またはuseDesignPxでJSにpxを渡す時に読み込む。
---

# スケール方式 詳細ガイド

CLAUDE.md に書いてある通り、すべての数値は「画面幅 1280px 時の px 値」を基準にし、CSS 変数 + `min()` / `clamp()` で縮小させる。ここでは具体的な書き方をまとめる。

## 基本形（min）

```tsx
// 最大 40px の文字サイズ
className="
  [--fs:40]
  text-[min(calc(100vw*var(--fs)/1280),calc(var(--fs)*1px))]
"
```

サイズを変えたいときは `[--fs:40]` の数値だけ変更する（計算式は触らない）。

## 最小値が必要な場合（clamp）

見出し・本文は、小さくなりすぎ防止のため `clamp()` を優先する。

```tsx
// 最小 24px・最大 40px の見出し
className="
  [--fs:40]
  text-[clamp(24px,calc(100vw*var(--fs)/1280),calc(var(--fs)*1px))]
"

// 最小 14px・最大 16px の本文
className="
  [--fs:16]
  text-[clamp(14px,calc(100vw*var(--fs)/1280),calc(var(--fs)*1px))]
"
```

## md: / lg: での上書き

計算式はブレイクポイントごとに重複して書かず、1 回だけ書いて CSS 変数だけ上書きする。

```tsx
// SP:20 / md:32 / lg:24
className="
  [--fs:20]
  md:[--fs:32]
  lg:[--fs:24]
  text-[clamp(16px,calc(100vw*var(--fs)/1280),calc(var(--fs)*1px))]
"
```

md だけ（768〜1023px）変えたい場合は `md:max-lg:` を使う。

```tsx
className="
  [--fs:20]
  md:max-lg:[--fs:32]
  lg:[--fs:24]
  text-[clamp(16px,calc(100vw*var(--fs)/1280),calc(var(--fs)*1px))]
"
```

## 余白・幅・高さ・角丸・gap

最小値が不要なものは `min()` で構わない。

```tsx
// 最大 64px の左右余白
className="
  [--px:64]
  px-[min(calc(100vw*var(--px)/1280),calc(var(--px)*1px))]
"

// SP:24 / md:40 / lg:64 の左右余白
className="
  [--px:24]
  md:[--px:40]
  lg:[--px:64]
  px-[min(calc(100vw*var(--px)/1280),calc(var(--px)*1px))]
"

// 最大 1000px の幅
className="
  [--w:1000]
  w-[min(calc(100vw*var(--w)/1280),calc(var(--w)*1px))]
"

// 最大 24px の角丸
className="
  [--radius:24]
  rounded-[min(calc(100vw*var(--radius)/1280),calc(var(--radius)*1px))]
"
```

## CSS 変数の命名ルール

| 用途 | 変数名 |
|---|---|
| フォントサイズ | `--fs` |
| 横幅 | `--w` |
| 高さ | `--h` |
| 左右余白 | `--px` |
| 上下余白 | `--py` |
| gap | `--gap` |
| 角丸 | `--radius` |
| top / left / right / bottom | `--top` / `--left` / `--right` / `--bottom` |

## Swiper など JS に px を渡す場合

CSS ではなく JavaScript に px 数値を渡す必要がある場合は `useDesignPx` を使う。
（`min(100vw*v/1280, v*1px)` と同じ縮小率で px を返す。）

```tsx
import { useDesignPx } from "@/lib/use-design-scale";

const space = useDesignPx(24); // 1280px 幅で 24px、狭い画面では縮小
```

## サンプル：セクションの className 全体構成

```tsx
<section
  className="
    [--px:24] [--py:48] [--gap:32]
    md:[--px:40] md:[--py:72] md:[--gap:40]
    lg:[--px:64] lg:[--py:96] lg:[--gap:48]
    relative mx-auto flex w-full max-w-[1280px] flex-col
    px-[min(calc(100vw*var(--px)/1280),calc(var(--px)*1px))]
    py-[min(calc(100vw*var(--py)/1280),calc(var(--py)*1px))]
    gap-[min(calc(100vw*var(--gap)/1280),calc(var(--gap)*1px))]
    md:flex-row md:items-center
  "
>
```
