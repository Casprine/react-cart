import React, { Fragment } from "react";
import CartItem from "../CartItem/Index";

const CartContainer = cart => {
  const cartItems = cart.cart;
  return (
    <Fragment>
      {cartItems.map(item => (
        <CartItem product={item} />
      ))}
    </Fragment>
  );
};

export default CartContainer;
