import { useEffect, useState } from "react";

const useTshirts = () => {
  const [tshitrs, setTshirts] = useState([]);

  useEffect(() => {
    fetch("tshirt.json")
      .then((res) => res.json())
      .then((data) => setTshirts(data));
  }, []);

  return [tshitrs, setTshirts];
};

export default useTshirts;
