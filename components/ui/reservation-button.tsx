// 外部の予約サイトへのボタン（FV上部ナビ・追従ヘッダー・ハンバーガーメニュー・フッターで共用）
const RESERVATION_URL = "https://base-schedule.web.app/";

// 置く場所ごとの見た目
const variantClasses = {
  // 枠線のみ（フッター・ハンバーガーメニュー内）
  outline: "border-[#cbb394] text-[#cbb394] hover:bg-[#cbb394]/15",
  // 白のすりガラス（追従ヘッダー）
  glass: "border-[#cbb394] bg-white/15 text-[#cbb394] backdrop-blur-[6px] hover:bg-white/25",
  // オレンジ塗り（FV上部ナビ）
  solid: "border-[#c9803f] bg-[#c9803f] text-white hover:bg-[#b5702f]",
};

type ReservationButtonProps = {
  variant?: keyof typeof variantClasses;
  className?: string;
  tabIndex?: number;
};

export function ReservationButton({
  variant = "outline",
  className,
  tabIndex,
}: ReservationButtonProps) {
  return (
    <a
      href={RESERVATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      className={`
        [--h:40] md:[--h:44]
        [--px:18] md:[--px:22]
        [--radius:8]
        [--fs:16] md:[--fs:16]
        inline-flex shrink-0 items-center justify-center whitespace-nowrap
        h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
        px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
        rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
        border
        text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
        leading-none tracking-[0.04em]
        transition-colors duration-300 ease-out
        motion-reduce:transition-none
        ${variantClasses[variant]}
        ${className ?? ""}
      `}
    >
      Schedule &amp; Reservation →
    </a>
  );
}
