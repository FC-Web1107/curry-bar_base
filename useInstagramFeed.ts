"use client";

import { useState, useEffect, useMemo } from "react";

// ==========================================
// 堅牢なデータ取得・キャッシュロジック (テンプレート用完全版)
// ==========================================

//【重要】ここにデフォルトのAPI URLを入れます（コンポーネント側からPropsで上書きも可能）
const DEFAULT_INSTAGRAM_API_URL = "https://admin.five-cluv.co.jp/api/external/instagram/c346f6c4-f86f-4266-95e8-ddcc7006196c";

const FEED_CACHE_TTL_MS = 5 * 60 * 1000;
const feedCache = new Map<string, { posts: InstagramPost[]; expiresAt: number }>();
const feedRequests = new Map<string, Promise<InstagramPost[]>>();

export interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  caption?: string;
}

export interface UseInstagramFeedOptions {
  apiUrl?: string;
  tags?: string[];
  limit?: number;
}

function normalizeTags(tags: string[] = []) {
  return (Array.isArray(tags) ? tags : [String(tags)])
    .filter(Boolean)
    .map((tag) => String(tag).toLowerCase());
}

async function loadInstagramPosts(apiUrl: string, tagsKey: string) {
  const cacheKey = `${apiUrl}|${tagsKey}`;
  const cached = feedCache.get(cacheKey);

  // キャッシュが有効なら即座に返す
  if (cached && cached.expiresAt > Date.now()) {
    return cached.posts;
  }

  // 既に同じリクエストが進行中なら、そのPromiseを相乗りで返す（重複リクエスト防止）
  const pending = feedRequests.get(cacheKey);
  if (pending) return pending;

  const request = fetch(apiUrl, { headers: { Accept: "application/json" } })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch Instagram data");
      }

      const data = await response.json();
      let fetchedPosts: InstagramPost[] = Array.isArray(data.data) ? data.data : data.data || [];
      const validTags = tagsKey ? tagsKey.split(",") : [];

      // タグによるフィルタリング処理
      if (validTags.length > 0) {
        fetchedPosts = fetchedPosts.filter((post) => {
          if (!post.caption) return false;
          const lowerCaption = String(post.caption).toLowerCase();
          return validTags.some((tag) => lowerCaption.includes(tag));
        });
      }

      // 取得したデータをキャッシュに保存
      feedCache.set(cacheKey, {
        posts: fetchedPosts,
        expiresAt: Date.now() + FEED_CACHE_TTL_MS,
      });

      return fetchedPosts;
    })
    .finally(() => {
      // 成功・失敗に関わらず、処理が終わったら進行中リストから削除
      feedRequests.delete(cacheKey);
    });

  // 進行中のリクエストとして登録
  feedRequests.set(cacheKey, request);
  return request;
}

/**
 * 堅牢なInstagramフィード取得用カスタムフック
 */
export function useInstagramFeed({ apiUrl = DEFAULT_INSTAGRAM_API_URL, tags = [], limit = 10 }: UseInstagramFeedOptions = {}) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const tagsKey = useMemo(() => normalizeTags(tags).join(","), [tags]);

  useEffect(() => {
    let ignore = false;

    async function fetchInstagramInfo() {
      // API URLが未設定、またはプレースホルダーの場合は取得処理をスキップ
      if (!apiUrl || apiUrl.includes("ここにAPI")) {
        if (!ignore) setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const fetchedPosts = await loadInstagramPosts(apiUrl, tagsKey);
        if (!ignore) setPosts(fetchedPosts.slice(0, limit));
      } catch (err: any) {
        if (!ignore) setError(err.message || "An unexpected error occurred");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchInstagramInfo();

    // クリーンアップ関数: コンポーネントのアンマウント時に状態更新をキャンセルする
    return () => {
      ignore = true;
    };
  }, [apiUrl, tagsKey, limit]);

  return { posts, loading, error };
}