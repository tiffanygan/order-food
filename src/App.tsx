import React, { useContext, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Meals from "./components/meals/Meals";
import Modal from "./components/ui/modal/Modal";
import Cart from "./components/checkout/cart/Cart";
import CartContext, { CartContextProvider } from "./store/cart-context";

function App() {
  const cartContext = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <CartContextProvider>
      <div>
        <Navbar onShowCheckout={setShowCheckout} />
        <Meals />
        {showCheckout && (
          <Modal onHideCheckout={setShowCheckout}>
            <Cart
              addedItems={Array.from(cartContext.cart.cart.entries()).map(
                (entry) => entry[1]
              )}
              onHideCheckout={setShowCheckout}
            />
          </Modal>
        )}
      </div>
    </CartContextProvider>
  );
}

export default App;
