import React, { Fragment } from "react";
import "./style.css";

const CheckoutButton = ({ content, totalPrice }) => {
  return (
    <Fragment>
      <button class="checkoutButton">
        <span> {content} </span>
        <span class="totalPrice" > ${totalPrice} </span>
      </button>
    </Fragment>
  );
};

export default CheckoutButton;
