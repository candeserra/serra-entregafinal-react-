import React, { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    const { productsData } = useGetProducts('products');

    return <ItemListContainer productsData={productsData} />;
};

export default Home;
