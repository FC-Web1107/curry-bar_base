---
name: component-structure
description: HP制作テンプレートのセクションコンポーネント構成・命名ルール。新しいセクションを追加する時やapp/page.tsxを組む時に読み込む。
---

# コンポーネント構成 詳細ガイド

## ディレクトリ構成

各セクションごとに `components/sections/` にコンポーネントを作成する。

```txt
components/
  sections/
    HeroSection.tsx
    ConceptSection.tsx
    FeatureSection.tsx
    MenuSection.tsx
    VoiceSection.tsx
    AccessSection.tsx
```

`app/page.tsx` では、各セクションコンポーネントを読み込んで並べるだけにする。

```tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ConceptSection />
    </main>
  );
}
```

- 1 つのファイルに全セクションをまとめない
- 同一セクション内だけで使う小さな要素は、そのセクションファイル内にまとめて構わない
- 1 つのコンポーネントに複数セクションの責務を持たせない
- 入れ子が深くなりすぎる場合は、小さな内部コンポーネントに分ける
- 既存コードがある場合は、構成を確認してから変更する
- 既存の意図が分からないコードを安易に削除しない

## セクション命名

内容が分かる英語名で統一し、画像フォルダ名（`public/セクション名/`）と一致させる。

```txt
HeroSection / IntroSection / ConceptSection / AboutSection / ProblemSection
FeatureSection / ReasonSection / ServiceSection / MenuSection / FlowSection
VoiceSection / FaqSection / AccessSection / CtaSection / FooterSection
```

例：`HeroSection → /Hero/1.png`、`FeatureSection → /Feature/1.png`
