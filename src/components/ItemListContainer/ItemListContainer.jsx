import React from "react";
import "./ItemListContainer.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemListContainer = ({ productsData }) => {
return (
    <div className="card-container">
        {productsData.map((products) => (
        <div key={products.id} className="card-wrapper">
            <Card style={{ width: '18rem', height: '400px', margin: '10px' }}>
                <Link to={`/item/${products.id}`}>
                <Card.Img variant="top" src={products.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />
                </Link>
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>{products.price}</Card.Text>
                    <ItemCount />
                </Card.Body>
        </Card>
        </div>
    ))}
    </div>
    );
};

export default ItemListContainer;
