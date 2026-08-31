import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * public/ 配下のファイルを指すパスを組み立てる。
 *
 * 仮アップはサブディレクトリ配信、独自ドメイン取得後はルート配信。
 * その差はビルド時の NEXT_PUBLIC_BASE_PATH だけで吸収し、コードは書き換えない。
 *
 * next/link は basePath を自動で付けるが、output: 'export' かつ images.unoptimized の
 * next/image は付けない。<img> や CSS の url() も同様なので、画像はこれを通すこと。
 */
export function asset(path: string): string
export function asset<T>(path: T): T
export function asset(path: any): any {
  // 静的インポートした画像（StaticImageData）や undefined はそのまま返す。
  // これにより、どの src に付けても壊れない = 機械的に一括修復できる。
  if (typeof path !== "string") return path
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!path) return ""
  if (/^(https?:|data:|mailto:|tel:|#)/.test(path)) return path
  const clean = path.startsWith("/") ? path : `/${path}`
  if (base && (clean === base || clean.startsWith(`${base}/`))) return clean
  return `${base}${clean}`
}
