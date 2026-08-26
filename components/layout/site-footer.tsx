import { GlobalNav } from "@/components/layout/global-nav";

export function SiteFooter() {
  return (
    <footer className="[--base:390] md:[--base:1280] w-full bg-white">
      <div
        className="
          [--top:32] [--bottom:40] [--right:20]
          md:[--top:50] md:[--bottom:64] md:[--right:112]
          mx-auto flex w-full max-w-[1280px] justify-end
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
          pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
        "
      >
        {/* フッターナビ */}
        <GlobalNav tone="dark" />
      </div>
    </footer>
  );
}
