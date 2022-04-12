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

    const foodOptions = [
        { key: 'f', text: 'Fruits', value: 'Fruits' },
        { key: 'v', text: 'Vegetables', value: 'Vegetables' },
        { key: 'g', text: 'Grains', value: 'Grains' },
        { key: 'p', text: 'Protein', value: 'Protein' },
        { key: 'd', text: 'Dairy', value: 'Dairy' },
        { key: 'o', text: 'Other', value: 'Other' },
    ]

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
        { mobileNavOpen ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"; }
    };

    async function AddFood() {
        navigate("/dashboard");
    }

    return (
        <React.Fragment>
            <main>
                {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}
                <Container className="addFoodItems">
                    <Form className="addfoodForm">
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
                            options={foodOptions}
                        >
                        </Form.Select>
                        <Form.Field>
                            <label>Expiration Date:</label>
                            <Input placeholder='Expiration Format: MM/DD/YY'></Input>
                        </Form.Field>
                        <Form.Field>
                            <label>QTY:</label>
                            <Input placeholder='Quantity of Food...'></Input>
                        </Form.Field>
                        <Button type="submit" onClick={AddFood}> Submit </Button>
                    </Form>
                </Container>

            </main>
        </React.Fragment>
    );
};

export default RestockPage;