import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavBar, HomePage, Footer, ProductsIndex, Cart, ProductDetails, Checkout, SellForm, Submit } from '../';

export const App: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sellForm" element={<SellForm />} />
        <Route path="cart/checkout" element={<Checkout />} />
        <Route path="sellForm/submit" element={<Submit />} />
        <Route path=":category" element={<Outlet />}>
          <Route path="/" element={<ProductsIndex />} />
          <Route path=":shoeId" element={<ProductDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}