import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { NAVBAR_ITEM } from "../../config/navbar-item";
import React from "react";
import NotFound from "../../pages/NotFound";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <NavLink to="/">Hillel Practice</NavLink>
        </div>
        <div className="navbar-center">
          {NAVBAR_ITEM.map((item) => (
            <NavLink
              className={`navbar-item ${
                pathname === item.path ? "navbar-active" : ""
              }`}
              key={item.path}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <Routes>
        {NAVBAR_ITEM.map((item) => (
          <Route key={item.path} path={item.path} element={item.element}>
            {item.userInfo &&
              item.userInfo.map((subItem) => (
                <Route
                  key={subItem.path}
                  path={subItem.path}
                  element={subItem.element}
                />
              ))}
          </Route>
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navbar;
