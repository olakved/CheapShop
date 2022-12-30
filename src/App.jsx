import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import NewsPage from "./Pages/News";
import PersonPage from "./Pages/smallApp";
import ProductPage from "./Pages/Product";
import './index.css'

import LayoutWrapper from "./utils/WebWrapper";

function App() {
  return (
    <LayoutWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/person" element={<PersonPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
    </LayoutWrapper>
  );
}

export default App;
