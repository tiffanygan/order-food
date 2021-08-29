import MealModel from "./MealModel";

export default class AddedFood {
  constructor(private _food: MealModel, private _amount: number) {}

  get food(): MealModel {
    return this._food;
  }

  set food(value: MealModel) {
    this._food = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }
}
