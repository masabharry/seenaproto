import React from "react";
import { useLocation } from "react-router-dom";

// Import all about pages
import Vision from "./About/Vision";
import FoundingStory from "./About/FoundingStory";
import Team from "./About/Team";
import Pilots from "./About/Pilots";
import News from "./About/News";
import Join from "./About/Join";

const AboutPage = () => {
  const { pathname } = useLocation();
  const subpage = pathname.split("/about/")[1];

  const renderComponent = () => {
    switch (subpage) {
      case "vision":
        return <Vision />;
      case "founding-story":
        return <FoundingStory />;
      case "team":
        return <Team />;
      case "pilots":
        return <Pilots />;
      case "news":
        return <News />;
      case "join":
        return <Join />;
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

export default AboutPage;
