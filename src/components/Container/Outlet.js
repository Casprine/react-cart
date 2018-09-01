import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartItem from "../CartItem/Outlet";
import CheckoutButton from "../CheckoutButton/Outlet";
// Import components
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    const totalPrice = props.products
      .map(product => {
        return parseFloat(product.price);
      })
      .reduce((prev, curr) => prev + curr);
    this.state = {
      totalPrice,
      products: props.products
    };

    this.totalPriceCal = this.totalPriceCal.bind(this);
  }

  totalPriceCal(newPrice) {
    const computedPrice = newPrice + this.state.totalPrice;
    this.setState({ totalPrice: computedPrice });
  }
  render() {
    return (
      <div className="container">
        <Header />
        <div className="cartContainer">
          {this.state.products.map(item => (
            <CartItem
              {...item}
              key={item.id}
              computePrice={this.totalPriceCal}
            />
          ))}
        </div>

        {this.state.totalPrice === 0 ? (
          ""
        ) : (
          <CheckoutButton totalPrice={this.state.totalPrice} />
        )}
      </div>
    );
  }
}
export default Container;
