import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Link } from "gatsby";
import { Container, Button } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import DashImage from "../images/Icebox_assets/home_fridge.svg";
import HouseImage from "../images/Icebox_assets/home_icon.svg";
import FridgeImage from "../images/Icebox_assets/fridge_icon.svg";

import State from "../state";
import { getHouses } from "../services/db";

import Footer from "../components/Footer";

const DashboardPage = () => {
  const state = React.useContext(State);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  //   const [houses, setHouses] = React.useState();
  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    {
      mobileNavOpen
        ? (document.body.style.overflow = "scroll")
        : (document.body.style.overflow = "hidden");
    }
  };

  const initialHouses = "";
  const houseLength = initialHouses.length;
  const [listHouses, setListHouses] = React.useState(initialHouses);

  React.useEffect(() => {
    async function grabHouses() {
      if (state.houses) {
      } else {
        const something = await state.loadHouses();
      }
      const housesDash = state.houses;
      const houseList = housesDash.map((house, index) => {
        return (
          <React.Fragment key={`house-${index}`}>
            <div className="householdFridge_One">
              <img src={HouseImage} width="125px" height="100px"></img>
              <p>
                <span>{house.houseName}</span>
              </p>
              <p>1 Fridge</p>
            </div>
          </React.Fragment>
        );
      });
      setListHouses(houseList);
    }
    grabHouses();
  }, [""]);

  return (
    <React.Fragment>
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
        <Container className="dashboardName">
          <div className="dashcontainer">
            <img src={DashImage} className="dashboardImage"></img>
            <div className="dashboardInformation">
              <h1>
                <span className="userName">
                  {state.user ? (
                    <>{state.user.displayName}</>
                  ) : (
                    <>User's Name</>
                  )}
                </span>{" "}
                DASHBOARD
              </h1>
              <p>Number of Households: {houseLength}</p>
              <p>Number of Fridges: X</p>
            </div>
          </div>
        </Container>

        <Container className="dashboardHouseholds">
          <div className="houseContainer">
            <h1 className="hCHead">
              HOUSEHOLDS{" "}
              <Button className="addH">
                {" "}
                <Link to="/addh"> Add House</Link>
              </Button>
            </h1>
            <div className="householdsContainer">{listHouses}</div>
          </div>
        </Container>

        <Container className="individualFrdges">
          <div className="iFContainer">
            <h1 className="iFCHead">
              INDIVIDUAL FRIDGES{" "}
              <Button className="addF">
                {" "}
                <Link to="/addf"> Add Fridge</Link>
              </Button>
            </h1>
            <div className="fridges">
              <Link to="/fridge">
                <div className="fridges_One">
                  <img src={FridgeImage}></img>
                  <div className="drigeinformation">
                    <h1>FRIDGE'S NAME</h1>
                    <hr></hr>
                    <p>Number of Items: X</p>
                    <p>Recent Expired Items: X</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>

        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
