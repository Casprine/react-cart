import React, { Fragment } from "react";
import Button from "../Shared/Button";
import "./style.css";

const Cart = data => {
  console.log(data);

  return (
    <Fragment>
      <div className="cart-item">
        <img src={data.product.img} alt="" className="cart-img" />
        <div className="item-details">
          <div className="item-name">{data.product.name}</div>
          <div className="item-decs">$ {data.product.price}</div>
        </div>
        <div className="counters">
          <Button className="down" onClick={data.decrease} content="-" />
          <div className="amount"> {data.quantity} </div>
          <Button className="up" onClick={data.increase} content="+" />
        </div>
        <div className="price">$ {data.itemTotal}</div>
        <div className="total">{data.total}</div>
        <Button className="close" onClick={data.remove} content="x" />
      </div>
    </Fragment>
  );
};

export default Cart;
