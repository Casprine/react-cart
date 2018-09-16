import React from "react";
import Button from "../Shared/Button";

// Import styling
import "./style.css";

const Header = () => {
  return (
    <nav className="header">
      <Button content="X" classname="close" />
      <p className="heading">Product Page</p>
      <Button content="M cart" classname="link" />
    </nav>
  );
};
export default Header;
