import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";


import Footer from "../components/Footer";
import State from "../state";

const AddInvetory = () => {
    const state = React.useContext(State);

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };


    return (
        <React.Fragment>
            {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}
            <Container className="addInvetory">

            </Container>
            <Footer></Footer>
        </React.Fragment>
    );

};

export default AddInvetory;