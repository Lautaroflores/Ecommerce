import Badge from '@material-ui/core/Badge';

import {AiOutlineShoppingCart} from "react-icons/ai";
import useCartContext from './CartContext';
import {Link} from 'react-router-dom';

    const CartWidget = () => {
        const {cartWidgetCount, isInCart} = useCartContext()
    
            return(
                <>
                {isInCart ? 
                    <Link to= {'/cart'} className='cart-widget'>
                    <div className="cart-icon">
                        <Badge badgeContent={cartWidgetCount()} color="secondary">
                            <AiOutlineShoppingCart/>
                        </Badge>    
                    </div>
                    </Link>
                    : null
                }
                </>
            )
    }

export default CartWidget;
