import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { NAVBAR_ITEM } from "../../config/navbar-item";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <NavLink to="/">Hillel Practice</NavLink>
        </div>
        <div className="navbar-center">
          {NAVBAR_ITEM.map((item) => {
            return (
              <NavLink
                className={`navbar-item ${
                  pathname === item.path ? "navbar-active" : ""
                }`}
                key={item.path}
                to={item.path}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <Routes>
        {NAVBAR_ITEM.map((item) => {
          return (
            <Route key={item.path} element={item.element} path={item.path} />
          );
        })}
      </Routes>
    </>
  );
};

export default Navbar;
