type CtaButtonProps = {
  label: string;
  /** リンク先（LINEの正式URLが決まるまでは仮で「#」） */
  href: string;
  /** gradient: オレンジグラデーション / yellow: 黄色ベタ */
  variant: "gradient" | "yellow";
  className?: string;
};

export function CtaButton({ label, href, variant, className }: CtaButtonProps) {
  const variantClass =
    variant === "gradient"
      ? "bg-gradient-to-r from-[#c97201] to-[#e5ba59] text-white"
      : "bg-[#fef300] text-[#1b1b1b]";

  return (
    <a
      href={href}
      className={`
        [--w:330] [--h:60] [--fs:16]
        md:[--w:454] md:[--h:74] md:[--fs:18]
        flex items-center justify-center
        w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
        h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
        font-zen-maru
        text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
        leading-[1.11]
        shadow-[0_4px_14px_rgba(0,0,0,0.10)]
        transition-[transform,box-shadow] duration-300 ease-out
        hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]
        ${variantClass}
        ${className ?? ""}
      `}
    >
      {label}
    </a>
  );
}
