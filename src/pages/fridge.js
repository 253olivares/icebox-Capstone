import React from "react";
import "semantic-ui-css/semantic.css";
import { Link } from "gatsby";
import { Container, Menu, Image, Input, Button } from "semantic-ui-react";
import "../css/styles.css";
import burgerMenu from "../images/bars-solid.png";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import Footer from "../components/Footer";

const FridgePage = () => {
  return (
    <React.Fragment>
      <main>
        <UserNav></UserNav>
        <MobileNav></MobileNav>

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

        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export default FridgePage;
