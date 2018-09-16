import React, { Fragment } from "react";
import "./style.css";

const Cart = data => {
  return (
    <Fragment>
      <div className="cart-item">
        <img src={data.product.img} alt="" className="cart-img" />
        <div className="item-details">
          <div className="item-name">{data.product.name}</div>
          <div className="item-decs">$ {data.product.price}</div>
        </div>
        <div className="counters">
          <button className="down">-</button>
          <div className="amount"> {data.product.quantity} </div>
          <button className="up">+</button>
        </div>
        <div className="price">$ {data.product.itemTotal}</div>
        {/* <div className="total">{data.product.total || "10"}</div> */}
        <button className="remove">X</button>
      </div>
    </Fragment>
  );
};

export default Cart;
