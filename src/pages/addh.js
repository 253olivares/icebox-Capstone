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


const AddHouse = () => {

    const state = React.useContext(State);

    return (
        <React.Fragment>
            <UserNav></UserNav>
            <MobileNav></MobileNav>
            <Container className="addHousePage">
                <Form className="addhouseForm">
                    <Form.Field>
                        <label>Household Name:</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Household User:</label>
                        <input disabled />
                    </Form.Field>
                    <Form.Field>
                        <label>Description:</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <Footer></Footer>
        </React.Fragment>
    );

};

export default AddHouse;