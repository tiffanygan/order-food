import React from "react";
import MealModel from "../../models/MealModel";
import classes from "./Meals.module.css";
import MealItem from "./mealitem/MealItem";
import Card from "../ui/card/Card";

interface MealsProps {}

export const sushi = new MealModel(
  "m1",
  "Sushi",
  "Finest fish and veggies",
  22.99
);
export const schnitzel = new MealModel(
  "m2",
  "Schnitzel",
  "A German specialty!",
  16.5
);
export const burger = new MealModel("m3", "Burger", `Daddy's favorite!`, 12.99);

const Meals: React.FC<MealsProps> = (props) => {
  const mealsArray = [sushi, schnitzel, burger];
  console.log("in Meals");

  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {mealsArray.map((meal) => (
            <MealItem meal={meal} key={meal.id} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Meals;
