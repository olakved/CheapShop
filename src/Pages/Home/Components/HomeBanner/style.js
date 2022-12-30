import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 400px;
  background-color: rgb(56, 1, 56);
  background-image: linear-gradient(
      to left,
      rgba(73, 50, 173, 0.5),
      rgba(133, 48, 141, 1)
    ),
    url("https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60");
  background-position: center;
  background-size: contain;

  margin-top: 100px;
  overflow: hidden;

  .homeBannerWrap {
    padding: 30px;
    margin-left: 50px;
  }

  .homeBannerText {
    margin-top: 55px;
  }

  .homeBannerText h2 {
    color: white;
    font-size: 40px;
    font-weight: 600;
    margin-top: 5px;
  }

  .homeBannerText p {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 15px;
    color: white;
  }

  .homeBannerBtn {
    display: flex;
    gap: 20px;
  }

  .homeBannerBtn1 {
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: rgb(157, 8, 157);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  .homeBannerBtn1 a {
    color: white;
    font-size: 15px;
  }

  .homeBannerBtn2 {
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  .homeBannerBtn2 a {
    color: rgb(157, 8, 157);
    font-size: 15px;
  }

  @media screen and (min-width: 1025px) {
  }

  @media screen and (max-width: 550px) {
    .homeBannerWrap {
      padding: 18px;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 450px) {
    .homeBannerText h2 {
      font-size: 30px;
      font-weight: 500;
    }

    .homeBannerText p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 350px) {
    .homeBannerText h2 {
      font-size: 25px;
      font-weight: 400;
    }

    .homeBannerText p {
      font-size: 10px;
    }

    .homeBannerWrap {
    margin-top: 40px;
}
  }
`
