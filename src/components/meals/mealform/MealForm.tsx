import React, { useContext, useRef, useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../../ui/input/Input";
import CartContext from "../../../store/cart-context";
import AddedFood from "../../../models/AddedFood";
import MealModel from "../../../models/MealModel";

interface MealFormProps {
  meal: MealModel;
}

const MealForm: React.FC<MealFormProps> = (props) => {
  const [cartState, setCartState] = useState(new Array<AddedFood>());
  const context = useContext(CartContext);

  context.cart = cartState;
  context.setAmountHandler(
    cartState
      .map((item) => item.amount)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  );

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCartState((prevCart) => [
      ...prevCart,
      new AddedFood(props.meal, +inputRef.current!.value),
    ]);
    inputRef.current!.value = "1";
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        id={props.meal.id}
        type={"number"}
        ref={inputRef}
        defaultValue={1}
      />
      <button onClick={clickHandler}>+ Add</button>
    </form>
  );
};

export default MealForm;
