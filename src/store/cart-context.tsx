import React, { createContext, useState } from "react";
import CartContextModel from "../models/CartContextModel";
import AddedFood from "../models/AddedFood";

const CartContext = createContext({
  cart: new CartContextModel(new Map<string, AddedFood>()),
  addFoodHandler: (addedFood: AddedFood) => {},
});

export const CartContextProvider: React.FC = (props) => {
  const [cartState, setCartState] = useState(
    new CartContextModel(new Map<string, AddedFood>())
  );
  const addFoodHandler = (addedFood: AddedFood) => {
    setCartState((prevState) => {
      console.log(prevState.cart);
      return prevState.addFood(addedFood).clone();
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addFoodHandler: addFoodHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
