export interface IRouterConfig {
  title: string;
  path?: string;
  disabled?: boolean;
}

export interface ISiderbarConfig {
  title: string;
  children: IRouterConfig[];
}
