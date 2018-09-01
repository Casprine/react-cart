import React, { Component } from "react";
import CartItem from "../CartItem/Outlet";
import "./style.css";

class CartContainer extends Component {
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
    this.setState({ totalPrice: computedPrice }, () => {
      this.props.casprine(computedPrice);
    });
  }
  componentDidMount() {
    const firstT = this.state.totalPrice;
    this.props.casprine(firstT);
  }

  render() {
    return (
      <div className="CartContainer">
        {this.state.products.map(item => (
          <CartItem {...item} key={item.id} computePrice={this.totalPriceCal} />
        ))}
      </div>
    );
  }
}

export default CartContainer;
