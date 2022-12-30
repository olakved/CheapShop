import React from "react";
import { Link } from "react-router-dom";
import { BannerData } from "./mock";
import { BannerContainer } from "./style";

function HomeBanner() {
  return (
      <BannerContainer>
        <div className="homeBannerWrap">
          <div className="homeBannerText">
            <h2>{BannerData.Text.bigText}</h2>
            <h2>{BannerData.Text.bigText2}</h2>
            <p>{BannerData.Text.smallText}</p>
          </div>
          <div className="homeBannerBtn">
            <button className="homeBannerBtn1">
              <Link>Register</Link>
            </button>
            <button className="homeBannerBtn2">
              <Link>Learn more</Link>
            </button>
          </div>
        </div>
      </BannerContainer>
  );
}

export default HomeBanner;
