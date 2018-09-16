import React, { Fragment } from "react";
import "./style.css";

const Cart = ({ product, increaseQuantity, decreaseQuantity }) => {
  return (
    <Fragment>
      {product.quantity == "0" ? (
        ""
      ) : (
        <div className="cart-item">
          <img src={product.img} alt="" className="cart-img" />
          <div className="item-details">
            <div className="item-name">{product.name}</div>
            <div className="item-decs">$ {product.price}</div>
          </div>
          <div className="counters">
            <button className="down" onClick={() => decreaseQuantity(product)}>
              -
            </button>
            <div className="amount"> {product.quantity} </div>
            <button className="up" onClick={() => increaseQuantity(product)}>
              +
            </button>
          </div>
          <div className="price">$ {product.itemTotalPrice}</div>
          <button className="remove">X</button>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
