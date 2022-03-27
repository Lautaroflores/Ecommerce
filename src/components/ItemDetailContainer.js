import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail' ;
import  firestoreFetchOne  from './firestoreFetch';


const ItemDetailContainer =() => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        firestoreFetchOne(id)
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