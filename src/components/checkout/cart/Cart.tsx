import React from "react";
import classes from "./Cart.module.css";
import AddedFood from "../../../models/AddedFood";
import CheckoutItem from "../checkoutItem/CheckoutItem";

interface CartProps {
  addedItems: AddedFood[];
}

const Cart: React.FC<CartProps> = (props) => {
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
        <p>
          $
          {props.addedItems.reduce(
            (prevValue, currItem) =>
              +(currItem.amount * currItem.food.cost).toFixed(2) + prevValue,
            0
          )}
        </p>
      </span>
      <div className={classes.actions}>
        <button>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
