export interface NewsData {
  id: number;
  languageId?: number;
  label: string;
  postedAt: Date;
  contentData?: ContentNewsData[];
}

export interface ContentNewsData {
  id?: number;
  newsId: number;
  displayOrder: number;
  mediaPath?: string;
  youtubeEmbedId?: string;
  content: string;
}
