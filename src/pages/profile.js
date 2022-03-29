import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Menu, Image, Input, Button } from 'semantic-ui-react';
import "../css/styles.css";
import burgerMenu from '../images/bars-solid.png';

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";

const ProfilePage = () => {

    return (
        <React.Fragment>
            <main>
                <UserNav></UserNav>
                <MobileNav></MobileNav>
                {/* <Menu className='navbar'>
                    <div className='navbarHolder'>
                        <Menu.Item
                            name='ABOUT'
                        >
                            <Link to="/">ABOUT</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='LOGIN/REGISTER'
                        >
                            <Link to="/login">LOGIN / REGISTER</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='TRACKING'
                        >
                            TRACKING
                        </Menu.Item>
                        <Menu.Item
                            name='SHOPPING'
                        >
                            SHOPPING
                        </Menu.Item>
                    </div>
                    <div className='navbarHolderMobile'>
                        <div className='navbarMenu'>
                            <img src={burgerMenu} alt="MenuBurger"></img>
                        </div>
                        <div className='appTitle'>
                            <h1>ICEBOX</h1>
                        </div>
                    </div>
                </Menu> */}

                <Container className='profileSection'>
                    <h1>PROFILE</h1>
                    <div className='profileInformationHolder'>
                        <div className='profileImageChangeButton'>
                            <img src='' alt='profile icon'></img>
                            <button className='changeIcon'>Change</button>
                        </div>
                        <div className='profileInformation'>
                            <Input className='inputPad' placeholder='First Name...'></Input>
                            <Input className='inputPad' placeholder='Last Name...'></Input>
                            <h1 className='uI'>USER INFO</h1>
                            <p className='emailChange'>*email cannot be changed</p>
                            <Input className='inputPad' placeholder='Email...'></Input>
                            <Input className='inputPad' placeholder='Enter New Password'></Input>
                        </div>
                    </div>
                    <div className='buttonDiv'>
                        <button className='updateProfileButton'>Update Profile</button>
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
        </React.Fragment>
    );

}

export default ProfilePage;