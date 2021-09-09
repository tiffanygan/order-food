import React, { useContext } from "react";
import classes from "./Cart.module.css";
import AddedFood from "../../../models/AddedFood";
import CheckoutItem from "../checkoutItem/CheckoutItem";
import CartContext from "../../../store/cart-context";

interface CartProps {
  addedItems: AddedFood[];
  onHideCheckout: (showCheckout: boolean) => void;
}

const Cart: React.FC<CartProps> = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <ul className={classes["cart-items"]}>
        {props.addedItems.map((item) => (
          <li key={item.food.id}>
            <CheckoutItem item={item} />
          </li>
        ))}
      </ul>
      <span className={classes.total}>
        <p>Total price:</p>
        <p>${cartContext.cart.getTotalPrice().toFixed(2)}</p>
      </span>
      <div className={classes.actions}>
        <button onClick={() => props.onHideCheckout(false)}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
