import React, {createContext, useState, useContext} from 'react';

const StoreContext = createContext()
const useCartContext = () => useContext(StoreContext)


export const StoreProvider = ({children}) =>{

    const [products, setproducts] = useState([])

    const addItem = (item, quantity) => {
        const inCartList = products.find((i) => i.index === item.index)

        if(inCartList){
            inCartList.quantity += quantity
            setproducts([products])
        } else {
            setproducts([products, {item, quantity}])
        }
    }

    const removeItem = (index) => {
        products.splice(
            products.findIndex((i) => i.index === index), 1
        )
        setproducts([products])
    }
    
    return(
        <StoreContext.Provider 
            value = {{ products, addItem, removeItem }}>
                {children}
        </StoreContext.Provider>
    )

}
export default useCartContext