import React from "react";
import { CountryCardStyle } from "./style";

function CountryCard(data) {
  return (
    <CountryCardStyle>
    <div className="countryCardContainer">
      <div className="countryCard">
        <div className="countryFlagWrap">
          <img src="" alt="" />
        </div>
        <div className="countryCardInfo">
          <h2>Country Name</h2>
          <div className="countryInfo">
            <div className="countryInfoRow">
            <p className="infoLeft">Info</p>
            <p className="infoRight">Value</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </CountryCardStyle>
  );
}

export default CountryCard;
