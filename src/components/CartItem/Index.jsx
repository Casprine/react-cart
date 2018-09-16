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
          <button className="down" onClick={this.decrease}>
            -
          </button>
          <div className="amount"> {data.product.quantity || "1"} </div>
          <button className="up" onClick={this.increase}>
            +
          </button>
        </div>
        <div className="price">$ {data.product.itemTotal || "1"}</div>
        <div className="total">{data.product.total || "10"}</div>
        <button className="remove" onClick={this.remove}>
          X
        </button>
      </div>
    </Fragment>
  );
};

export default Cart;
