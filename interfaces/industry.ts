export interface IndustryData {
  id: number;
  languageId?: number;
  label: string;
  contentData: ContentIndustryData[];
}

export interface ContentIndustryData {
  id?: number;
  industryId: number;
  displayOrder: number;
  mediaPath?: string;
  content: string;
}
