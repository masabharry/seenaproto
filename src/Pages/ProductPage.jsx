// pages/ProductPage.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { PageContainer } from '../App.styles';

const ProductPage = () => {
  return (
    <PageContainer>
      <Header />
      <h1>Product Features</h1>
      {/* Add product page content here */}
      <Footer />
    </PageContainer>
  );
};

export default ProductPage;