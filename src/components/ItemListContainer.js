import ItemList from './ItemList';
import jsonpack from '../data.json';
import React, {useState} from 'react';


const ItemListContainer = ({name}) => {
  const[item,setItems]=useState([])
  const call = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(jsonpack)
    },2000)
  })

  call.then(response=> {
    setItems(response)
  })
  
  return (

    <div name="test">



    <div class="p-3 mb-2 bg-dark text-white">
      {name}

      <ItemList items={item}/>

    </div>


    </div>
  )
}


export default ItemListContainer;