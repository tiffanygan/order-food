import React from "react";
import classes from "./MealForm.module.css";
import Input from "../../ui/input/Input";

interface MealFormProps {
  mealId: string;
}

const MealForm: React.FC<MealFormProps> = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        id={props.mealId}
        type={"number"}
        min={0}
        max={5}
        step={1}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
