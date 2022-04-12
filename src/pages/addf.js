import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container, Form, Button } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import Footer from "../components/Footer";

import State from "../state";

const HouseholdOptions = []

const AddFridge = () => {
    const state = React.useContext(State);

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
        { mobileNavOpen ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"; }
    };

    return (
        <React.Fragment>
            {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}

            <Container className="addFridgePage">
                <Form className="addFridgeForm">
                    <Form.Field>
                        <label>Name of Fridge:</label>
                        <input placeholder="Name of Fridge..." />
                    </Form.Field>
                    <Form.Field>
                        <label>Fridge Description:</label>
                        <input placeholder="Description of Fridge Location, Food type, Ect...." />
                    </Form.Field>
                    <Form.Field>
                        <label>Fridge Owner:</label>
                        {state.user ? <input disabled placeholder={state.user.displayName} value={state.user.displayName} /> : <input disabled placeholder="Null" value="Null" />}
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Household:'
                        options={HouseholdOptions}
                        placeholder='Select HouseHold...'
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default AddFridge;