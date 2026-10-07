import type { MenuItem } from "@/lib/menu-items";

// スケール方式の計算式（各要素は CSS 変数の値だけを指定する）
export const fontSizeClass =
  "text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]";
export const marginTopClass = "mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]";
export const widthClass = "w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]";

// メニューごとに異なる文字の値（支給PDF「Group 6〜10」から取得）。
// PDFのカード幅325ptを PC 408px / SP 340px に比率換算している（1024px（lg）未満は SP の値）。
// 使う側で [--base:390] lg:[--base:1280] を指定すること。
// - フォントサイズ・字間：PDFの文字の実寸（高さ・幅）から逆算
// - 余白：文字の上下端どうしの距離を再現
type MenuTextVars = {
  title: string;
  underline: string;
  subtitle: string;
  description: string;
};

const menuTextVars: Record<string, MenuTextVars> = {
  curry: {
    title: "[--fs:27.2] lg:[--fs:32.6] [--top:18.7] lg:[--top:22.5] tracking-[0.145em] -mr-[0.145em]",
    underline: "[--top:16.8] lg:[--top:20.1]",
    subtitle: "tracking-[0.12em] -mr-[0.12em]",
    description: "[--top:34.5] lg:[--top:41.4] tracking-[0.05em]",
  },
  "story-cocktail": {
    title: "[--fs:25.1] lg:[--fs:30.1] [--top:19.7] lg:[--top:23.6] tracking-[0.14em] -mr-[0.14em]",
    underline: "[--top:17.9] lg:[--top:21.5]",
    subtitle: "tracking-[0.08em] -mr-[0.08em]",
    description: "[--top:30.4] lg:[--top:36.5] tracking-[0.08em]",
  },
  "bar-selection": {
    title: "[--fs:25.1] lg:[--fs:30.1] [--top:19.7] lg:[--top:23.6] tracking-[0.14em] -mr-[0.14em]",
    underline: "[--top:17.9] lg:[--top:21.5]",
    subtitle: "tracking-[0.01em] -mr-[0.01em]",
    description: "[--top:30.4] lg:[--top:36.5] tracking-[0.1em]",
  },
  "gacha-bingo": {
    title: "[--fs:26.1] lg:[--fs:31.3] [--top:18.7] lg:[--top:22.5] tracking-[0.14em] -mr-[0.14em]",
    underline: "[--top:17.8] lg:[--top:21.3]",
    subtitle: "tracking-[-0.01em] mr-[0.01em]",
    description: "[--top:30.4] lg:[--top:36.5] tracking-[0.135em]",
  },
  "bar-con": {
    title: "[--fs:26.1] lg:[--fs:31.3] [--top:18.7] lg:[--top:22.5] tracking-[0.14em] -mr-[0.14em]",
    underline: "[--top:17.8] lg:[--top:21.3]",
    subtitle: "tracking-[0.08em] -mr-[0.08em]",
    description: "[--top:30.4] lg:[--top:36.5] tracking-[0.15em]",
  },
};

type MenuTextProps = {
  item: MenuItem;
  /** 見出しのタグ（トップのカードは h3、サブページは h1） */
  headingLevel: "h1" | "h3";
};

/**
 * メニューの番号・タイトル・下線・サブタイトル・説明文。
 * トップのカードとサブページで共通の見た目にする（親は中央ぞろえの縦並びにすること）。
 * 字間の分だけ右にずれるのを負のマージンで打ち消し、中央をそろえている。
 */
export function MenuText({ item, headingLevel: Heading }: MenuTextProps) {
  const vars = menuTextVars[item.slug];
  return (
    <>
      <p
        className={`
          [--fs:22] lg:[--fs:26.5]
          ${fontSizeClass} font-normal leading-none tracking-[0.46em] -mr-[0.46em] text-[#ca8e42]
        `}
      >
        {item.no}
      </p>
      <Heading className={`${marginTopClass} ${fontSizeClass} font-semibold leading-none ${vars.title}`}>
        {item.title}
      </Heading>
      {/* 飾り下線 */}
      <span
        aria-hidden="true"
        className={`[--w:84.2] lg:[--w:101] ${marginTopClass} ${widthClass} h-px bg-white ${vars.underline}`}
      />
      <p
        className={`
          [--fs:16.7] lg:[--fs:20.1] [--top:17.3] lg:[--top:20.7]
          ${marginTopClass} ${fontSizeClass} font-shippori font-normal leading-none
          ${vars.subtitle}
        `}
      >
        {item.subtitle}
      </p>
      {/* 説明文（デザイン上の改行位置で改行する）。
          3行のメニューも4行分の高さを取り、カードの高さ・ボタンの位置を全メニューでそろえる */}
      <p
        className={`
          [--fs:16.8] lg:[--fs:20.2]
          ${marginTopClass} ${fontSizeClass} font-shippori font-normal leading-[1.37]
          min-h-[calc(1.37em*4)]
          ${vars.description}
        `}
      >
        {item.descriptionLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </>
  );
}
