import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail' ;
import  firestoreFetchOne  from './firestoreFetch';


const ItemDetailContainer =() => {
    const [item, setItem] = useState({});
    const {idItem} = useParams();

    useEffect(()=> {
        firestoreFetchOne(idItem)
        .then(result => setItem(result))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
            <ItemDetail item={item} />
        </>

    );
};
export default ItemDetailContainer;