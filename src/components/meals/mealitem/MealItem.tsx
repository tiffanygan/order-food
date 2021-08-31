import React from "react";
import classes from "./MealItem.module.css";
import MealModel from "../../../models/MealModel";
import MealForm from "../mealform/MealForm";

interface MealItemProps {
  meal: MealModel;
}

const MealItem: React.FC<MealItemProps> = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>${props.meal.cost}</p>
      </div>
      <MealForm meal={props.meal} />
    </li>
  );
};

export default MealItem;
