
import { useState } from 'react';

function ItemCount() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);
  
    return (
      <>
        <p>You clicked {count} times</p>
        <button disabled ={count >4} onClick={() => setCount(count + 1)}>
         +
        </button>
      
        <button disabled={count < 1 } onClick={() => setCount(count - 1)}>
          -
        </button>
        
      </>
    );
  }
  

export default ItemCount;