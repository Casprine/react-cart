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
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.remove = this.remove.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <CartContainer cart={this.state.products} />
        <CheckoutButton content="Checkout" totalPrice="120" />
      </div>
    );
  }
}
export default Container;
