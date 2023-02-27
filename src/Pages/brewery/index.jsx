import React from "react";
import { BreweryContainer } from "./style";
import BreweryCard from "./component/breweryCard";
import CustomFetch from "../../utils/customFetch";

function BreweryPage() {
  return (
    <BreweryContainer>
      <BreweryCard />
    </BreweryContainer>
  );
}

export default BreweryPage;
