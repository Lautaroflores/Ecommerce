import React, { useState } from 'react';
import useCartContext from './CartContext'
import {Link} from 'react-router-dom';

import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import Formulario from './Formulario';


const Cart = () => {
    const {products, removeItem, totalProductsPrice, isInCart, cleanListCart} = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const handleRemove = (i) => {
        removeItem(i.id)
    }

    const handleFinalize = () =>{
        setShowForm(true)
    }


    async function createOrder(buyer){

   
        const newOrder = {
            buyer,
            products,
          
            total: totalProductsPrice()
        }
        
        const db = getFirestore()
        const orders = db.collection('order')

        try {
            const doc = await orders.add(newOrder)
            setOrderId(doc.id)
            setConfirmation(true)

        } catch(e){
            console.log("Error creando la orden: ", e)
        }
    }

 
    if(confirmation){
        alert('Su No. de Orden ' + orderId + ' ha sido confirmada')
        cleanListCart()
    }


    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continue">Continuar Comprando</button>
                </Link>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={item.pictureurl} alt={item.id}/>
                        </div>
                        <div className="product-details">{item.title}</div> 
                        <div className="product-quantity">
                           Quantity: {item.quantity}
                        </div>
                        <div className="product-price">Price by unit: ${item.price}</div>
                        <div className="product-removal">
                            <button class="remove-product" onClick={()=>handleRemove(item)}>
                                Remove
                            </button>
                        </div>
                        <div className="product-line-price"> Total Product:${item.quantity*item.price}</div>
                    </div>
                    )
                )}

            </div>
            {isInCart ?
                <div className="totals" >
                    <div class="totals-item">
                        <label>Subtotal</label>
                        <div class="totals-value">${totalProductsPrice()}</div>
                    </div>
                    <div class="totals-item">
                        <label>Costo de envío</label>
                        <div class="totals-value">$5000</div>
                    </div>
                    <div class="totals-item-t-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">${totalProductsPrice() + 5000}</div>
                    </div>
                    <div className="totals-item">
                        <button className ="checkout" onClick={handleFinalize}>Iniciar Compra</button>
                    </div>
                    {showForm ? <Formulario createOrder={createOrder}/> : null}
                </div>
                : <div className='noItem'>...No hay productos agregados al Carrito...</div>
            }

        </section>
    )
}
export default Cart;