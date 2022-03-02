import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 


const Item =({item})=> {
   
        return(
            <div className='detail'>
                {
                
                    <Card  border="light"  bg="dark" style={{ width: '25rem' }} className="mb-2">
                        <Card.Header>
                            <Link to={`/item/${item.index}`}>  <Card.Img variant="left" src={item.pictureurl} /></Link>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Precio:${item.price}</Card.Subtitle>
                            <Card.Text>
                                <p>{item.description}</p>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                
                }
            </div>
        );
}


 export default Item;
