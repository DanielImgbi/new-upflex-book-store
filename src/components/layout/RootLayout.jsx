import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="roo-layout">
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default RootLayout