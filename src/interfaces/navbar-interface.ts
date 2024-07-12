interface IUserInfo {
  path: string;
  element: JSX.Element;
}

export interface INavbar {
  title: string;
  element: JSX.Element;
  path: string;
  userInfo?: IUserInfo[];
}
