export interface ModuleData {
  id: number;
  languageId?: number;
  label: string;
  description: string;
  contentData: ContentModuleData[];
}

export interface ContentModuleData {
  id?: number;
  moduleId: number;
  displayOrder: number;
  mediaPath?: string;
  content: string;
}
