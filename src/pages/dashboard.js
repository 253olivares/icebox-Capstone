import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Menu, Image, Input, Button } from 'semantic-ui-react';
import "../css/styles.css";
import burgerMenu from '../images/bars-solid.png';

const DashboardPage = () => {

    return (
        <React.Fragment>
            <main>
                <Menu className='navbar'>
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
                </Menu>

                <Container className='dashboardName'>
                    <div className='dashcontainer'>
                        <img className='dashboardImage'></img>
                        <div className='dashboardInformation'>
                            <h1><span className='userName'>USER'S NAME</span> DASHBOARD</h1>
                            <p>Number of Households: X</p>
                            <p>Number of Fridges: X</p>
                        </div>
                    </div>
                </Container>

                <Container className='dashboardHouseholds'>
                    <div className='houseContainer'>
                        <h1>HOUSEHOLDS</h1>
                        <div className='householdsContainer'>
                            <div className='householdFridge_One'>
                                <img></img>
                                <p><span>Household</span> Name</p>
                                <p>1 Fridge</p>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container className='individualFrdges'>
                    <div className='iFContainer'>
                        <h1>
                            INDIVIDUAL FRIDGES
                        </h1>
                        <div className='fridges'>
                            <div className='fridges_One'>
                                <img></img>
                                <div className='drigeinformation'>
                                    <h1>FRIDGE'S NAME</h1>
                                    <hr></hr>
                                    <p>Number of Items: X</p>
                                    <p>Recent Expired Items: X</p>
                                </div>
                            </div>
                        </div>
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

export default DashboardPage;