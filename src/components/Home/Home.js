import React, { useState } from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const [tshitrs, setTshirts] = useTshirts();

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const selectedShirt = tshitrs.find((shirt) => shirt._id === id);
    const exists = cart.find((shirt) => shirt._id === selectedShirt._id);
    if (!exists) {
      selectedShirt["quantity"] = 1;
      setCart([...cart, selectedShirt]);
    } else {
      const rest = cart.filter((shirt) => shirt._id !== exists._id);
      exists.quantity = exists.quantity + 1;
      setCart([...rest, exists]);
    }
  };

  const handleRemoveCartItem = (id) => {
    let newCart = cart.filter((shirt) => shirt._id !== id);
    setCart(newCart);
  };

  return (
    <div className="homeContainer">
      {/* <h1>This home</h1> */}
      <div className="tshirtContainer">
        {tshitrs.map((tshirt) => (
          <Tshirt
            handleRemoveCartItem={handleRemoveCartItem}
            key={tshirt._id}
            addToCart={addToCart}
            tshirt={tshirt}
          ></Tshirt>
        ))}
      </div>
      <div className="cartContainer">
        <Cart handleRemoveCartItem={handleRemoveCartItem} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
