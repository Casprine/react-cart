import React, { Component } from "react";
import Header from "../Header/Outlet";
import CartItem from "../CartItem/Outlet";
// Import components
import "./style.css";

class Container extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {}
  render() {
    const products = [
      {
        id: 1,
        name: "Mango",
        img:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/mango_1f96d.png",
        quantity: 2,
        price: 3
      },
      {
        id: 2,
        name: "Orange",
        img:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/tangerine_1f34a.png",
        quantity: 3,
        price: 6
      },
      {
        id: 3,
        name: "Meat",
        img:
          " https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/cut-of-meat_1f969.png",
        quantity: 3,
        price: 6
      },
      {
        id: 4,
        name: "Bread",
        img:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/bread_1f35e.png",
        quantity: 2,
        price: 8
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
