import React, { Fragment } from "react";
import "./style.css";
const CheckoutButton = ({ totalPrice }) => {
  return (
    <Fragment>
      <button> {totalPrice} </button>
    </Fragment>
  );
};

export default CheckoutButton;
