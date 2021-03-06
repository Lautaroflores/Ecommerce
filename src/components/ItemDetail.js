import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import useCartContext from "./CartContext";

const ItemDetail = (props) => {
    const {item} = props
  const { stock } = item;
  const [add, setAdd] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartContext();



  const itemQuantity = (count) => {
    setQuantity(count);
  };
  const addToCart = () => {
    addItem(item, quantity);
    setAdd(true);
  };
  return (
    <div className="card-product-detail">
      <div className="img-detail">
        <img src={item.pictureurl} alt={item.id} width="350" />
      </div>
      <div className="info-detail">
        <h3>{item.title}</h3>
        <p className="card-description">{item.description}</p>
        <p className="card-price">{item.price}</p>
        <ItemCount stocks={stock} initial={quantity} onAdd={itemQuantity} />
        <button className="btn" onClick={addToCart}>
          Agregar al Carrito
        </button>
        {add ? (
          <Link to={"/cart"}>
            <button className="btn">Comprar Ahora</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default ItemDetail;
