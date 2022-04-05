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

const AddInvetory = () => {
    const state = React.useContext(State);

    return (
        <React.Fragment>
            <UserNav></UserNav>
            <MobileNav></MobileNav>
            <Container className="addInvetory">

            </Container>
            <Footer></Footer>
        </React.Fragment>
    );

};

export default AddInvetory;