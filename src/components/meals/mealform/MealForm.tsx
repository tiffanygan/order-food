import React, { FormEvent, useContext, useRef } from "react";
import classes from "./MealForm.module.css";
import Input from "../../ui/input/Input";
import CartContext from "../../../store/cart-context";
import AddedFood from "../../../models/AddedFood";
import MealModel from "../../../models/MealModel";

interface MealFormProps {
  meal: MealModel;
}

const MealForm: React.FC<MealFormProps> = (props) => {
  const context = useContext(CartContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("add food");
    context.addFoodHandler(new AddedFood(props.meal, 1));
    inputRef.current!.value = "1";
  };

  return (
    <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
      <Input
        label={"Amount"}
        id={props.meal.id}
        type={"number"}
        ref={inputRef}
        defaultValue={1}
      />
      <button type={"submit"}>+ Add</button>
    </form>
  );
};

export default MealForm;
