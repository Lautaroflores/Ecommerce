
import React, { useEffect, useState } from 'react';
import {customFetch} from './customFetch'
import ItemDetail from './ItemDetail';

const {products} = require ('../data.js');

const ItemDetailContainer =() => {
    const [data, setData] = useState({});

    useEffect(()=> {
        customFetch(2000, products[1])
        .then(result => setData(result))
        .catch(err=> console.log(err))
    },[])

    return (
        <ItemDetail item={products}/>
    )
}


export default ItemDetailContainer;