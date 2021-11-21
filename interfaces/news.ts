export interface NewsData {
  id: number;
  languageId?: number;
  label: string;
  displayOrder: number;
  mediaPath?: string;
  youtubeEmbedId?: string;
  postedAt: Date;
  content?: string;
}
