// import { INavbar } from "../interfaces/navbar-interface";
// import Home from "../pages/Home";
// import Users from "../pages/Users";
// import UsersInfo from "../pages/UsersInfo";

import { INavbar } from "../interfaces/navbar-interface";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UsersInfo from "../pages/UsersInfo";

export const NAVBAR_ITEM: INavbar[] = [
  {
    title: "Home",
    element: <Home />,
    path: "/",
  },
  {
    title: "Users",
    element: <Users />,
    path: "/users",
  },
  {
    title: "UsersInfo",
    element: <UsersInfo />,
    path: "/usersInfo",
  },
];
