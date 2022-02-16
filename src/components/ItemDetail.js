 import React from "react";

 import Card from "react-bootstrap/Card";

import ItemCount from "./ItemCount";

 const ItemDetail =({item})=> {
  
 
     return (
    
     <div className="d-flex justify-content-center mt-3">
       <Card border="success" style={{ width: "75%" }}>
         <Card.Body>
           <img src={item.pictureurl} alt={item.title} />
         </Card.Body>
       </Card>
       <Card border="success" style={{ width: "18rem" }}>
         <Card.Body>
           <Card.Title>{item.title}</Card.Title>
           <Card.Text>
             {item.description}
             <br />
             <strong>Precio: ${item.price}.</strong>
             <br />            
           </Card.Text>
         </Card.Body>
         <ItemCount/> 
       </Card>
     </div>
   );

  };

 export default ItemDetail;