import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  backdrop-filter: blur(10px);
  .spinner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinLoad {
    font-size: 20px;
  }
  .spin {
    margin-top: 35px;
  }
`;
