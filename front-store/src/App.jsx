import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Sign/Signin';
import Signup from './components/Sign/Signup';
import Landing from './Pages/Landing';
import Profil from './components/Navbar/Profil';
import AllProducts from './components/Products/AllProducts';
import MainLayout from './components/Layout/MainLayout';
import ProductDetail from './Pages/ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route 
          path="/" 
          element={
            <MainLayout>
              <Landing />
            </MainLayout>
          } 
        />
        <Route 
          path="/product/:id" // Updated path to use dynamic id
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          } 
        />
        <Route 
          path="/allproducts" 
          element={
            <MainLayout>
              <AllProducts />
            </MainLayout>
          } 
        />
        <Route 
          path="/profil" 
          element={
            <MainLayout>
              <Profil />
            </MainLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
