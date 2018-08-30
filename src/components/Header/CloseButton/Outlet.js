import React, { Fragment } from "react";
import "./style.css";

const HeaderButton = ({ content, classname }) => {
  return (
    <Fragment>
      <button className={classname}> {content} </button>
    </Fragment>
  );
};

export default HeaderButton;
