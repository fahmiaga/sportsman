import React, { useEffect } from "react";
import JumbotronDown from "../../components/JumbotronDown";
import Header from "../../components/Header";
import Information from "../../components/Information";

const LandingPage = () => {
  useEffect(() => {
    document.title = `Landing Page`;
  });

  return (
    <div>
      <Header />
      <Information />
      <JumbotronDown />
    </div>
  );
};

export default LandingPage;
