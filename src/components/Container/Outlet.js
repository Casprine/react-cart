import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartItem from "../CartItem/Outlet";
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
        <div className="total-price">Total price = {this.state.totalPrice}</div>
      </div>
    );
  }
}
export default Container;
