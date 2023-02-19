import React, { useState, useEffect } from "react";
import { BrewCardWrap } from "./style";

const url = "https://api.openbrewerydb.org/breweries";

function BreweryCard(data) {
  const [breweryData, setbreweryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchAPI = async () => {
      const data = await (await fetch(url, { signal })).json();
      setbreweryData(data);
    };

    fetchAPI();

    return () => controller.abort();
  }, []);

  console.log(breweryData);

  return (
    <BrewCardWrap>
      <div className="brewContainer">
        {breweryData.map((item, index) => (
          <div className="brewWrap" key={index}>
            <div className="cardRow">
              <h1>Name</h1>
              <p>{item.name}</p>
            </div>
            <div className="cardRow">
              <h1>Phone</h1>
              <p>{item.phone}</p>
            </div>
            <div className="cardRow">
              <h1>Address</h1>
              <p>{item.street}, {item.city} City</p>
            </div>
            <div className="cardRow">
              <h1>State</h1>
              <p>{item.state}</p>
            </div>
            <div className="cardRow">
              <h1>Country</h1>
              <p>{item.country}</p>
            </div>
            <div className="cardRow">
              <h1>Postal Code</h1>
              <p>{item.postal_code}</p>
            </div>
          </div>
        ))}
      </div>
    </BrewCardWrap>
  );
}

export default BreweryCard;
