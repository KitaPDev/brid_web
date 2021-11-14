export interface INews {
  id: number;
  languageID: number;
  label: string;
}

export interface INewsContent {
  id: number;
  newsID: number;
  languageID: number;
  displayOrder: number;
  mediaPath: string;
  youtubeEmbedID: string;
  tsPublished: Date;
  content: string;
}
