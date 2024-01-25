import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const ItemCount = () => {
    const [countItem, setCountItem] = useState(0);
    const { setCount } = useContext(CartContext);

    const handleAdd = () => {
        setCountItem((prevCountItem) => prevCountItem + 1);
    };

    const handleRemove = () => {
        if (countItem > 0) {
            setCountItem((prevCountItem) => prevCountItem - 1);
        }
    };

    const handleAddToCart = () => {
        setCount((prevCount) => prevCount + countItem);
        setCountItem(0);
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                <Button onClick={handleRemove}>-</Button>
                <span>{countItem}</span>
                <Button onClick={handleAdd}>+</Button>
            </div>
            <Button onClick={() => handleAddToCart(countItem)}>Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;
