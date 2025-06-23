// pages/PackagesPage.jsx
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { PageContainer } from "../App.styles";
import Topbar from "../Components/Header/Topbar";

const PackagesPage = () => {
  return (
    <PageContainer>
      <Topbar />
      <Header />
      <h1 style={{color: "white", textAlign: "center", marginTop: "100px"}}>SDS Packages</h1>
      {/* Add about page content here */}
      <Footer />
    </PageContainer>
  );
};

export default PackagesPage;
