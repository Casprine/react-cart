import React, { Fragment } from "react";
import Button from "../Shared/Button";
import "./style.css";

const Cart = product => {
  return (
    <Fragment>
      <div className="cart-item">
        <img src={product.img} alt="" className="cart-img" />
        <div className="item-details">
          <div className="item-name">{product.name}</div>
          <div className="item-decs">$ {product.price}</div>
        </div>
        <div className="counters">
          <Button className="down" onClick={product.decrease} content="-" />
          <div className="amount"> {product.quantity} </div>
          <Button className="up" onClick={product.increase} content="+" />
        </div>
        <div className="price">$ {product.itemTotal}</div>
        <div className="total">{product.total}</div>
        <Button className="close" onClick={product.remove} content="x" />
      </div>
    </Fragment>
  );
};

export default Cart;
