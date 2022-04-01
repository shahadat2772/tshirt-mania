import React, { createContext, useState } from "react";
import Uncle from "./../Uncle/Uncle";
import Father from "./../Father/Father";
import Aunty from "./../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("ring");

const Grandpa = () => {
  // const house = 7;
  const [house, setHouse] = useState(1);

  const handleBuyHouse = () => {
    setHouse(house + 1);
  };

  const ring = "DM RING";

  return (
    <RingContext.Provider value={ring}>
      <div className="grandpa">
        <h4>Grandpa</h4>
        <p>
          House: {house} <button onClick={handleBuyHouse}>Buy HOUSE</button>
        </p>
        <div style={{ display: "flex" }}>
          <Uncle house={house}></Uncle>
          <Father house={house}></Father>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
