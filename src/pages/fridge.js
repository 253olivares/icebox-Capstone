import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import fridgeIcon from "../images/Icebox_assets/fridge_icon.svg";

import State from "../state";

import Footer from "../components/Footer";

const FridgePage = () => {
  const state = React.useContext(State);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    { mobileNavOpen ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"; }

  };

  return (
    <React.Fragment>
      <main>
        {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}

        <Container className="fridgeInformation">
          <div className="fridgeInfoHolder">
            <div className="fridgeImage">
              <img src={fridgeIcon} alt="fridgeIcon"></img>
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
