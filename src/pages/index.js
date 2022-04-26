import React from "react";

import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import sharedFridges from "../images/Icebox_assets/fridge_cluster.svg";
import iceFridge from "../images/Icebox_assets/ice_fridge.svg";
import trackApp from "../images/Icebox_assets/phone.svg";
import easyshop from "../images/Icebox_assets/home_fridge.svg";

import Footer from "../components/Footer";

import State from "../state";
import { Link } from "gatsby";

const HomePage = () => {
  const state = React.useContext(State);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    {
      mobileNavOpen
        ? (document.body.style.overflow = "scroll")
        : (document.body.style.overflow = "hidden");
    }
  };

  return (
    <React.Fragment>
      {/* Main page code */}
      <main>
        {state.user ? (
          <>
            <UserNav openCloseNav={openCloseNav}></UserNav>
            {mobileNavOpen ? <MobileNavLogged></MobileNavLogged> : null}
          </>
        ) : (
          <>
            <Nav openCloseNav={openCloseNav}></Nav>
            {mobileNavOpen ? <MobileNav></MobileNav> : null}
          </>
        )}
        <Container className="iceboxDesc">
          <div className="decHolder">
            <div className="leftFlex">
              <div>
                <h1>ICEBOX</h1>
                <img src={iceFridge} alt="ICEBOXLOGO"></img>
              </div>
            </div>
            <div className="rightFlex">
              <div>
                <p>
                  ICEBOX is a fridge app dedicated to make it easy for users to
                  create and store information about their food products. We
                  exist to make life easier so that you can manage your
                  products, and expiration dates.
                </p>
                <p>
                  This project was made as a Capstone group project in order to
                  teach ourselves how to use React template and modular
                  functions by learning and using Gatsby.
                </p>
                <button>
                  <Link to="/login">SIGN UP / LOGIN</Link>
                </button>
              </div>
            </div>
          </div>
        </Container>
        <Container className="iceboxTrack">
          <div className="trackHolder">
            <div className="leftFlex">
              <h1>TRACK FRESHNESS</h1>
              <p>
                Track your produce and other foods with our app, which saves
                your expiration dates and flags products that are a bit past
                their "best by" day.
              </p>
            </div>
            <div className="rightFlex">
              <img src={trackApp} alt="TRACK FRESH IMAGE"></img>
            </div>
          </div>
        </Container>
        <Container className="iceboxShare">
          <div className="shareHolder">
            <div className="leftFlex">
              <img src={easyshop} alt="Household and Fridge"></img>
            </div>
            <div className="rightFlex">
              <h1>ORGANIZATION MADE EASY</h1>
              <p>
                Create individual fridges or fridges saved in households as a
                collection to organize your spaces in your own way.
              </p>
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
