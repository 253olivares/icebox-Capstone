import React from "react";
import { Link, navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

// images importing for food listing
import Fruits from "../images/Icebox_assets/FruitIcon.png";
import Vegetables from "../images/Icebox_assets/VeggiesIcon.png";
import Grains from "../images/Icebox_assets/GrainsIcon.png";
import Protein from "../images/Icebox_assets/MeatsIcon.png";
import Dairy from "../images/Icebox_assets/DairyIcon.png";
import Extra from "../images/Icebox_assets/Dish_icon.png";

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

  const presetFoods = [{},];

  const foodList = [];
  const [listFood, setFoodList] = React.useState(foodList);

  React.useEffect(() => {
    const foods = presetFoods;
    console.log(foods);
    const foodList = foods.map((food, index) => {
      return (
        <React.Fragment key={`food-${index}`}>
          <div className="item">
            <img></img>
            <h1>Food Item</h1>
            <p>Exp Date: 1/29/12</p>
            <p>Qty: 1</p>
          </div>
        </React.Fragment>
      );
    });
    setFoodList(foodList);
  }, [""]);

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
              <Link to="/restock"> <button> Restock Food</button> </Link>
            </div>
          </div>
        </Container>

        <Container className="fridgeItems">
          <div className="marginHolder">
            <div className="itemsHolder">
              {listFood}
            </div>
          </div>
        </Container>

        <Footer></Footer>
      </main>
    </React.Fragment >
  );
};

export default FridgePage;
