import React, { Fragment } from "react";
import Button from "../Shared/Button";
import "./style.css";

const CartItem = props => {
  return (
    <Fragment>
      <div className="cart-item">
        <img src={props.img} alt="" className="cart-img" />
        <div className="item-details">
          <div className="item-name">{props.name}</div>
          <div className="item-decs">$ {props.price}</div>
        </div>
        <div className="counters">
          <Button className="down" onClick={props.decrease} content="-" />
          <div className="amount"> {props.quantity} </div>
          <Button className="up" onClick={props.increase} content="+" />
        </div>
        <div className="price">$ {props.itemTotal}</div>
        <div className="total">{props.total}</div>
        <Button className="close" onClick={props.remove} content="x" />
      </div>
    </Fragment>
  );
};

export default CartItem;
