import React from "react";
import {Card} from 'react-bootstrap';
const Item =({jsonpack})=>{
  return(
    <>
        <Card  border="light"  bg="dark" style={{ width: '25rem' }} className="mb-2">
            <Card.Header>

                <Card.Img variant="top" src={jsonpack.pictureurl} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{jsonpack.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
                <Card.Text>
                    <p>{jsonpack.description}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </>


    );

};



export default Item;