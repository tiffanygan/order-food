import React from "react";
import MealModel from "../../models/MealModel";
import classes from "./Meals.module.css";
import MealItem from "./mealitem/MealItem";
import Card from "../ui/card/Card";

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
