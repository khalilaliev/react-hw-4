import { INavbar } from "../../interfaces/navbar-interface";
import Home from "../../pages/Home";
import Users from "../../pages/Users";
import UsersInfo from "../../pages/UsersInfo";

const NAVBAR_ITEM: INavbar = [
  {
    title: "Home",
    element: <Home />,
    path: "/",
  },
  {
    title: "users",
    element: <Users />,
    path: "/",
  },
  {
    title: "UsersInfo",
    element: <UsersInfo />,
    path: "/usersInfo",
  },
];


const Navbar = () => {
  return (  );
}
 
export default Navbar;