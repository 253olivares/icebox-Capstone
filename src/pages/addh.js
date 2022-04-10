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


const AddHouse = () => {

    const state = React.useContext(State);

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <React.Fragment>
            {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}

            <Container className="addHousePage">
                <Form className="addhouseForm">
                    <Form.Field>
                        <label>Household Name:</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Household User:</label>
                        {state.user ? <input disabled placeholder={state.user.displayName} value={state.user.displayName} /> : <input disabled placeholder="Null" value="Null" />}
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