
import React, { useEffect, useState } from 'react';
import {customFetch} from './customFetch'
import ItemDetail from './ItemDetail';
import data from '../data';


const ItemDetailContainer =() => {
  
    const [dato, setDato] = useState({});

    useEffect(()=> {

        customFetch(2000, data)
        .then(result => setDato(result))
        .catch(e=> {console.log(e)})


    },[data]);
    
    return (
        <ItemDetail item={data}/>
    )
   
    
}
export default ItemDetailContainer;