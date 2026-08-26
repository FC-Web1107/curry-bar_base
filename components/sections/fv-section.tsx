import Image from "next/image";
import { GlobalNav } from "@/components/layout/global-nav";

export function FvSection() {
  return (
    <section className="[--base:390] md:[--base:1280] grid w-full">
      {/* メインビジュアル */}
      <h1 className="col-start-1 row-start-1">
        <Image
          src="/main/fv/main-visual.jpg"
          alt="まるかしビール　柏生まれのクラフトビールで乾杯する様子"
          width={1280}
          height={715}
          className="aspect-[1280/715] w-full object-cover"
          sizes="100vw"
          priority
        />
      </h1>
      {/* ヘッダーナビ */}
      <div
        className="
          [--top:20] [--right:20]
          md:[--top:95] md:[--right:112]
          col-start-1 row-start-1
          mx-auto flex w-full max-w-[1280px] justify-end self-start
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
        "
      >
        <GlobalNav tone="light" />
      </div>
    </section>
  );
}
