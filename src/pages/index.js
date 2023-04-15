import React from 'react';
import Shop from "./shop/Shop";
import Basket from './basket/Basket';
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  return (
    <>
      <Routes> 
          <Route path='/' element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/basket/:postId" element={<Basket/>}/>
          <Route path="/book/" element={<Basket/>} /> 
        </Routes>  
    </>
  )
}

export default MyRoutes