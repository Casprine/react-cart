import React from "react";
import "./style.css";
const CheckoutButton = props => {
  return (
    <div className="CheckoutButton">
      <button className="checkout">
        <span className="checkout-detail"> Checkout </span>
        <span className="checkout-price">$ {props.totalPrice}</span>
      </button>
    </div>
  );
};

export default CheckoutButton;
