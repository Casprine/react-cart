import React, { Component } from "react";
import "./style.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
      price: this.props.price,
      itemTotal: 0
    };
    // Binders
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const newquantity = this.state.quantity + 1;
    const itemTotal = newquantity * this.state.price;
    console.log(itemTotal);
    this.setState({
      quantity: newquantity,
      itemTotal: itemTotal
    });
  }

  decrease() {
    const newQuantity = this.state.quantity - 1;
    const itemTotal = this.state.price * newQuantity;
    console.log(itemTotal);
    this.setState({ quantity: newQuantity, itemTotal: itemTotal });
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
            {/* <button className="close"> X </button> */}
          </div>
        )}
      </div>
    );
  }
}
export default CartItem;
