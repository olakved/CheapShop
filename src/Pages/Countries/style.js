import styled from "styled-components";

export const CountryWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 10px 30px;

  .countryWrap {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  .countryCardContainer {
    width: 100%;
  }

  .countryCard {
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .countryFlagWrap {
    height: 180px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .countryFlagWrap img {
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
  }

  .countryCardInfo {
    display: flex;
    flex-direction: column;
  }

  .countryCardInfo h2 {
    font-size: 15px;
  }

  .countryInfo {
    margin-top: 10px;
    border-top: 2px solid rgb(56, 1, 56);
  }

  .countryInfoColumn {
    /* display: flex; */
    padding: 5px;
    text-align: left;
  }

  .infoRow:nth-child(even){
    background-color: lightgray;
  }

  .infoRow{
    display: flex;
    /* justify-content: space-evenly; */
    text-align: left;
    margin-bottom: 10px;
    padding: 5px 0px;
  }

  .infoItems {
    width: 47%;
    font-weight: 600;
  }

  .infoValue {
    font-size: 15px;
    width: 53%;
    text-align: left;
  }
`;
