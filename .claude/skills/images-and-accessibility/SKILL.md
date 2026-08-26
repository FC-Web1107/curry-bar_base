---
name: images-and-accessibility
description: HP制作テンプレートの画像(next/image・パス命名・sizes・alt)とテキスト/アクセシビリティのルール。画像やテキストを配置する時、alt属性を書く時に読み込む。
---

# 画像・テキスト・アクセシビリティ 詳細ガイド

## 画像のルール

画像は原則 `next/image` を使用し、仮の画像パスを `/セクション名/番号.png` 形式で設定する。

```tsx
import Image from "next/image";

{/* メイン画像 */}
<Image
  src="/Hero/1.png"
  alt="自然光が入る落ち着いたサロン空間"
  width={1280}
  height={720}
  className="h-auto w-full object-cover"
  sizes="100vw"
/>
```

### 画像パスの命名

- セクション名フォルダを作る（`public/Hero/`、`public/Concept/` …）。フォルダ名はコンポーネント名（[[component-structure]]）と一致させる
- 画像は表示順に `1.png`, `2.png`, `3.png`
- 背景画像も同じルールで管理する

```txt
/Hero/1.png
/Concept/1.png
/Concept/2.png
/Menu/1.png
```

### sizes

- 画面幅いっぱい：`sizes="100vw"`
- カード内：`sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"`

### alt

- 内容が分かる説明を入れる（`alt="施術前にカウンセリングを受けている女性"`）
- `alt="画像"` `alt="img"` `alt="photo"` のような意味のない alt は禁止
- 装飾目的で意味を持たない画像のみ `alt=""`

## テキスト

- 勝手に文章を変更しない / 改行位置もデザインに近づける
- 見出し・本文・注釈・ボタン文言を分けて管理する
- 日本語に不自然なスペースを入れない（英数字と日本語の間はデザインに合わせる）
- 強調文字は太字・色・サイズ差で再現する
- テキストを画像化しない

## アクセシビリティ

- 画像に適切な alt を設定する（装飾目的のみ `alt=""`）
- ボタン・リンクは意味のあるテキストにする
- 見出し階層は h1 → h2 → h3 の順序を意識する
- クリック要素は `button` / `a` を適切に使い分ける（見た目だけで使い分けない）
- テキストを画像化しない
