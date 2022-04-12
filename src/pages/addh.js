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

import { addHouse } from "../services/db";

const AddHouse = () => {
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

  const initialHouse = {
    owner: state.user.uid,
    ownerName: state.user.displayName,
    houseName: "",
    description: "",
  };

  const [newHouse, setNewHouse] = React.useState(initialHouse);

  async function createNewHouse() {
    setNewHouse(newHouse);
    const house = await addHouse(newHouse);
    console.log(house);
    state.addFridge(house);
    navigate("/dashboard");
  }

  function changeNewHouse(e, { value, name }) {
    const newHouseClone = { ...newHouse };
    newHouseClone[name] = value;
    setNewHouse(newHouseClone);
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

      <Container className="addHousePage">
        <Form className="addhouseForm">
          <Form.Field>
            <label>Household Name:</label>
            <Input
              placeholder="Household Name..."
              name="houseName"
              value={newHouse.houseName}
              onChange={changeNewHouse}
            />
          </Form.Field>
          <Form.Field>
            <label>Household User:</label>
            {state.user ? (
              <input
                disabled
                placeholder={state.user.displayName}
                value={state.user.displayName}
              />
            ) : (
              <input disabled placeholder="Null" value="Null" />
            )}
          </Form.Field>
          <Form.Field>
            <label>Description:</label>
            <Input
              placeholder="Descrpition..."
              name="description"
              value={newHouse.description}
              onChange={changeNewHouse}
            />
          </Form.Field>
          <Button type="submit" onClick={createNewHouse}>
            Submit
          </Button>
        </Form>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default AddHouse;
