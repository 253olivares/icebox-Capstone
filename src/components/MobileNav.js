import React from "react";
import { navigate } from "gatsby";
import { Link } from "gatsby";

import { Menu } from "semantic-ui-react";

import iceboxLognav from "../images/Icebox_assets/logo.svg";

import "../css/styles.css";

const MobileNav = () => {

  function resetStyle() {
    document.body.style.overflow = "scroll";
  }

  return (
    <React.Fragment>
      <Menu className="MobileNavMenu">
        <div className="MobileNavHolder">
          <div>
            <h1 className="MNWelcome">Welcome</h1>
          </div>
          <hr className="firsthr"></hr>
          <div>
            <h1 className="MNMore MNOption"> <Link to="/" onClick={resetStyle}>ABOUT</Link> </h1>
          </div>
          <hr className="followinghr"></hr>
          <div>
            <h1 className="MNMore MNOption"> <Link to="/login" onClick={resetStyle}> LOGIN / REGISTER</Link></h1>
          </div>
          <hr className="followinghr"></hr>
          <div>
            <h1 className="MNMore MNOption"> <Link to="/ " onClick={resetStyle}> TRACKING </Link></h1>
          </div>
          <hr className="followinghr"></hr>
          <div>
            <h1 className="MNMore MNOption"> <Link to="/" onClick={resetStyle}> </Link> SHOPPING</h1>
          </div>
          <hr className="followinghr"></hr>

          <div className="MNbottomInfo">
            <div className="imageNTextNav">
              <img src={iceboxLognav} alt="AppImg"></img>
              <h1>ICEBOX</h1>
            </div>
            <p className="MNDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
          </div>
        </div>
      </Menu >
    </React.Fragment >
  );
};

export default MobileNav;
