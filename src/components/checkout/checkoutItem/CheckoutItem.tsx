import React from "react";
import classes from "./CheckoutItem.module.css";
import AddedFood from "../../../models/AddedFood";

interface CheckoutItemProps {
  item: AddedFood;
}

const CheckoutItem: React.FC<CheckoutItemProps> = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <span>
        <h2>{props.item.food.name}</h2>
        <span className={classes.price}>
          ${props.item.food.cost.toFixed(2)}
        </span>
        <span className={classes.amount}>x{props.item.amount}</span>
      </span>
      <span>
        <button>-</button>
        <button>+</button>
      </span>
    </div>
  );
};

export default CheckoutItem;
