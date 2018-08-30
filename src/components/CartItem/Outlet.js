import React, { Component } from "react";
import "./style.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
      price: this.props.price,
      constPrice: this.props.price
    };
    // Binders
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const newquantity = Number(this.state.quantity) + 1;
    const newprice =
      Math.round(this.state.constPrice * newquantity * 100) / 100;
    this.setState({ quantity: newquantity, price: newprice });
  }
  decrease() {
    const oldquantity = this.state.quantity - 1;
    const oldprice = this.state.price - this.state.constPrice;
    console.log(oldprice);
    this.setState({ quantity: oldquantity, price: oldprice });
    if (oldprice <= 0) {
    }
  }

  perone(currentPrice, quantity) {
    return currentPrice / quantity;
  }

  render() {
    return (
      <div className="cart-item">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/banana_1f34c.png"
          alt=""
          className="cart-img"
        />
        <div className="item-details">
          <div className="item-name">Banana</div>
          <div className="item-decs">
            {this.perone(this.state.price, this.state.quantity)}
          </div>
        </div>
        <div className="counters">
          <button className="down" onClick={this.decrease}>
            -
          </button>
          <div className="amount"> {this.state.quantity} </div>
          <button className="up" onClick={this.increase}>
            +
          </button>
        </div>
        <div className="price">$ {this.state.price}</div>

        <div className="total">{this.state.total}</div>
        {/* <button className="close"> X </button> */}
      </div>
    );
  }
}
export default CartItem;
