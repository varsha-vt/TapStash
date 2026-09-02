export type SavedItemType = 'video' | 'link';

export type SourcePlatform = 'youtube' | 'tiktok' | 'instagram' | null;

export interface Category {
  id: string;
  userId: string;
  name: string;
  sortOrder: number;
  createdAt: string;
}

export interface SavedItem {
  id: string;
  userId: string;
  categoryId: string;
  url: string;
  canonicalUrl: string;
  type: SavedItemType;
  title: string;
  thumbnailUrl: string | null;
  description: string | null;
  siteName: string | null;
  embedHtml: string | null;
  sourcePlatform: SourcePlatform;
  savedAt: string;
}
