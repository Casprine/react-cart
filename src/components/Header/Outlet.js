import React from "react";
import CloseButton from "./CloseButton/Outlet";
import "./style.css";

const Header = () => {
  return (
    <nav className="header">
      <CloseButton content="X " classname="close-button" />
      <p className="heading">Product Page</p>
      <CloseButton content="My Carts" classname="link" />
    </nav>
  );
};
export default Header;
