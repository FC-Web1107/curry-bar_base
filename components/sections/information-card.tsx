export type InformationItem = {
  text: string;
};

type InformationCardProps = {
  text: string;
};

export function InformationCard({ text }: InformationCardProps) {
  return (
    <div className="transition-transform duration-300 ease-out hover:-translate-y-1">
      {/* カード画像（未確定のためプレースホルダー） */}
      <div
        className="
          [--radius:19]
          aspect-[271/298] w-full
          rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
          bg-[#c4c4c4]
          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
        "
      />
      {/* カードテキスト */}
      <p
        className="
          [--fs:16] [--top:16] [--px:0]
          md:[--fs:18] md:[--top:28] md:[--px:10]
          mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          font-shippori
          text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
          leading-[1.25] text-[#1b1b1b] [text-wrap:pretty]
        "
      >
        {text}
      </p>
    </div>
  );
}
