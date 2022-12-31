import styled from "styled-components";

export const ProductStyle = styled.div`
  width: 100%;
  padding: 15px;

  .homeProductContainer {
    width: 100%;
  }

  .productCategory {
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 10px 60px;
    text-align: center;
    margin: 0px 150px 0px;
    background-color: lightgray;
    font-size: 12px;
    background: rgba(56, 1, 56, 1);
    /* background: linear-gradient(270deg, rgba(56,1,56,1) 0%, rgba(157,8,157,1) 100%);  */
    color: white;
  }

  .productCategory a {
    color: white;
  }

  .productWrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
    border-radius: 12px;
    /* background-color: rgb(56,1,56); */
  }

  .productCard {
    background-color: white;
    width: 300px;
    overflow: hidden;
    /* background: transparent; */
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .ProductcardActive {
    height: 450px;
    background: transparent;
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
  }

  .productCard:hover {
    transform: scale(1.02);
  }

  .productAvatar {
    width: 100%;
    height: 200px;
  }

  .productBox {
    padding: 10px;
  }

  .productDetailsA {
  }

  .productTitle {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    color: rgb(56, 1, 56);
  }

  .productPriceRate {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }

  .cartItems {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .cartItems button {
    width: 40%;
    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    /* background: linear-gradient(270deg, rgba(56,1,56,1) 0%, rgba(157,8,157,1) 100%);  */
    background: rgba(157, 8, 157, 1);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 15px;
  }

  .productDetailsB {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }

  .productDetailsB p {
    text-align: center;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    color: lightgray;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .poIcon {
    margin-bottom: 5px;
  }

  .productMoreDetails {
    padding: 10px;
    font-size: 12px;
  }

  .productMoreDetails {
    border-top: 1px solid rgba(60, 64, 67, 0.3);
    margin-top: 2px;
  }

  @media screen and (max-width: 1010px) {
    .productCard {
      width: 250px;
    }

    .ProductcardActive {
      height: 450px;
    }

    .productTitle {
      font-size: 18px;
    }

    .productPriceRate {
      font-size: 12px;
    }

    .cartItems button {
      width: 45%;
      padding: 8px;
      font-size: 14px;
    }

    .poIcon {
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    .productCategory {
      margin: 0px 60px 0px;
    }
    .productCard {
      width: 200px;
    }

    .ProductcardActive {
      height: 420px;
    }

    .productTitle {
      font-size: 15px;
    }

    .productPriceRate {
      font-size: 10px;
    }

    .cartItems button {
      width: 45%;
      padding: 5px;
      font-size: 12px;
    }

    .poIcon {
      width: 15px;
      height: 15px;
      margin-bottom: 10px;
    }

    .productDetailsB p {
      width: 23px;
      height: 23px;
    }
  }

  @media screen and (max-width: 550px) {
    /* .productMoreDetails,
    .productDetailsB {
      display: none;
    } */

    .productAvatar {
      width: 100%;
      height: 160px;
    }
  }

  @media screen and (max-width: 450px) {
    .productCategory {
      margin: 0px 60px 0px;
    }

    .productAvatar {
      width: 100%;
      height: 120px;
    }

    .productCard {
      width: 150px;
    }

    .cartItems button {
    width: 40%;
    height: 30px;
    padding: 2px;
    font-size: 8px;
}

.pocoIcon{
  width: 15px;
  height: 15px;
  margin-bottom: 8px;
}
  }
`;
