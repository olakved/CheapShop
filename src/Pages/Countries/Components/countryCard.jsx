import React, { useEffect, useState } from "react";
import { CountryCardStyle } from "./style";
import CustomFetch from "../../../utils/customFetch";
import { Spinner } from "@chakra-ui/react";
import LoadingPage from "../../../Components/loadingPage";

const url = "https://restcountries.com/v3.1/all";

function CountryCard() {
  const axiosMethod = "GET";
  const { loading, errorMessage, dataResponse } = CustomFetch(url, axiosMethod);

  return (
    <CountryCardStyle>
      <div className="countryContainer">
        <div className="countryWrap">
          {loading ? (
            // <Spinner />
            <LoadingPage />
          ) : dataResponse ? (
            dataResponse?.data?.map((item, index) => (
              <div className="countryCard" key={index}>
                <div className="countryFlagWrap">
                  <a href={item.maps.googleMaps} target="_blank">
                    <img src={item.flags.png} alt="Flag" className="flagImg" />
                  </a>
                </div>
                <div className="countryCardInfo">
                  <h2>{item.name.common}</h2>
                  <div className="countryInfo">
                    <div className="countryInfoColumn">
                      <div className="infoRow">
                        <p className="infoItems">Capital</p>
                        <p className="infoValue">{item.capital}</p>
                      </div>
                      <div className="infoRow">
                        <p className="infoItems">Population</p>
                        <p className="infoValue">{item.population}</p>
                      </div>
                      <div className="infoRow">
                        <p className="infoItems">Continent</p>
                        <p className="infoValue">{item.continents}</p>
                      </div>
                      <div className="infoRow">
                        <p className="infoItems">Timezone</p>
                        <p className="infoValue">{item.timezones[0]}</p>
                      </div>
                      <div className="infoRow">
                        <p className="infoItems">Region</p>
                        <p className="infoValue">{item.region}</p>
                      </div>
                      <div className="infoRow">
                        <p className="infoItems">Short Name</p>
                        <p className="infoValue">{item.fifa}</p>
                      </div>
                      <div className="infoRow">
                        <p className="infoItems">First Day</p>
                        <p className="infoValue">{item.startOfWeek}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : errorMessage ? (
            <p>Errror While Fetching</p>
          ) : null}
        </div>
      </div>
    </CountryCardStyle>
  );
}

export default CountryCard;
