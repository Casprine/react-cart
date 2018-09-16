import React, { Fragment } from "react";
import CartItem from "../CartItem/Index";

const CartContainer = ({ cartItems, increaseQuantity, decreaseQuantity }) => {
  return (
    <Fragment>
      {cartItems.map(item => (
        <CartItem
          product={item}
          key={item.id}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </Fragment>
  );
};

export default CartContainer;
