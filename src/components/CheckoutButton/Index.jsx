import React, { Fragment } from "react";
import "./style.css";

const CheckoutButton = ({ content, totalPrice }) => {
  return (
    <Fragment>
      <button className="checkoutButton">
        <span className="content"> {content} </span>
        <span className="totalPrice"> ${totalPrice} </span>
      </button>
    </Fragment>
  );
};

export default CheckoutButton;
