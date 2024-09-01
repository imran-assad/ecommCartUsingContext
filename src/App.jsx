import { CartProvider } from "./components/CartProvider";
import Items from "./components/Items";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Items name="Apple" price={10000} />
      <Items name="Orange" price={2500} />
      <Items name="Mango" price={3000} />
      <CartProvider />
      <Cart />
    </>
  );
}

export default App;
