import ItemList from './ItemList';
import React, {useEffect, useState} from 'react';
import { collection, getDocs } from "firebase/firestore";
import {useParams} from 'react-router-dom';
import db from './firebaseConfig';


const ItemListContainer = () => {
  const[datos, setDatos]=useState([]);
  const {idCategory} = useParams();
  
  console.log(idCategory);

  useEffect(()=> {
    const firestoreFetch = async()=>{
      const querySnapshot = await getDocs(collection(db, "guitars"));
      return querySnapshot.docs.map( document => ({
        id: document.id,
        ...document.data()
      }))
       
    }
    firestoreFetch()
      .then(result=>setDatos(result))
      .catch(error=> console.log(error));
 
},[datos]);

  useEffect(()=> {
    return(()=>{
      setDatos([])
    })
  }, []);

  return (

    <div className="p-3 mb-2 bg-dark text-white">
      

      <ItemList items={datos}/>

    </div>

  )
}


export default ItemListContainer;