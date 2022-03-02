import React, {useState} from "react"


const ItemCount = ({stocks,  initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(stocks)

    const increase = () => { 
        if(count < stocks){
            setCount(count + 1)
            setStock(stock - 1)
            console.log(count)
        }

    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
            setStock(stock + 1)
        }

    }

    onAdd(count)

    return(
        <div className="card-count">
            <h5>Cantidad:</h5>
            <div className="grid">
              <button className="column product-subtract" onClick={decrease} disabled={count === initial} >-</button>
              <div className="column product-qty">{count}</div>
              <button className="column product-plus" onClick={increase} disabled={count === stock} >+</button>
            </div>
            <p>Unidades Disponibles: {stock-initial}</p>
        </div>
    )
}
export default ItemCount;