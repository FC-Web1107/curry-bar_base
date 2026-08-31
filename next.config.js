/** @type {import('next').NextConfig} */
// 配信先はビルド時に決める。
//   仮アップ（サブディレクトリ配信）: NEXT_PUBLIC_BASE_PATH=/<slug>
//   独自ドメイン（ルート配信）      : 未指定
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

