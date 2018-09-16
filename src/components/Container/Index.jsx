import React, { Component } from "react";
import Header from "../Header/Index";

// Import styling
import "./style.css";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        Hello world
      </div>
    );
  }
}
export default Container;
