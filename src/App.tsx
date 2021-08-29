import React from "react";
import Navbar from "./components/navbar/Navbar";
import Meals, { burger, sushi } from "./components/meals/Meals";
import Modal from "./components/ui/modal/Modal";
import AddedFood from "./models/AddedFood";
import Cart from "./components/checkout/cart/Cart";

function App() {
  const cart = [new AddedFood(sushi, 3), new AddedFood(burger, 2)];

  return (
    <div>
      <Navbar />
      <Meals />
      <Modal>
        <Cart addedItems={cart} />
      </Modal>
    </div>
  );
}

export default App;
