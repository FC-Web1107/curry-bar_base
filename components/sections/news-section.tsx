import Link from "next/link";
import { ChevronRight } from "@/components/ui/chevron-right";

// TODO: Instagramの投稿・キャプションはFigma上もプレースホルダー（連携方法の確定待ち）
const newsPosts = [
  {
    id: 1,
    caption:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
  {
    id: 2,
    caption:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
  {
    id: 3,
    caption:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
  },
];

export function NewsSection() {
  return (
    <section
      id="news"
      className="
        [--base:390] md:[--base:1280]
        w-full
        bg-[image:linear-gradient(rgba(0,0,0,0.59),rgba(0,0,0,0.59)),url('/main/news/smoke-bg.jpg')]
        bg-cover bg-center
      "
    >
      <div
        className="
          [--top:96] md:[--top:143]
          [--bottom:64] md:[--bottom:50]
          mx-auto w-full max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
        "
      >
        {/* 見出し */}
        <div
          className="
            [--gap:24] md:[--gap:70]
            flex items-center justify-center
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
          "
        >
          <span
            aria-hidden="true"
            className="
              [--w:70] md:[--w:251]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-white
            "
          />
          <h2
            className="
              [--fs:32] md:[--fs:51]
              shrink-0 font-normal
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.3]
            "
          >
            NEWS
          </h2>
          <span
            aria-hidden="true"
            className="
              [--w:70] md:[--w:251]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-white
            "
          />
        </div>
        <div
          className="
            [--top:48] md:[--top:62]
            flex flex-col items-center
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:flex-row md:items-start md:justify-start
          "
        >
          {/* Instagramの投稿 */}
          <ul
            className="
              [--gap:16] md:[--gap:24]
              [--left:0] md:[--left:100]
              grid grid-cols-3
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            {newsPosts.map((post) => (
              <li
                key={post.id}
                className="[--w:104] md:[--w:200] w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]"
              >
                {/* 投稿画像プレースホルダー */}
                <div aria-hidden="true" className="aspect-[121/143] w-full bg-[#d9d9d9]" />
                {/* キャプション */}
                <p className="[--top:16] md:[--top:21] mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))] text-[8px] md:text-[20px] leading-[10px] md:leading-[1.7]">
                  {post.caption}
                </p>
              </li>
            ))}
          </ul>
          {/* SNSリンク */}
          <div
            className="
              [--top:48] md:[--top:13]
              [--left:0] md:[--left:40]
              flex flex-col items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            "
          >
            <p
              className="
                [--fs:19] md:[--fs:20]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.4]
              "
            >
              Follow us!
            </p>
            {/* TODO: InstagramアカウントのURL未確定のため仮で「#」 */}
            <Link
              href="#"
              aria-label="Instagram"
              className="
                [--top:28] md:[--top:37]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              "
            >
              {/* Instagramアイコン */}
              <span className="grid h-[36px] w-[38px] rounded-[9px] border-[3px] border-white">
                <span className="col-start-1 row-start-1 h-[18px] w-[18px] place-self-center rounded-full border-[3px] border-white" />
                <span className="col-start-1 row-start-1 mr-[4px] mt-[3px] h-[4px] w-[4px] justify-self-end rounded-full bg-white" />
              </span>
            </Link>
            {/* TODO: LINE公式アカウントのURL未確定のため仮で「#」 */}
            <Link
              href="#"
              className="
                [--top:32] md:[--top:40]
                flex items-center
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              "
            >
              {/* 左端の白い飾り */}
              <span
                aria-hidden="true"
                className="[--h:39] h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))] w-[11px] bg-[#d9d9d9]"
              />
              <span
                className="
                  [--w:216] md:[--w:264] [--h:39]
                  flex items-center justify-between
                  w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                  h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                  border border-[#d9d9d9]
                  pl-[19px] pr-[14px]
                  text-[15px] md:text-[20px]
                "
              >
                LINE公式アカウント
                <ChevronRight className="h-[10px] w-[6px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
