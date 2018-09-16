import React, { Component } from "react";
import Header from "../Header/Index";
import CheckoutButton from "../CheckoutButton/Index";

// Import styling
import "./style.css";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <CheckoutButton
         content="Checkout"
         totalPrice="120"
         />
      </div>
    );
  }
}
export default Container;
