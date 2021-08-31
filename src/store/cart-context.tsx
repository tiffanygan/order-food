import React, { createContext } from "react";
import CartContextModel from "../models/CartContextModel";

const CartContext = createContext(new CartContextModel([], () => {}));

export const CartContextProvider: React.FC = (props) => {
  return (
    <CartContext.Provider value={new CartContextModel([], () => {})}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
