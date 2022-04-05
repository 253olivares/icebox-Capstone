import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Form, Button } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";

const addInvetory = () => {

    return (
        <React.Fragment>
            <UserNav></UserNav>
            <MobileNav></MobileNav>
            <Container className="addInvetory">

            </Container>
        </React.Fragment>
    );

};

export default addInvetory;