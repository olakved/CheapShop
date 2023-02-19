import styled from "styled-components";

export const HomeQuestionWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  /* background-color: grey; */
  height: auto;
  padding: 30px 40px;
  border-top: 1px solid rgb(56, 1, 56);
  margin-bottom: 30px;

  .questionWrap {
    /* background-color: lightgray; */
  }

  .queSecTitle {
    margin-bottom: 20px;
    color: rgb(56, 1, 56);
  }

  .questionSection {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .queColumn {
    padding: 0px 10px;
  }

  .queLine1 {
    padding: 5px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .queLine1 {
    display: flex;
    gap: 10px;
  }

  .queLine1A {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    min-width: 40px;
    max-height: 40px;
    border-radius: 100%;
    background-color: purple;
    text-align: center;
    margin-top: 5px;
  }

  .queLineB h2 {
    font-size: 20px;
  }

  .queLineB p {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 24px;

    .questionSection {
      margin-left: 7px;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 30px 24px;

    .questionSection {
      margin-left: 7px;
    }

    .questionSection {
      flex-direction: column;
      gap: 0px;
    }
  }
`;
