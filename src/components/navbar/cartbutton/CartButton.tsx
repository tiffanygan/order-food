import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../../ui/carticon/CartIcon";
import CartContext from "../../../store/cart-context";

interface ButtonProps {
  onClick: (showCheckout: boolean) => void;
}

const CartButton: React.FC<ButtonProps> = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <div className={classes.button} onClick={() => props.onClick(true)}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      Checkout
      <span className={classes.badge}>{cartContext.cart.getTotalAmount()}</span>
    </div>
  );
};

export default CartButton;
