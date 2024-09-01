import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartProvider";

const Items = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <h1>Item: {props.name}</h1>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </>
  );
};

export default Items;
