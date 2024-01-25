import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Home from '../pages/Home';
import Category from '../pages/Category';
import ItemDetailContainer from "../pages/ItemDetailContainer";

export const MainRouter = () => {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/item/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
};