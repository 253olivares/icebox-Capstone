import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";

import "../css/styles.css";
import burgerMenu from "../images/bars-solid.png";

import { signOutUser } from "../services/db";

const UserNav = () => {
  return (
    <React.Fragment>
      <Menu className="navbar">
        <div className="navbarHolder">
          <Menu.Item name="ACCOUNT">
            <Link to="/profile">ACCOUNT</Link>
          </Menu.Item>
          <Menu.Item name="DASHBOARD">
            <Link to="/dashboard">DASHBOARD</Link>
          </Menu.Item>
          <Menu.Item name="SIGNOUT" onClick={signOutUser}>
            SIGN OUT
          </Menu.Item>
        </div>
        <div className="navbarHolderMobile">
          <div className="navbarMenu">
            <img src={burgerMenu} alt="MenuBurger"></img>
          </div>
          <div className="appTitle">
            <h1>ICEBOX</h1>
          </div>
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default UserNav;
