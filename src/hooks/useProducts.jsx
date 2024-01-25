import { useState, useEffect } from "react";
import { getProductByCategory } from "../services";

import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";




export const useGetProducts = (collectionName = "products") => {
    const [productsData, setProductsData] = useState([]);

    useEffect (() => {
        const db = getFirestore();
        const productsCollection = collection (db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            );
        });
    }, []);

    return { productsData }
};

export const useGetProductById = (collectionName = "products", id) => {
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, collectionName, id);

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })

    }, [id]);

    return { productData }

}

export const useGetProductByCategory = (category) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductByCategory(category)
        .then((response) => {
            console.log(response);
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [category]);

    return { productsData }

}