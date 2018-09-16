import React, { Fragment } from "react";
import CartItem from "../CartItem/Index";

const CartContainer = ({ cartItems, increaseQuantity }) => {
  return (
    <Fragment>
      {cartItems.map(item => (
        <CartItem
          product={item}
          key={item.id}
          increaseQuantity={increaseQuantity}
        />
      ))}
    </Fragment>
  );
};

export default CartContainer;
