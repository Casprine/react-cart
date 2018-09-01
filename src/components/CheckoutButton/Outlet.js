import React, { Fragment } from "react";
import "./style.css";
const CheckoutButton = props => {
  return (
    <Fragment>
      <button> {props.totalPrice} </button>
    </Fragment>
  );
};

export default CheckoutButton;
