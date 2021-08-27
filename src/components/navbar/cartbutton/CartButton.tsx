import React, { Fragment } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../../ui/carticon/CartIcon";

interface ButtonProps {}

const CartButton: React.FC<ButtonProps> = (props) => {
  return (
    <Fragment>
      <div className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        Checkout
        <span className={classes.badge}>3</span>
      </div>
    </Fragment>
  );
};

export default CartButton;
