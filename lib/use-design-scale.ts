"use client"

import * as React from "react"

/**
 * デザイン基準幅。CLAUDE.md のスケール方式と揃える。
 */
const DESIGN_WIDTH = 1280

/**
 * className 側の min(calc(100vw*v/1280), calc(v*1px)) と同じ縮小率を返す。
 * = min(viewportWidth / 1280, 1)
 */
function readDesignScale() {
  if (typeof window === "undefined") {
    return 1
  }

  return Math.min(window.innerWidth / DESIGN_WIDTH, 1)
}

export function useDesignScale() {
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    const updateScale = () => {
      setScale(readDesignScale())
    }

    updateScale()
    window.addEventListener("resize", updateScale)

    return () => {
      window.removeEventListener("resize", updateScale)
    }
  }, [])

  return scale
}

/**
 * 1280px 幅で `value` px、狭い画面では同じ比率で縮小した px を返す。
 * Swiper など CSS ではなく JS に px を渡すライブラリで使う。
 */
export function useDesignPx(value: number) {
  const scale = useDesignScale()

  return React.useMemo(() => value * scale, [scale, value])
}
