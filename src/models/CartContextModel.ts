import AddedFood from "./AddedFood";

export default class CartContextModel {
  constructor(private _cart: Map<string, AddedFood>) {}

  get cart(): Map<string, AddedFood> {
    return this._cart;
  }

  set cart(value: Map<string, AddedFood>) {
    this._cart = value;
  }

  addFood(food: AddedFood) {
    console.log(this.cart.get(food.food.id));

    this.cart.set(
      food.food.id,
      new AddedFood(
        food.food,
        food.amount +
          (this.cart.has(food.food.id)
            ? this.cart.get(food.food.id)!.amount
            : 0)
      )
    );

    console.log(this.cart.get(food.food.id));
    return this;
  }

  clone() {
    return new CartContextModel(this.cart);
  }

  getTotalAmount() {
    return Array.from(this.cart.entries())
      .map((entry: [string, AddedFood]) => entry[1].amount)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  getTotalPrice() {
    return Array.from(this.cart.entries())
      .map((entry) => entry[1])
      .map((food) => food.food.cost * food.amount)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
}
