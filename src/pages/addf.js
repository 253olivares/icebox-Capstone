import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Form, Button } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import Footer from "../components/Footer";


const addFridge = () => {
    return (
        <React.Fragment>
            <UserNav></UserNav>
            <MobileNav></MobileNav>
            <Container className="addFridgePage">
                <Form>
                    <Form.Field>
                        <label>Name of Fridge</label>
                        <input placeholder="" />
                    </Form.Field>
                    <Form.Field>
                        <label>Fridge Location</label>
                    </Form.Field>
                    <Form.Field>
                        <label>Fridge Owner</label>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default addFridge;