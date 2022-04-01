import React from "react";
import "./CartItem.css";

const CartItem = ({ shirt, handleRemoveCartItem }) => {
  const { name, quantity, _id } = shirt;
  return (
    <div className="CartItem">
      <p>{shirt.name}</p>
      <button
        onClick={() => {
          handleRemoveCartItem(_id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
