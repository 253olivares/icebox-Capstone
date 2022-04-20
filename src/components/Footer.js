import React from "react";
import "semantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";
import "../css/styles.css";

import iceboxLogo from "../images/Icebox_assets/logo.svg";

const AppFooter = () => {
    return (
        <React.Fragment>
            <Container className="footer">
                <div className="footerHolder">
                    <div className="pagelogDesc">
                        <div className="imageNText">
                            <img src={iceboxLogo} alt="AppImg"></img>
                            <h1>ICEBOX</h1>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillu
                        </p>
                    </div>
                    <div className="CatNav">
                        <div className="cat">
                            <h1>ABOUT</h1>
                            <hr></hr>
                            <p>App</p>
                            <p>Tracking</p>
                            <p>Sharing</p>
                            <p>Shopping</p>
                        </div>
                        <div className="cat">
                            <h1>ACCOUNT</h1>
                            <hr></hr>
                            <p>Login</p>
                            <p>Logout</p>
                        </div>
                        <div className="cat">
                            <h1>LICENSING</h1>
                            <hr></hr>
                            <p>Location</p>
                            <p>Contacting</p>
                            <p>Permission</p>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default AppFooter;