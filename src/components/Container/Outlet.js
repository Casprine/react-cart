import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartItem from "../CartItem/Outlet";
// Import components
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    const products = [
      {
        id: 1,
        quantity: 2,
        price: 3
      },
      {
        id: 2,
        quantity: 3,
        price: 6
      },
      {
        id: 3,

        quantity: 3,
        price: 6
      },
      {
        id: 4,
        quantity: 2,
        price: 8
      },
      {
        id: 5,
        quantity: 1,
        price: 12
      }
    ];
    return (
      <div className="container">
        <Header />
        <div className="cartContainer">
          {products.map(item => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
export default Container;
