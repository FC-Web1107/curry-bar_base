import { HeadingUnderline } from "@/components/ui/heading-underline";

type SectionTitleProps = {
  /** 英字タイトル（About / BEER LINEUP など） */
  en: string;
  /** 日本語ラベル（まるかしビールについて など） */
  ja: string;
  /** dark: 黒文字 / light: 白文字 */
  tone: "dark" | "light";
  /** row: ラベルを右横に配置 / column: ラベルを下に中央配置（Message用） */
  layout?: "row" | "column";
  /** Figma上の英字タイトルとラベルの間隔（PC px値） */
  labelGap?: number;
};

export function SectionTitle({
  en,
  ja,
  tone,
  layout = "row",
  labelGap = 16,
}: SectionTitleProps) {
  const textColor = tone === "light" ? "text-white" : "text-[#1b1b1b]";

  if (layout === "column") {
    return (
      <div className="flex w-fit flex-col">
        <h2 className={`flex flex-col items-center ${textColor}`}>
          <span
            className="
              [--fs:28] md:[--fs:39]
              font-noto-sans
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.5]
            "
          >
            {en}
          </span>
          <span
            className="
              [--fs:11] [--top:4]
              md:[--fs:14]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              font-noto-sans
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.5]
            "
          >
            {ja}
          </span>
        </h2>
        {/* 見出し下線 */}
        <HeadingUnderline />
      </div>
    );
  }

  return (
    <div className="w-fit">
      <h2 className={`flex items-start ${textColor}`}>
        <span
          className="
            [--fs:28] md:[--fs:39]
            font-noto-sans
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.5]
          "
        >
          {en}
        </span>
        <span
          style={{ "--left": labelGap } as React.CSSProperties}
          className="
            [--fs:11] [--top:17]
            md:[--fs:14] md:[--top:22]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            font-noto-sans
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.5]
          "
        >
          {ja}
        </span>
      </h2>
      {/* 見出し下線 */}
      <HeadingUnderline />
    </div>
  );
}
