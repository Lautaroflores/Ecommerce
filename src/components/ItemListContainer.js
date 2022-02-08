import Container from '@mui/material/Container';
import Example from './ItemCount.Js';

const ItemListContainer=({greeting})=> {
  return (
    <div>
      <Container>
        {greeting}
      <Example/>
      </Container>
    </div>
    
  );
}

export default ItemListContainer;