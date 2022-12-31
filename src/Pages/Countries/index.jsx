import React, { useEffect, useState } from "react";
import { CountryWrapper } from "./style";
// import CountryCard from "./Components/countryCard";

const url = "https://restcountries.com/v3.1/all";

function CountryPage() {
  // const [countryData, setCountryData] = useState();

  // const fetchApi = async () => {
  //     const data = await (await fetch(url)).json();
  //     setCountryData(data);
  // };

  // useEffect(() => {
  //     fetchApi();
  // }, []);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchAPI = async () => {
      const data = await (await fetch(url, { signal })).json();
      setCountryData(data);
    };

    fetchAPI();

    return () => controller.abort();
  }, []);

  console.log(countryData);

  return (
    <CountryWrapper>
      <div className="countryContainer">
        <div className="countryWrap">
          {countryData.map((item, index) => (
            <div className="countryCard" key={index}>
              <div className="countryFlagWrap">
                <img src={item.flags.png} alt="" />
              </div>
              <div className="countryCardInfo">
                <h2>{item.name.common}</h2>
                <div className="countryInfo">
                  <div className="countryInfoRow">
                    <p className="infoLeft">
                      <span className="infoItems">Capital</span>
                      <span className="infoItems">Population</span>
                      <span className="infoItems">Continent</span>
                      <span className="infoItems">Time Zone</span>
                      <span className="infoItems">Region</span>
                      <span className="infoItems">Short Name</span>
                      <span className="infoItems">First Day</span>
                    </p>
                    <p className="infoRight">
                      <span className="infoValue">{item.capital}</span>
                      <span className="infoValue">{item.population}</span>
                      <span className="infoValue">{item.continents}</span>
                      <span className="infoValue">{item.timezones[0]}</span>
                      <span className="infoValue">{item.region}</span>
                      <span className="infoValue">{item.fifa}</span>
                      <span className="infoValue">{item.startOfWeek}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CountryWrapper>
  );
}
export default CountryPage;
