import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

// Figma指定フォント（全テキスト共通）
const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  // 400: サイト全体 / 600: カード内テキスト
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-zen-old-mincho",
});

// TODO: 正式なサイトタイトル・ディスクリプション確定後に差し替え
export const metadata: Metadata = {
  title: "Curry&Bar Base",
  description:
    "鹿児島・天文館の地下にあるカレーとカクテルの店「Curry&Bar Base」。螺旋階段の先にひろがる、大人の秘密基地です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={zenOldMincho.variable}>{children}</body>
    </html>
  );
}
