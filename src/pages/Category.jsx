import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useGetProductByCategory } from '../hooks/useProducts';

const Category = () => {
    const { category } = useParams();
    const { productsData } = useGetProductByCategory(category);

    return (
        <div>
            <h2>Category: {category}</h2>
            <ItemListContainer productsData={productsData} />
        </div>
    );
};

export default Category;
