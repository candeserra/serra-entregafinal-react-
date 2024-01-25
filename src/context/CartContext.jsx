import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = (countItem) => {
        setCartCount(cartCount + countItem);
        setCount(0);
    };
    
    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <CartContext.Provider value={{ count, setCount, cartCount, handleAdd, handleRemove, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};
