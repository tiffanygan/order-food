import React, { useContext, useRef } from "react";
import classes from "./MealForm.module.css";
import Input from "../../ui/input/Input";
import CartContext from "../../../store/cart-context";
import AddedFood from "../../../models/AddedFood";
import MealModel from "../../../models/MealModel";

interface MealFormProps {
  meal: MealModel;
}

const MealForm: React.FC<MealFormProps> = (props) => {
  let context = useContext(CartContext);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.cart = [
      ...context.cart,
      new AddedFood(props.meal, +inputRef.current!.value),
    ];
    context.setAmountHandler(
      context.cart
        .map((item) => item.amount)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        )
    );
    inputRef.current!.value = "0";
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        id={props.meal.id}
        type={"number"}
        ref={inputRef}
      />
      <button onClick={clickHandler}>+ Add</button>
    </form>
  );
};

export default MealForm;
