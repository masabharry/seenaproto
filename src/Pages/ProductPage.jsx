// pages/ProductPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

// Product Pages
import FeatureTour from "./Products/FeatureTour";
import MobileApp from "./Products/MobileApp";
import MultiCampus from "./Products/MultiCampus";
import StudentIS from "./Products/StudentIS";
import ERPModules from "./Products/ERPModules";
import FAQ from "./Products/FAQ";


const ProductPage = () => {
   const { pathname } = useLocation();
  const subpage = pathname.split("/product/")[1];

  const renderComponent = () => {
    switch (subpage) {
      case "feature-tour":
        return <FeatureTour />;
      case "mobile-app":
        return <MobileApp />;
      case "multi-campus":
        return <MultiCampus />;
      case "student-is":
        return <StudentIS />;
      case "erp-modules":
        return <ERPModules />;
      case "faq":
        return <FAQ />;
      default:
        return (
          <div style={{ color: "white", padding: "5rem", textAlign: "center" }}>
            <h1>Page Not Found</h1>
            <p>The page you’re looking for doesn’t exist in the About section.</p>
          </div>
        );
    }
  };

  return <>{renderComponent()}</>;
};

export default ProductPage;