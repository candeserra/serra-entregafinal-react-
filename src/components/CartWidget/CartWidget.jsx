import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { count } = useContext(CartContext);

    return (
        <div>
            <FaShoppingCart style={{ fontSize: '24px', marginRight: '5px' }} />
            <span>{count}</span>
        </div>
    );
};

export default CartWidget;
