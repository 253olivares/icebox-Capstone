import React from "react";
import { Link, navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Button, Container } from "semantic-ui-react";
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
import { getFood } from "../services/db";

const FridgePage = () => {
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
  // This is for testing purposes
  // const presetFoods = [{ foodNamme: "test", foodType: "Fruit", expirationDate: "12/12/12", foodQty: "1", fridgeId: 1 }, {}];

  const foodList = [];

  // const [dateCheck, setDateCheck] = React.useState(initialDate);
  const dateCheck = new Date();
  const [listFood, setFoodList] = React.useState(foodList);

  async function setFoods() {
    const foods = await getFood(state.selectedFridge.id);
    if (foods) {
      const foodList = foods.map((food, index) => {
        const expDate = new Date(food.expDate);
        if (expDate < dateCheck) {
          console.log("expired");
        } else {
          console.log("not expired");
        }
        if (food.foodType == "Fruits") {
          return (
            <React.Fragment key={`food-${index}`}>
              <div className="item">
                <div className="overlayDelete">
                  <Button color='red'> Delete Food</Button>
                </div>
                <img src={Fruits}></img>
                <h1>{food.foodName}</h1>
                <p>Exp Date: {food.expDate}</p>
                <p>Qty: {food.quantity}</p>
              </div>
            </React.Fragment>
          );
        } else if (food.foodType == "Vegetables") {
          return (
            <React.Fragment key={`food-${index}`}>
              <div className="item">
                <div className="overlayDelete">
                  <Button color='red'> Delete Food</Button>
                </div>
                <img src={Vegetables}></img>
                <h1>{food.foodName}</h1>
                <p>Exp Date: {food.expDate}</p>
                <p>Qty: {food.quantity}</p>
              </div>
            </React.Fragment>
          );
        } else if (food.foodType == "Grains") {
          return (
            <React.Fragment key={`food-${index}`}>
              <div className="item">
                <div className="overlayDelete">
                  <Button color='red'> Delete Food</Button>
                </div>
                <img src={Grains}></img>
                <h1>{food.foodName}</h1>
                <p>Exp Date: {food.expDate}</p>
                <p>Qty: {food.quantity}</p>
              </div>
            </React.Fragment>
          );
        } else if (food.foodType == "Protein") {
          return (
            <React.Fragment key={`food-${index}`}>
              <div className="item">
                <div className="overlayDelete">
                  <Button color='red'> Delete Food</Button>
                </div>
                <img src={Protein}></img>
                <h1>{food.foodName}</h1>
                <p>Exp Date: {food.expDate}</p>
                <p>Qty: {food.quanity}</p>
              </div>
            </React.Fragment>
          );
        } else if (food.foodType == "Dairy") {
          return (
            <React.Fragment key={`food-${index}`}>
              <div className="item">
                <div className="overlayDelete">
                  <Button color='red'> Delete Food</Button>
                </div>
                <img src={Dairy}></img>
                <h1>{food.foodName}</h1>
                <p>Exp Date: {food.expDate}</p>
                <p>Qty: {food.quantity}</p>
              </div>
            </React.Fragment>
          );
        } else if (food.foodType == "Other") {
          return (
            <React.Fragment key={`food-${index}`}>
              <div className="item">
                <div className="overlayDelete">
                  <Button color='red'> Delete Food</Button>
                </div>
                <img src={Extra}></img>
                <h1>{food.foodName}</h1>
                <p>Exp Date: {food.expDate}</p>
                <p>Qty: {food.quantity}</p>
              </div>
            </React.Fragment>
          );
        }
      });
      setFoodList(foodList);
    } else {
    }
  }

  React.useEffect(() => {
    setFoods();
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

        <Container className="fridgeInformation">
          <div className="fridgeInfoHolder">
            <div className="fridgeImage">
              <img src={fridgeIcon} alt="fridgeIcon"></img>
            </div>
            <div className="fridgeIn">
              <h1>{state.selectedFridge.fridgeName}</h1>
              <p>Fridge Location: Living Room</p>
              <p>Last Restock: 1/23/22</p>
              <Link to="/restock">
                {" "}
                <button> Restock Food</button>{" "}
              </Link>
            </div>
          </div>
        </Container>

        <Container className="fridgeItems">
          <div className="marginHolder">
            <div className="itemsHolder">{listFood}</div>
          </div>
        </Container>

        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export default FridgePage;
