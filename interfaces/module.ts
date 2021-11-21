export interface Module {
  id: number;
  languageId: number;
  label: string;
}

export interface ModuleContent {
  id: number;
  moduleId: number;
  languageId?: number;
  displayOrder: number;
  mediaPath?: string;
  content?: string;
}
