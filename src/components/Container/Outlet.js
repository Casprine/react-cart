import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartItem from "../CartItem/Outlet";
import CartContainer from "../CartContianer/Outlet";
import CheckoutButton from "../CheckoutButton/Outlet";
// Import components
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <CartContainer products={this.state.products} />
        {this.state.totalPrice === 0 ? (
          "You have no item in your cart"
        ) : (
          <CheckoutButton />
        )}
      </div>
    );
  }
}
export default Container;
