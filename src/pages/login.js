import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Menu, Image, Input, Button } from 'semantic-ui-react';
import "../css/styles.css";
import burgerMenu from '../images/bars-solid.png';

const LoginPage = () => {
    return (
        <React.Fragment>
            <main>
                <Menu className='navbar'>
                    <div className='navbarHolder'>
                        <Menu.Item
                            name='ACCOUNT'
                        >
                            <Link to="/profile">ACCOUNT</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='DASHBOARD'
                        >
                            <Link to="/dashboard">DASHBOARD</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='SIGNOUT'
                        >
                            SIGN OUT
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
                <Container className='loginBox'>

                    <div className='loginContainer'>
                        <div className='leftBox'>
                            <Image>

                            </Image>
                        </div>
                        <div className='rightBox'>
                            <h1 className='bigHead'>Welcome Back</h1>
                            <p className='subHead'>so good to see you :)</p>

                            <Input className='emailInput' placeholder='Email' />
                            <Input className='passwordInput' placeholder='Password' />

                            <p className='subForgor'>forgot password?</p>

                            <button className='logOption'> Login </button>

                            <div className='divider'>
                                <hr></hr>
                                <p>or</p>
                                <hr></hr>
                            </div>

                            <Button className='googleBtnSignIn'>Sign in with Google</Button>

                            <p className='newUser'>New user? <a href='/create'>Create account</a> here!</p>

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

export default LoginPage;