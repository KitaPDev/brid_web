export interface Industry {
  id: number;
  languageId: number;
  label: string;
}

export interface IndustryContent {
  id: number;
  industryId: number;
  languageId: number;
  displayOrder: number;
  mediaPath: string;
  content: string;
}
