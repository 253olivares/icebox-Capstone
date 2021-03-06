import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";

import "../css/styles.css";
import burgerMenu from "../images/Icebox_assets/bars-solid.png";

import State from "../state";

import { signOutUser } from "../services/db";

const UserNav = ({ openCloseNav }) => {

  const state = React.useContext(State);

  function ClickedSignout() {
    navigate("/");
    signOutUser();
    state.clearState();
  }

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
          <Menu.Item name="SIGNOUT" onClick={ClickedSignout}>
            SIGN OUT
          </Menu.Item>
        </div>
        <div className="navbarHolderMobile">
          <div className="navbarMenu">
            <img src={burgerMenu} alt="MenuBurger" onClick={openCloseNav}></img>
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
