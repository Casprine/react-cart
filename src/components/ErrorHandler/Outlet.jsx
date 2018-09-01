import React from "react";

const ErrorHandler = props => {
  return (
    <div className="ErrorHandler">
      <span>{props.message}</span>
    </div>
  );
};
export default ErrorHandler;
