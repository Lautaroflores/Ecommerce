
import React, { useEffect, useState } from 'react';
import {customFetch} from './customFetch'
import ItemDetail from './ItemDetail';
import data from '../data'

const {products} = require ('../data.js');

const ItemDetailContainer =() => {
  
    const [data, setData] = useState({});

    useEffect(()=> {
        customFetch(2000, products[1])
        .then(result => setData(result))
        .catch(err=> console.log(err))
    },[])
     
    return (
        data ?  <ItemDetail item={products}/>:console.log("error")
    )
   
    }

export default ItemDetailContainer;