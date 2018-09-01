import React, { Component } from "react";
import "./style.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      price: this.props.price,
      itemTotal: 0
    };
    // Binders
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.remove = this.remove.bind(this);
  }

  increase() {
    const newquantity = this.state.quantity + 1;
    const itemTotal = newquantity * this.state.price;

    this.setState(
      {
        quantity: newquantity,
        itemTotal: itemTotal
      },
      () => {
        console.log("working");

        // this.props.computePrice(this.state.price);
      }
    );
  }

  decrease() {
    const newQuantity = this.state.quantity - 1;
    const itemTotal = this.state.price * newQuantity;
    this.setState({ quantity: newQuantity, itemTotal: itemTotal }, () => {
      // const substract = -this.state.price;
      // this.props.computePrice(substract);
      console.log("working");
    });
  }

  remove() {
    const zero = 0;
    this.setState(
      {
        quantity: zero
      },
      () => {
        // const substractItem = -this.state.itemTotal;
        // this.props.computePrice(substractItem);
        console.log("working");
      }
    );
  }

  componentDidMount() {
    this.setState({
      itemTotal: this.state.quantity * this.state.price
    });
  }
  render() {
    return (
      <div>
        {this.state.quantity === 0 ? (
          ""
        ) : (
          <div className="cart-item">
            <img src={this.props.img} alt="" className="cart-img" />
            <div className="item-details">
              <div className="item-name">{this.props.name}</div>
              <div className="item-decs">$ {this.state.price}</div>
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
            <div className="price">$ {this.state.itemTotal}</div>

            <div className="total">{this.state.total}</div>
            <button className="close" onClick={this.remove}>
              X
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default CartItem;
