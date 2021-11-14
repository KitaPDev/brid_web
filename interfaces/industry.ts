export interface IIndustry {
  id: number;
  languageID: number;
  label: string;
}

export interface IIndustryContent {
  id: number;
  industryID: number;
  languageID: number;
  displayOrder: number;
  mediaPath: string;
  content: string;
}
