import React from 'react';
import Shop from "./shop/Shop";
import Basket from './basket/Basket';
import Home from "./home/Home";
import SearchPage from './SeacrchPage/SearchPage';
import Details from './Details/Details';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from '../components/layout/RootLayout';

const rt = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<RootLayout/>}> 
      <Route index element={<Home />} />
      <Route path="shop/" element={<Shop />} />
      <Route path="details/:id" element={<Details/>}/>
      <Route path="basket" element={<Basket/>} /> 
      <Route path='search' element={<SearchPage/>}/>
    </Route>
  )
)

const MyRoutes = () => {
  return ( <RouterProvider router={rt} />  )
}

export default MyRoutes