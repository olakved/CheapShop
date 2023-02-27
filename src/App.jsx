import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import NewsPage from "./Pages/News";
import PersonPage from "./Pages/smallApp";
import ProductPage from "./Pages/Product";
import CountryPage from "./Pages/Countries";
import BreweryPage from "./Pages/brewery";
import ErrorPage from "./Pages/error";
import "./index.css";

import LayoutWrapper from "./utils/WebWrapper";
import ApiTest from "./Components/CountriesComp/Components/testNews";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/countries" element={<CountryPage />} />
        <Route path="/breweries" element={<BreweryPage />} />
        <Route path="/test" element={<ApiTest />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
