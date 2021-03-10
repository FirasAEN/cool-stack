export interface IAlnIconDefinition {
  name: string;
  literalIconSvg: string;
}

export interface IIconNamespace {
  name: string;
  icons: Array<IAlnIconDefinition>;
}
