import React, { Fragment } from "react";
import CartItem from "../CartItem/Index";

const CartContainer = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) => {
  return (
    <Fragment>
      {cartItems.map(item => (
        <CartItem
          product={item}
          key={item.id}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      ))}
    </Fragment>
  );
};

export default CartContainer;
