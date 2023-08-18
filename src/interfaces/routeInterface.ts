export interface IRoutesDetails {
  path: string;
  component: React.FC;
  isProtected?: boolean;
  children?: ISubRouteDetails[];
}

export interface ISubRouteDetails {
  path: string;
  component: React.FC;
  isProtected?: boolean;
}
