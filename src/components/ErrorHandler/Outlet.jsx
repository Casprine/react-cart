import React from "react";
import "./style.css";
const ErrorHandler = props => {
  return (
    <div className="ErrorHandler">
      <span className="error">{props.message}</span>
    </div>
  );
};
export default ErrorHandler;
