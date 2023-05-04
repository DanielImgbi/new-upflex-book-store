import React from 'react';
import Shop from "./shop/Shop";
import Basket from './basket/Basket';
import Home from "./home/Home";
import SearchPage from './SeacrchPage/SearchPage';
import Details from './Details/Details';
import { Route, Routes } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const MyRoutes = () => {
  return (
    <>
      <Header/>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:postId" element={<Details/>}/>
        <Route path="/basket" element={<Basket/>} /> 
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default MyRoutes