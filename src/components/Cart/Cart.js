import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
const Cart = ({ cart, handleRemoveCartItem }) => {
  // Conditional Rendaring
  // 1. Element variable
  // 2. Ternary operator condition
  let command;
  if (cart.length === 0) {
    command = <p>Please ADD at least one items </p>;
  } else if (cart.length === 1) {
    command = <p>Please ADD more item</p>;
  } else {
    command = <p> Thanks for adding </p>;
  }
  let price = 0;
  let quantity = 0;
  for (const shitrs of cart) {
    price = price + shitrs.price * shitrs.quantity;
    quantity = quantity + shitrs.quantity;
  }

  console.log(cart);
  return (
    <div>
      <h2>Item Selected: {quantity}</h2>

      {cart.map((shirt) => (
        <CartItem
          key={shirt._id}
          handleRemoveCartItem={handleRemoveCartItem}
          shirt={shirt}
        ></CartItem>
      ))}
      {/* {command} */}
      {/* {cart.length < 4 ? <p>Keep Adding</p> : <button>Remove All</button>} */}
      {/* {cart.length >= 4 && <button>Remove All</button>} */}
      {cart.length <= 4 || <button>Remove All</button>}
    </div>
  );
};

export default Cart;
