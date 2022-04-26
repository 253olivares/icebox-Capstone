import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";
import Footer from "../components/Footer";

import "../css/styles.css";

import State from "../state";
import { Button, Container, Form, Input } from "semantic-ui-react";
import { async } from "@firebase/util";

import { addFood } from "../services/db";

const RestockPage = () => {
  const state = React.useContext(State);

  const foodOptions = [
    { key: "f", text: "Fruits", value: "Fruits" },
    { key: "v", text: "Vegetables", value: "Vegetables" },
    { key: "g", text: "Grains", value: "Grains" },
    { key: "p", text: "Protein", value: "Protein" },
    { key: "d", text: "Dairy", value: "Dairy" },
    { key: "o", text: "Other", value: "Other" },
  ];

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    {
      mobileNavOpen
        ? (document.body.style.overflow = "scroll")
        : (document.body.style.overflow = "hidden");
    }
  };

  const initialFood = {
    fridge: state.selectedFridge.id,
    foodName: "",
    foodType: "",
    expDate: "",
    quantity: "",
  };

  const [newFood, setNewFood] = React.useState(initialFood);

  async function createFood() {
    setNewFood(newFood);
    // console.log(newFood);
    const food = await addFood(newFood);

    navigate("/fridge");
  }

  function changeNewFood(e, { value, name }) {
    const newFoodClone = { ...newFood };
    newFoodClone[name] = value;
    setNewFood(newFoodClone);
  }

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
        <Container className="addFoodItems">
          <Form className="addfoodForm">
            <Form.Field>
              <label>Food Name:</label>
              <Input
                placeholder="Food Name..."
                name="foodName"
                value={newFood.foodName}
                onChange={changeNewFood}
                required ></Input>
            </Form.Field>
            <Form.Select
              fluid
              label="Food Type"
              placeholder="Food Type..."
              options={foodOptions}
              name="foodType"
              value={newFood.foodType}
              onChange={changeNewFood}
              required ></Form.Select>
            <Form.Field>
              <label>Expiration Date:</label>
              <Input
                type="date"
                placeholder="Expiration Format: MM/DD/YY"
                name="expDate"
                value={newFood.expDate}
                onChange={changeNewFood}
                required ></Input>
            </Form.Field>
            <Form.Field>
              <label>QTY:</label>
              <Input
                placeholder="Quantity of Food..."
                name="quantity"
                value={newFood.quantity}
                onChange={changeNewFood}
                required ></Input>
            </Form.Field>
            <Button type="submit" onClick={createFood}>
              {" "}
              Submit{" "}
            </Button>
          </Form>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default RestockPage;
