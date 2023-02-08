export interface IRouterConfig {
  title: string;
  path?: string;
  disabled?: boolean;
}

export interface ISiderbarItemConfig {
  title: string;
  children: {
    title: string;
    path: string;
  }[];
}

export interface ISiderbarConfig {
  zh: ISiderbarItemConfig[];
  us: ISiderbarItemConfig[];
}
