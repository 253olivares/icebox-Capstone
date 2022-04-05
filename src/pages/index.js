import React from "react";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import Footer from "../components/Footer";
const HomePage = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  return (
    <React.Fragment>
      {/* Main page code */}
      <main>
        <Nav openCloseNav={openCloseNav}></Nav>
        {/* <UserNav></UserNav> */}
        {/* <MobileNav></MobileNav> */}
        {mobileNavOpen ? <MobileNav ></MobileNav> : null}
        <Container className="iceboxDesc">
          <div className="decHolder">
            <div className="leftFlex">
              <div>
                <h1>ICEBOX</h1>
                <img src="" alt="ICEBOXLOGO"></img>
              </div>
            </div>
            <div className="rightFlex">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>SIGN UP / LOGIN</button>
              </div>
            </div>
          </div>
        </Container>
        <Container className="iceboxTrack">
          <div className="trackHolder">
            <div className="leftFlex">
              <h1>TRACK FRESHNESS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="rightFlex">
              <img src="" alt="TRACK FRESH IMAGE"></img>
            </div>
          </div>
        </Container>
        <Container className="iceboxShare">
          <div className="shareHolder">
            <div className="leftFlex">
              <img src="" alt="SHARING IMAGE"></img>
            </div>
            <div className="rightFlex">
              <h1>SHARE WITH OTHERS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </Container>
        <Container className="iceboxShopping">
          <div className="shoppingHolder">
            <div className="leftFlex">
              <h1>SHOPPING MADE EASY</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="rightFlex">
              <img src="" alt="SHOPPING IMAGE"></img>
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
