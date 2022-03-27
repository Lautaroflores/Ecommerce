import React, { useEffect, useState } from "react";

const ItemCount = ({ stocks, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count <= stocks) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count >= 0) {
      setCount(count - 1);
    }
  };

  useEffect (() => {
    onAdd(count);
  }, [count]);

 
  return (
    <div className="card-count">
      <h5>Cantidad:</h5>
      <div className="grid">
        <button
          className="column product-subtract"
          onClick={decrease}
          disabled={count === 0}
        >
          -
        </button>
        <div className="column product-qty">{count}</div>
        <button
          className="column product-plus"
          onClick={increase}
          disabled={count === stocks}
        >
          +
        </button>
      </div>
      <p>Unidades Disponibles: {stocks - count}</p>
    </div>
  );
};

export default ItemCount;
