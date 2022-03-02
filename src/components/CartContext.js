import React, {createContext, useState, useContext} from 'react'


const StoreContext = createContext()
const useCartContext = () => {useContext(StoreContext)}
export const CartContextProvider = ({children}) =>{

    const [products, setProducts] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    const addItem = (item, quantity) => {
        const inCartList = products.find((i) => i.index === item.index)
        setIsInCart(true)
        if(inCartList){
            inCartList.quantity += quantity
            setProducts([...products])
        } else {
            setProducts([...products, {...item, quantity}])
        }
    }
    const removeItem = (index) => {
        products.splice(
            products.findIndex((i) => i.index === index), 1
        )
        setProducts([...products])
        if(products.length === 0){
            setIsInCart(false)
        }
    }

    const totalProductsPrice = () => {
        return (
            products.reduce((add, i) => (add += i.price * i.quantity), 0)
            );

    };

    function cartWidgetCount() {
        return(
             products.reduce((add, i) => (add += i.quantity), 0)
        )
    }


    return(
        <StoreContext.Provider 
        value = {{ products, addItem, removeItem, totalProductsPrice, isInCart, cartWidgetCount }}>
            {children}
        </StoreContext.Provider>
    )
}
export default useCartContext