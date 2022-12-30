import React from "react";
import { HeaderWrapper } from "./style";
import { headerData } from "./mock";
import { Link } from "react-router-dom";
import headerLogo from '../../Assets/Logo/logo.png'

function Header() {
  return (
    <HeaderWrapper>
      <div className="headerWrap">
          <div className="headerBox">
            <div className="logo">
              <Link to="/">
                <img src={headerLogo} alt="" className="headerLogo" /></Link>
            </div>
            <div className="navMenu">
              {headerData.map((item, index) => (
                <div key={index} className="navItem">
                  <p>
                    <Link to={item?.path} className="navLink">
                      {item?.linkTitle}
                    </Link>
                  </p>
                </div>
              ))}

              <button className="navMenuBtn">
                <Link to='/'>Login</Link>
              </button>
            </div>
          </div>
        </div>
    </HeaderWrapper>
  );
}

export default Header;
