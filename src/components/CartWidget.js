import Badge from '@material-ui/core/Badge';

import {AiOutlineShoppingCart} from "react-icons/ai";

const CartWidget = () => {
    return (
        <Badge badgeContent={2} color="secondary">
            <AiOutlineShoppingCart/>
        </Badge>
    )
}

export default CartWidget;