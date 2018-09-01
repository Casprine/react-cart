import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartContainer from "../CartContianer/Outlet";
import CheckoutButton from "../CheckoutButton/Outlet";
import ErrorHandler from "../ErrorHandler/Outlet";

// Import components
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      totalPrice: 0
    };
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidMount() {}
  totalPrice(totalPrice) {
    this.setState(
      {
        totalPrice: totalPrice
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
          totalPrice={this.totalPrice}
        />
        {this.state.totalPrice === 0 ? (
          <ErrorHandler message="No item found" />
        ) : (
          <CheckoutButton totalPrice={this.state.totalPrice} />
        )}
      </div>
    );
  }
}
export default Container;
