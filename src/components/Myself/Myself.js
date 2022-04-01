import React, { useContext } from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h4>ME</h4>
      <p>
        <small>House: {house}</small>
        <Special></Special>
      </p>
    </div>
  );
};

export default Myself;
