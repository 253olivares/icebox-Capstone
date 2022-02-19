import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Menu, Image } from 'semantic-ui-react';
import "../css/styles.css";
import burgerMenu from '../images/bars-solid.png';


const HomePage = () => {

    return (
        <React.Fragment>
            {/* Main page code */}
            <main>
                <Menu className='navbar'>
                    <div className='navbarHolder'>

                        <Menu.Item
                            name='ABOUT'
                        >
                            <Link to="/"> ABOUT</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='LOGIN/REGISTER'
                        >
                            <Link to="/login"> LOGIN / REGISTER</Link>
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
                <Container className='iceboxDesc'>
                    <div className='decHolder'>
                        <div className='leftFlex'>
                            <div>
                                <h1>ICEBOX</h1>
                                <img src='' alt='ICEBOXLOGO'></img>
                            </div>
                        </div>
                        <div className='rightFlex'>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button>
                                    SIGN UP / LOGIN
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className='iceboxTrack'>
                    <div className='trackHolder'>
                        <div className='leftFlex'>
                            <h1>TRACK FRESHNESS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='rightFlex'>
                            <img src='' alt='TRACK FRESH IMAGE'></img>
                        </div>
                    </div>
                </Container>
                <Container className='iceboxShare'>
                    <div className='shareHolder'>
                        <div className='leftFlex'>
                            <img src='' alt='SHARING IMAGE'></img>
                        </div>
                        <div className='rightFlex'>
                            <h1>SHARE WITH OTHERS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Container>
                <Container className='iceboxShopping'>
                    <div className='shoppingHolder'>
                        <div className='leftFlex'>
                            <h1>SHOPPING MADE EASY</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='rightFlex'>
                            <img src='' alt='SHOPPING IMAGE'></img>
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
        </React.Fragment >
    );
}

export default HomePage;