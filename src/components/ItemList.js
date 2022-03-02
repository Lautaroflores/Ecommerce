import React from 'react';

import {Card} from 'react-bootstrap';
import Item from './Item'


const ItemList = ({items}) =>{
    console.log(items);
    return (

        <>
            
            <Card>
                {items.map((item, index)=>
          
                    <Item key={index} item={item} />
                
                )}
            </Card>
             
        </>
    )
}

export default ItemList;
