import React, { Component } from "react";
import CartItem from "../CartItem/Outlet";
import "./style.css";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }
  render() {
    return (
      <div className="CartContainer">
        {this.state.products.map(item => (
          <CartItem
            {...item}
            key={item.id}
            // computePrice={this.totalPriceCal}
          />
        ))}
      </div>
    );
  }
}

export default CartContainer;
