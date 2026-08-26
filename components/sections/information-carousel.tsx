"use client";

import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  InformationCard,
  type InformationItem,
} from "@/components/sections/information-card";

/** 1ページに表示する投稿数 */
const SLIDES_PER_PAGE = 2;

type InformationCarouselProps = {
  items: InformationItem[];
};

export function InformationCarousel({ items }: InformationCarouselProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activePage, setActivePage] = useState(0);
  const pageCount = Math.ceil(items.length / SLIDES_PER_PAGE);

  return (
    <div>
      {/* 投稿スライダー */}
      <Swiper
        slidesPerView={SLIDES_PER_PAGE}
        slidesPerGroup={SLIDES_PER_PAGE}
        spaceBetween={16}
        onSwiper={setSwiper}
        onSlideChange={(instance) =>
          setActivePage(Math.round(instance.activeIndex / SLIDES_PER_PAGE))
        }
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <InformationCard text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ページインジケーター */}
      <div
        className="
          [--top:24] [--gap:8]
          flex justify-center
          mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
        "
      >
        {Array.from({ length: pageCount }, (_, pageIndex) => (
          <button
            key={pageIndex}
            type="button"
            aria-label={`${pageIndex + 1}ページ目の投稿を表示`}
            aria-current={activePage === pageIndex ? "true" : undefined}
            onClick={() => swiper?.slideTo(pageIndex * SLIDES_PER_PAGE)}
            className={`h-2 w-2 rounded-full ${
              activePage === pageIndex ? "bg-[#1b1b1b]" : "bg-[#1b1b1b]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
