import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import data from '../data.json';
import ItemDetail from './ItemDetail' ;

const getItem = (itemId) => {
    return new Promise(result =>  setTimeout(() => 
        { result(data.find(item =>
            item.id===parseInt(itemId)))  
        },500)) 
} 

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);

    const {itemId} = useParams();

    useEffect(() =>{
        setLoading(true);
        getItem(itemId).then((item) => {
            setItem(item);
            setLoading(false)    
        });

    }, [itemId])


    return(
        <>

        {loading ? "Cargando Información..." : <ItemDetail item={item} />}

        </>

)   
}
export default ItemDetailContainer;