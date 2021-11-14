export interface IModule {
  id: number;
  languageID: number;
  label: string;
}

export interface IModuleContent {
  id: number;
  moduleID: number;
  languageID: number;
  displayOrder: number;
  mediaPath: string;
  content: string;
}
