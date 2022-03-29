import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Menu, Image, Input, Button } from 'semantic-ui-react';
import "../css/styles.css";
import burgerMenu from '../images/bars-solid.png';

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";

const CreatePage = () => {

    return (
        < React.Fragment >
            <main>
                <Nav></Nav>
                <MobileNav></MobileNav>

                <Container className='createBox'>
                    <div className='createContainer'>
                        <h1 className='head'>Welcome!</h1>
                        <Input className='firstName' placeholder="First Name"></Input>
                        <Input className='lastName' placeholder="Last Name"></Input>
                        <p>*email cannot be changed</p>
                        <Input className='email' placeholder="Email"></Input>
                        <Input className='password' placeholder="Password"></Input>
                        <button className='createAccount'> Sign Up </button>
                    </div>
                </Container>

                <Container className='footer'>
                    <div className='footerHolder'>
                        <div className='pagelogDesc'>
                            <img src='' alt='AppImg'></img>
                            <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu</p>
                        </div>
                        <div className='CatNav'>
                            <div className='cat'>
                                <h1>ABOUT</h1>
                                <hr></hr>
                                <p>App</p>
                                <p>Tracking</p>
                                <p>Sharing</p>
                                <p>Shopping</p>
                            </div>
                            <div className='cat'>
                                <h1>ACCOUNT</h1>
                                <hr></hr>
                                <p>Loggin</p>
                                <p>Logout</p>
                            </div>
                            <div className='cat'>
                                <h1>LICENSING</h1>
                                <hr></hr>
                                <p>Location</p>
                                <p>Contacting</p>
                                <p>Permission</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

        </React.Fragment >
    );

}
export default CreatePage;