import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "@/components/ui/chevron-right";
import { menuItems } from "@/lib/menu-items";

type MenuPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: MenuPageProps): Metadata {
  const item = menuItems.find((menuItem) => menuItem.slug === params.slug);
  if (!item) {
    return {};
  }
  return {
    title: `${item.title}｜${item.subtitle} | Curry&Bar Base`,
    description: item.description,
  };
}

// TODO: 各メニューページはデザイン未支給のため仮レイアウト（正式デザイン確定後に差し替え）
export default function MenuPage({ params }: MenuPageProps) {
  const item = menuItems.find((menuItem) => menuItem.slug === params.slug);
  if (!item) {
    notFound();
  }

  return (
    <main className="[--base:390] md:[--base:1280] w-full">
      {/* ヘッダー */}
      <div
        className="
          [--px:20] md:[--px:75]
          [--top:24] md:[--top:40]
          mx-auto w-full max-w-[1280px]
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
        "
      >
        <Link
          href="/"
          className="
            [--fs:20] md:[--fs:24]
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.4]
          "
        >
          Curry&Bar Base
        </Link>
      </div>
      {/* メニュー内容 */}
      <div
        className="
          [--px:24] md:[--px:0]
          [--top:64] md:[--top:96]
          [--bottom:96] md:[--bottom:140]
          [--w:720]
          mx-auto flex w-full max-w-[1280px] flex-col items-center
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
        "
      >
        <div className="flex w-full flex-col items-center text-center md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]">
          <p
            className="
              [--fs:24] md:[--fs:28]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-none text-[#cbb394]
            "
          >
            {item.no}
          </p>
          <h1
            className="
              [--fs:40] md:[--fs:64]
              [--top:16] md:[--top:20]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              font-normal
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.2]
            "
          >
            {item.title}
          </h1>
          <p
            className="
              [--fs:17] md:[--fs:20]
              [--top:12] md:[--top:16]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.6] tracking-[0.2em] text-[#cbb394]
            "
          >
            {item.subtitle}
          </p>
          {/* 飾り線 */}
          <span
            aria-hidden="true"
            className="
              [--w:80]
              [--top:24] md:[--top:32]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-[#cbb394]/80
            "
          />
          <p
            className="
              [--fs:16] md:[--fs:20]
              [--top:32] md:[--top:40]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[2.2] tracking-[0.06em]
            "
          >
            {item.description}
          </p>
          {/* メニュー写真 */}
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className="
              [--top:40] md:[--top:56]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              aspect-[3/2] w-full border border-[#cbb394]/60 object-cover
            "
            sizes="(min-width: 768px) 56vw, 88vw"
          />
          {/* TODO: 詳細メニューのコンテンツは未確定 */}
          <p
            className="
              [--fs:16] md:[--fs:20]
              [--top:40] md:[--top:48]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[2] tracking-[0.08em] text-white/70
            "
          >
            詳細メニューは準備中です。
          </p>
          {/* トップへ戻る */}
          <Link
            href="/"
            className="
              [--w:245] [--h:48]
              [--top:40] md:[--top:56]
              [--px:24]
              grid grid-cols-[1em_1fr_1em] items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
              px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
              rounded-[10px] border border-[#cbb394] text-[#cbb394]
              text-[15px] [--fs:20] md:text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] tracking-[0.1em]
            "
          >
            <span className="col-start-2 text-center">トップへ戻る</span>
            <ChevronRight className="col-start-3 h-[10px] w-[7px] justify-self-end" />
          </Link>
        </div>
      </div>
    </main>
  );
}
