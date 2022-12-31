import styled from "styled-components";

export const CountryCardStyle = styled.div`
background-color: pink;
width: 270px;
height: 510px;
margin-top: 20px;

.countryCardContainer{
   width: 100%;
}

.countryCard{
    display: flex;
    flex-direction: column;
    text-align: left;
}

.countryFlagWrap{
    width: 100%;
    height: 190px;
    overflow: hidden;
}

.countryCardInfo{
    display: flex;
    flex-direction: column;
}

.countryInfoRow{
    display: flex;
    /* justify-content: space-between; */
    padding: 5px;
    text-align: left;
}

.infoLeft{
    width: 50%;
    padding: 10px;
}

.infoRight{
    width: 50%;
    padding: 10px;
}

`