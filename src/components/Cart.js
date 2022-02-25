import React from 'react';
import useCartContext from './CartContext'
import {Link} from 'react-router-dom';



const Cart = () => {
  
    const {products =[], removeItem} = useCartContext()
    

    const handleRemove = (i) => {
        removeItem(i.index)
    } 
  
    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/">
                    <button className = "continue">Continuar Comprando</button>
                </Link>
            </div>
            <div className="shopping-cart">

                {products.map((item) => (
                   
                    <div className="product">
                        <div className="product-image">
                            <img src={item.pictureurl} alt={item.index}/>
                        </div>
                        <div className="product-details">{item.title}</div> 
                        <div className="product-quantity">
                        <p>{item.quantity}</p>
                        </div>
                        <div className="product-price">{item.price}</div>
                        <div className="product-removal">
                            <button class="remove-product" onClick={()=>handleRemove(item)}>
                                remove
                            </button>
                        </div>
                    </div>
                    )
                )}

            </div>
        </section>
    
    )
}

export default Cart;