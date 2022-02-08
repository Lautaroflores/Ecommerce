import Container from '@mui/material/Container';
import ItemCount from './ItemCount';


const ItemListContainer=({greeting})=> {
  return (
    <div>
      <Container>
        {greeting}
      <ItemCount/>
      </Container>
    </div>
    
  );
}

export default ItemListContainer;