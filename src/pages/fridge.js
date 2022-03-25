import React from "react";
import "semantic-ui-css/semantic.css";
import { Link } from "gatsby";
import { Container, Menu, Image, Input, Button } from "semantic-ui-react";
import "../css/styles.css";
import burgerMenu from "../images/bars-solid.png";

const FridgePage = () => {
  return (
    <React.Fragment>
      <main>
        <Menu className="navbar">
          <div className="navbarHolder">
            <Menu.Item name="ACCOUNT">
              <Link to="/profile">ACCOUNT</Link>
            </Menu.Item>
            <Menu.Item name="DASHBOARD">
              <Link to="/dashboard">DASHBOARD</Link>
            </Menu.Item>
            <Menu.Item name="SIGNOUT">SIGN OUT</Menu.Item>
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

        <Container className="fridgeInformation">
          <div className="fridgeInfoHolder">
            <div className="fridgeImage">
              <img src="" alt="fridgeIcon"></img>
            </div>
            <div className="fridgeIn">
              <h1>FRIDGE NAME</h1>
              <p>Fridge Location: Living Room</p>
              <p>Last Restock: 1/23/22</p>
              <button>Restock Food</button>
            </div>
          </div>
        </Container>

        <Container className="fridgeItems">
          <div className="marginHolder">
            <div className="itemsHolder">
              <div className="item">
                <img></img>
                <h1>Food Item</h1>
                <p>Exp Date: 1/29/12</p>
                <p>Qty: 1</p>
              </div>
              <div className="item">
                <img></img>
                <h1>Food Item</h1>
                <p>Exp Date: 1/29/12</p>
                <p>Qty: 1</p>
              </div>
              <div className="item">
                <img></img>
                <h1>Food Item</h1>
                <p>Exp Date: 1/29/12</p>
                <p>Qty: 1</p>
              </div>
              <div className="item">
                <img></img>
                <h1>Food Item</h1>
                <p>Exp Date: 1/29/12</p>
                <p>Qty: 1</p>
              </div>
              <div className="item">
                <img></img>
                <h1>Food Item</h1>
                <p>Exp Date: 1/29/12</p>
                <p>Qty: 1</p>
              </div>
              <div className="item">
                <img></img>
                <h1>Food Item</h1>
                <p>Exp Date: 1/29/12</p>
                <p>Qty: 1</p>
              </div>
            </div>
          </div>
        </Container>

        <Container className="footer">
          <div className="footerHolder">
            <div className="pagelogDesc">
              <img src="" alt="AppImg"></img>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillu
              </p>
            </div>
            <div className="CatNav">
              <div className="cat">
                <h1>ABOUT</h1>
                <hr></hr>
                <p>App</p>
                <p>Tracking</p>
                <p>Sharing</p>
                <p>Shopping</p>
              </div>
              <div className="cat">
                <h1>ACCOUNT</h1>
                <hr></hr>
                <p>Loggin</p>
                <p>Logout</p>
              </div>
              <div className="cat">
                <h1>LICENSING</h1>
                <hr></hr>
                <p>Location</p>
                <p>Contacting</p>
                <p>Permission</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default FridgePage;
