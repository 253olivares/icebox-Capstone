import React from "react";
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
    return (
        <React.Fragment>
            <UserNav></UserNav>
            <MobileNav></MobileNav>
            <Container className="addFridgePage">
                <Form>
                    <Form.Field>
                        <label>Name of Fridge:</label>
                        <input placeholder="Name of Fridge..." />
                    </Form.Field>
                    <Form.Field>
                        <label>Fridge Description:</label>
                        <input placeholder="Description of Fridge Location, Food type, Ect...." />
                    </Form.Field>
                    <Form.Field>
                        <label>Fridge Owner</label>
                        <input disabled />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Household:'
                            options={HouseholdOptions}
                            placeholder='Select HouseHold...'
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default AddFridge;