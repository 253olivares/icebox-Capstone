import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container, Form, Button, Input } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import Footer from "../components/Footer";
import State from "../state";
import { addFridge } from "../services/db";

const HouseholdOptions = [];

const AddFridge = () => {
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

  const initialFridge = {
    owner: state.user.uid,
    ownerName: state.user.displayName,
    fridgeName: "",
    description: "",
    household: "",
  };

  const HouseholdOptions = state.houses;

  const [newFridge, setNewFridge] = React.useState(initialFridge);

  async function createNewFridge() {
    setNewFridge(newFridge);
    const fridge = await addFridge(newFridge);
    console.log(fridge);
    state.addFridgeState(fridge);
  }

  function changeNewFridge(e, { value, name }) {
    const newFridgeClone = { ...newFridge };
    newFridgeClone[name] = value;
    setNewFridge(newFridgeClone);
  }

  return (
    <React.Fragment>
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

      <Container className="addFridgePage">
        <Form className="addFridgeForm">
          <Form.Field>
            <label>Name of Fridge:</label>
            <Input
              placeholder="Name of Fridge..."
              name="fridgeName"
              value={newFridge.fridgeName}
              onChange={changeNewFridge}
            />
          </Form.Field>
          <Form.Field>
            <label>Fridge Description:</label>
            <Input
              placeholder="Description of Fridge Location, Food type, Ect...."
              name="description"
              value={newFridge.description}
              onChange={changeNewFridge}
            />
          </Form.Field>
          <Form.Field>
            <label>Fridge Owner:</label>
            {state.user ? (
              <Input
                disabled
                placeholder={state.user.displayName}
                value={state.user.displayName}
              />
            ) : (
              <Input disabled placeholder="Null" value="Null" />
            )}
          </Form.Field>
          <Form.Select
            fluid
            label="Household:"
            options={HouseholdOptions}
            placeholder="Select HouseHold..."
          />
          <Button type="submit" onClick={createNewFridge}>
            Submit
          </Button>
        </Form>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default AddFridge;
