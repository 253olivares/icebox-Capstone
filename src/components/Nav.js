import React from "react";
import "semantic-ui-css/semantic.css";
import { Link } from "gatsby";
import { Menu } from "semantic-ui-react";
import "../css/styles.css";
import burgerMenu from "../images/bars-solid.png";

const Nav = ({ openCloseNav }) => {
  return (
    <React.Fragment>
      <Menu className="navbar">
        <div className="navbarHolder">
          <Menu.Item name="ABOUT">
            <Link to="/"> ABOUT</Link>
          </Menu.Item>
          <Menu.Item name="LOGIN/REGISTER">
            <Link to="/login"> LOGIN / REGISTER</Link>
          </Menu.Item>
          <Menu.Item name="TRACKING">TRACKING</Menu.Item>
          <Menu.Item name="SHOPPING">SHOPPING</Menu.Item>
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

export default Nav;
