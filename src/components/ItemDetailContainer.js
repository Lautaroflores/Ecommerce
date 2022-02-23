
import React, { useEffect, useState } from 'react';
import {customFetch} from './customFetch'
import ItemDetail from './ItemDetail';
import data from '../data.json';
import {useParams} from 'react-router-dom';

const ItemDetailContainer =() => {
    const {id} = useParams();
    const [dato, setDato] = useState({});

    useEffect(()=> {

        customFetch(2000, data)
        .then(result => {console.log(result);
            const item = result.find(elem=>elem.index === id)
            setDato(item)})
        .catch(e=> console.log(e))


    },[id])

    useEffect(()=> {
        console.log(dato);

    }, [dato])
    
    return (
      
      <ItemDetail item={dato}/>
      
    )
   
    
}
export default ItemDetailContainer;