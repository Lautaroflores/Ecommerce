import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import useCartContext from "./CartContext";
import ItemCount from "./ItemCount";


const ItemDetail =({item})=> {
  const stocks = 10
  const initial = 1
  const [stock, setSotck] = useState(stocks)
  const [count, setCount] = useState(initial)
  const [add, setAdd] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const { addItem } = useCartContext()

  const increase = () => { 
    if(count < stocks){
      setCount(count + 1)
      setSotck(stock - 1)
    }
  }

  const decrease = () => { 
    if(count > initial){
      setCount(count - 1)
      setSotck(stock + 1)
    }
  }

  const onAdd = () =>{
    if (count <= stocks){
      setAdd(true)
      setQuantity(count)
    }console.log(quantity)
  };

  const addToCart =() => {
    addItem(item, quantity)
    console.log(quantity)
  }

    return (
    
    <div className="d-flex justify-content-center mt-3"style={{ backgroundColor: "#212529"}}>
      <Card border="success" style={{ width: "35%" }}>
        <Card.Body>
          <img src={item.pictureurl} alt={item.title} />
        </Card.Body>
      </Card>
      <Card border="success" style={{ width: "35%" }} >
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
            <br />
            <strong>Precio: ${item.price}.</strong>
            <br />            
          </Card.Text>
        </Card.Body>

        <>
          <ItemCount stock={stocks}
            initial={initial}
            count={count}
            increase={increase}
            decrease={decrease}
            onAdd={onAdd}
          />
  
          
        </>
      </Card>
      {add ? <Link to= {'/cart'}><button className="btn-finalizar" onClick={addToCart}>Comprar Ahora</button></Link> : null}
    </div>
    
  )
      
};

 export default ItemDetail;