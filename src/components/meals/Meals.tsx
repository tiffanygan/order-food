import React from "react";
import MealModel from "../../models/MealModel";
import classes from "./Meals.module.css";

interface MealsProps {}

const Meals: React.FC<MealsProps> = (props) => {
  const sushi = new MealModel("m1", "Sushi", "Finest fish and veggies", 22.99);
  const schnitzel = new MealModel(
    "m2",
    "Schnitzel",
    "A German specialty!",
    16.5
  );
  const burger = new MealModel("m3", "Burger", `Daddy's favorite!`, 12.99);
  const mealsArray = [sushi, schnitzel, burger];

  return (
    <div className={classes.meals}>
      <ul>
        {mealsArray.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
