import React from "react"


const ItemCount = ({stock, initial, count, increase, decrease, onAdd}) =>{



    return(
        <div className="card-count">
            <h5>Cantidad:</h5>
            <div className="_grid">
              <button className="_btn _column product-subtract" onClick={decrease} disabled={count === initial} >-</button>
              <div className="_column product-qty">{count}</div>
              <button className="_btn _column product-plus" onClick={increase} disabled={count === stock} >+</button>
            </div>
            <button className="_btn product-add" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount