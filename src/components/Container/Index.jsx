import React, { Component } from "react";
import Header from "../Header/Index";
import CartContainer from "../CartContainer/Index";
import CheckoutButton from "../CheckoutButton/Index";

// Import styling
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Mango",
          img:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/mango_1f96d.png",
          price: 3,
          quantity: 1,
          itemTotal: 1
        },
        {
          id: 2,
          name: "Orange",
          img:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/tangerine_1f34a.png",
          price: 6,
          quantity: 1,
          itemTotal: 1
        },
        {
          id: 3,
          name: "Meat",
          img:
            " https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/cut-of-meat_1f969.png",
          price: 6,
          quantity: 1,
          itemTotal: 1
        },
        {
          id: 4,
          name: "Bread",
          img:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/bread_1f35e.png",
          price: 8,
          quantity: 1,
          itemTotal: 1
        }
      ]
    };
    // Binders
    this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.decrease = this.decrease.bind(this);
    // this.remove = this.remove.bind(this);
  }

  increaseQuantity({ id }) {
    const { products } = this.state;
    const index = this.state.products.findIndex(product => product.id === id);
    const product = this.state.products[index];
    const newItem = {
      ...product,
      ...product.quantity++
    };
    // console.log(products);
    // console.log(newItem);
    // const updateProducts = [];

    // console.log(updateProducts);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <CartContainer
          cartItems={this.state.products}
          increaseQuantity={this.increaseQuantity}
        />
        <CheckoutButton content="Checkout" totalPrice="120" />
      </div>
    );
  }
}
export default Container;
