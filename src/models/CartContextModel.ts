import AddedFood from "./AddedFood";

export default class CartContextModel {
  constructor(
    private _cart: AddedFood[],
    private _setAmountHandler: (amount: number) => void
  ) {}

  get setAmountHandler(): (amount: number) => void {
    return this._setAmountHandler;
  }

  set setAmountHandler(value: (amount: number) => void) {
    this._setAmountHandler = value;
  }

  get cart(): AddedFood[] {
    return this._cart;
  }

  set cart(value: AddedFood[]) {
    this._cart = value;
  }
}
