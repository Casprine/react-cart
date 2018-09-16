import React, { Fragment } from "react";
import "./style.css";

const Cart = ({ product, increaseQuantity }) => {
  return (
    <Fragment>
      <div className="cart-item">
        <img src={product.img} alt="" className="cart-img" />
        <div className="item-details">
          <div className="item-name">{product.name}</div>
          <div className="item-decs">$ {product.price}</div>
        </div>
        <div className="counters">
          <button className="down">-</button>
          <div className="amount"> {product.quantity} </div>
          <button className="up" onClick={() => increaseQuantity(product)}>
            +
          </button>
        </div>
        <div className="price">$ {product.itemTotal}</div>
        <button className="remove">X</button>
      </div>
    </Fragment>
  );
};

export default Cart;
