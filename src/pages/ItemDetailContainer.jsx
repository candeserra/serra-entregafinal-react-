import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import ItemCount from '../components/ItemCount/ItemCount.jsx';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { productId } = useParams();
    const { productData } = useGetProductById('products', productId);
    const { handleAddToCart } = useContext(CartContext);


    const handleAddToCartClick = () => {
        handleAddToCart(productData); 
    };

    return (
        <Card key={productData.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={productData.thumbnail} alt={productData.title} />
            
            <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text>{productData.description}</Card.Text>
                <div>{productData.price}</div>
                <ItemCount />
                <Button variant="primary" onClick={handleAddToCartClick}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetailContainer;
