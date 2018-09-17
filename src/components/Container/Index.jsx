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
          itemTotalPrice: 3
        },
        {
          id: 2,
          name: "Orange",
          img:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/tangerine_1f34a.png",
          price: 6,
          quantity: 1,
          itemTotalPrice: 6
        },
        {
          id: 3,
          name: "Meat",
          img:
            " https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/cut-of-meat_1f969.png",
          price: 6,
          quantity: 1,
          itemTotalPrice: 6
        },
        {
          id: 4,
          name: "Bread",
          img:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/bread_1f35e.png",
          price: 8,
          quantity: 1,
          itemTotalPrice: 8
        }
      ],
      totalPrice: 0
    };
    // Binders
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.computeTotalPrice = this.computeTotalPrice.bind(this);
  }

  // Increase quantity , itemTotalPrice and update state
  increaseQuantity({ id }) {
    const { products } = this.state;
    const index = this.state.products.findIndex(product => product.id === id);
    const product = this.state.products[index];
    const newQuantity = product.quantity + 1;
    const newitemTotalPrice = newQuantity * product.price;
    const newindex = index + 1;
    const newItem = {
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: newQuantity,
      itemTotalPrice: newitemTotalPrice
    };

    // New updated Products
    const updatedProducts = [
      ...products.slice(0, index),
      newItem,
      ...products.slice(newindex, product.length)
    ];

    // Set new state
    this.setState(
      {
        products: updatedProducts
      },
      () => {
        const totalPrice = this.computeTotalPrice();
        this.setState({ totalPrice });
      }
    );
  }

  // Decrease quantity , itemTotalPrice and update state
  decreaseQuantity({ id }) {
    const { products } = this.state;
    const index = this.state.products.findIndex(product => product.id === id);
    const product = this.state.products[index];
    const newQuantity = product.quantity - 1;
    const newitemTotalPrice = newQuantity * product.price;
    const newindex = index + 1;
    const newItem = {
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: newQuantity,
      itemTotalPrice: newitemTotalPrice
    };

    // New updated Products
    const updatedProducts = [
      ...products.slice(0, index),
      newItem,
      ...products.slice(newindex, product.length)
    ];

    // Set new state
    this.setState(
      {
        products: updatedProducts
      },

      () => {
        const totalPrice = this.computeTotalPrice();
        this.setState({ totalPrice });
      }
    );
  }

  // Remove Item
  removeItem({ id }) {
    const { products } = this.state;
    const index = this.state.products.findIndex(product => product.id === id);
    const product = this.state.products[index];

    const newItem = {
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: 0,
      itemTotalPrice: product.itemTotalPrice
    };

    // New updated Products
    const updatedProducts = [
      ...products.slice(0, index),
      ...newItem,
      ...products.slice(id++, product.length)
    ];

    // Set new state
    this.setState(
      {
        products: updatedProducts
      },
      () => {
        const totalPrice = this.computeTotalPrice();
        this.setState({ totalPrice });
      }
    );
  }

  // Calculate totalPrice
  computeTotalPrice() {
    let total = 0;
    this.state.products.forEach(element => {
      total += parseInt(element.itemTotalPrice, 10);
    });
    return total;
  }

  componentDidMount() {
    const totalPrice = this.computeTotalPrice();
    this.setState({ totalPrice });
  }

  render() {
    let { totalPrice } = this.state;

    return (
      <div className="container">
        <Header />
        <CartContainer
          cartItems={this.state.products}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          removeItem={this.removeItem}
        />
        <CheckoutButton content="Checkout" totalPrice={totalPrice} />
      </div>
    );
  }
}
export default Container;
