import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartContainer from "../CartContianer/Outlet";
import CheckoutButton from "../CheckoutButton/Outlet";
// Import components
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      totalPrice: 0
    };
    this.casprine = this.casprine.bind(this);
  }

  componentDidMount() {}
  casprine(casprine) {
    this.setState(
      {
        totalPrice: casprine
      },
      () => {
        console.log(this.state.totalPrice);
      }
    );
  }

  render() {
    return (
      <div className="container">
        <Header />
        <CartContainer
          products={this.state.products}
          casprine={this.casprine}
        />
        {this.state.totalPrice === 0 ? (
          "You have no item in your cart"
        ) : (
          <CheckoutButton totalPrice={this.state.totalPrice} />
        )}
      </div>
    );
  }
}
export default Container;
