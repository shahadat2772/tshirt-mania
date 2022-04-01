import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, addToCart, handleRemoveCartItem }) => {
  const { name, picture, price, _id } = tshirt;
  return (
    <div className="tShirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button
        onClick={() => {
          addToCart(_id);
        }}
      >
        ADD TO CART
      </button>
      <button
        onClick={() => {
          handleRemoveCartItem(_id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Tshirt;
