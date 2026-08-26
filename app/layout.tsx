import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_JP,
  Shippori_Mincho_B1,
  Zen_Maru_Gothic,
} from "next/font/google";
import "swiper/css";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
});

// Figma指定の Hiragino Kaku Gothic Std W8 はGoogle Fontsに無いため Noto Sans JP 900 で代替
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-inter",
});

const shipporiMinchoB1 = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-shippori-mincho",
});

// TODO: 正式なサイトタイトル・ディスクリプション確定後に差し替え
export const metadata: Metadata = {
  title: "まるかしビール",
  description:
    "柏の良いものを一杯にまるごと詰め込んだ、柏生まれのクラフトビール「まるかしビール」の公式サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaruGothic.variable} ${notoSansJp.variable} ${inter.variable} ${shipporiMinchoB1.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
