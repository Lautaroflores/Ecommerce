import React from 'react';

import {Card} from 'react-bootstrap';
import Item from './Item'


const ItemList = ({items}) =>{
    console.log(items);
    return (
        <>
            <Card/>
                {items.map(item=>
           
                <Item key={item.id} jsonpack={item} />

            )}
        </>
    )
}

export default ItemList;
