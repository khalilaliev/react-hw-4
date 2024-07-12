import { INavbar } from "../interfaces/navbar-interface";
import Home from "../pages/Home";
import Users from "../pages/Users";

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
];
