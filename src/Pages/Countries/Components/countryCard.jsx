import React, { useEffect, useState } from "react";
import { CountryCardStyle } from "./style";

const url = "https://restcountries.com/v3.1/all";

function CountryCard(data) {

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

    <CountryCardStyle>
    <div className="countryContainer">
        <div className="countryWrap">
          {countryData.map((item, index) => (
            <div className="countryCard" key={index}>
              <div className="countryFlagWrap">
                <a href={item.maps.googleMaps} target='_blank'>
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
          ))}
        </div>
      </div>
    </CountryCardStyle>
  );
}

export default CountryCard;
