import ItemList from './ItemList';
import React, {useEffect, useState} from 'react';
import {customFetch} from './customFetch';
import {useParams} from 'react-router-dom';
import data from '../data.json';


const ItemListContainer = () => {
  const[datos, setDatos]=useState([]);
  const {idCategory} = useParams();
  
  console.log(idCategory);

  useEffect(()=> {
    if (idCategory === undefined) {customFetch(2000, data)
      .then(result => setDatos(result))
      .catch(err=> console.log(err))
    }
    
   else {customFetch(2000, data.filter(item => item.categoryId === parseInt(idCategory)))
    .then(result => setDatos(result))
    .catch(err=> console.log(err))
  }
   
},[idCategory]);


  return (

    <div className="p-3 mb-2 bg-dark text-white">
      

      <ItemList items={datos}/>

    </div>

  )
}


export default ItemListContainer;