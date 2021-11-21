export interface News {
  id: number;
  languageId: number;
  label: string;
}

export interface NewsContent {
  id: number;
  newsId: number;
  languageId: number;
  displayOrder: number;
  mediaPath: string;
  youtubeEmbedId: string;
  tsPublished: Date;
  content: string;
}
