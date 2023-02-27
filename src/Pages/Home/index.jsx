import React from "react";
import { HomeWrapper } from "./style";
import ProductSection from "./Components/Product";
import HomeBanner from "./Components/HomeBanner";
import HomeQuestionSection from "./Components/Question";
import CountryPageComp from "../../Components/CountriesComp";
import ApiTest from "../../Components/CountriesComp/Components/testNews";

function HomePage() {
  return (
    <HomeWrapper>
      <>
        <HomeBanner />
        <ProductSection />
        <HomeQuestionSection />
        {/* <CountryPageComp /> */}
        <ApiTest />
      </>
    </HomeWrapper>
  );
}

export default HomePage;
