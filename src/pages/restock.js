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


            </main>
        </React.Fragment>
    );
};

export default RestockPage;