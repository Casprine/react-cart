import React, { Fragment } from "react";
import CartItem from "../CartItem/Index"

const CartContainer = (props) => {
    return(
        <Fragment>
            <CartItem props={...props} />
        </Fragment>
    )
}

export default CartContainer;