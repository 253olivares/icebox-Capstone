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

const RestockPage = () => {

    const state = React.useContext(State);


    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
        { mobileNavOpen ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"; }
    };

    return (
        <React.Fragment>
            <main>
                {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}
                <Container className="addFoodItems">
                    <Form>
                        <Form.Field>
                            <label>Food Name:</label>
                            <Input
                                placeholder='Food Name...'
                            ></Input>
                        </Form.Field>
                        <Form.Select
                            fluid
                            label="Food Type"
                            placeholder="Food Type..."
                        >
                        </Form.Select>
                        <Form.Field>
                            <label>Expiration Date:</label>
                            <Input placeholder='Enter Expiration Date...'></Input>
                        </Form.Field>
                        <Button></Button>
                    </Form>
                </Container>

            </main>
        </React.Fragment>
    );
};

export default RestockPage;