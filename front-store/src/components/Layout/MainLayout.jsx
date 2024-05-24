// components/Layout/MainLayout.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarFix from '../Navbar/NavbarFix';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarFix />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
