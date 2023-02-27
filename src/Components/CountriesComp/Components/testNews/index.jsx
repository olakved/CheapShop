import React from "react";
import CustomFetch from "../../../../utils/customFetch";
import { Spinner } from "@chakra-ui/react";

// const url = "https://content.guardianapis.com/search?api-key=0439fee6-e4c7-48bf-ab22-dc10a21b56a9";
const url = "https://restcountries.com/v3.1/all";

function ApiTest() {
  const axiosMethod = "GET";
  const { loading, errorMessage, dataResponse } = CustomFetch(url, axiosMethod);
  console.log("api", dataResponse);
  return (
    <div>
      <button>{loading ? <Spinner /> : "done"}</button>
      <p>kkkkk</p>
    </div>
  );
}

export default ApiTest;
