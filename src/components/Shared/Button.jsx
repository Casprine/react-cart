import React, { Fragment } from "react";
import "./style.css";

const Button = ({ content, classname, handler }) => {
  return (
    <Fragment>
      <button class={classname} onClick={handler}>
        {" "}
        {content}{" "}
      </button>
    </Fragment>
  );
};

export default Button;