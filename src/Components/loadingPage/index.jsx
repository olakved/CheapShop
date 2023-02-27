import React from "react";
import { LoadingWrapper } from "./style";
import { Spinner } from "@chakra-ui/react";

function LoadingPage() {
  return (
    <LoadingWrapper>
      <div className="spinner">
        <p className="spinLoad">Loading...</p>
        <div className="spin">
          <Spinner />
        </div>
      </div>
    </LoadingWrapper>
  );
}

export default LoadingPage;
