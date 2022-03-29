import React from "react";
import { Link } from "gatsby";
// import Navbar from '../../components/Navbar';
import { Container, Segment, Menu } from "semantic-ui-react";




import "../css/styles.css";

const MobileNav = () => {
    return (
        <React.Fragment>

            <Menu className='MobileNavMenu'>
                <div className='MobileNavHolder'>
                    <div>
                        <h1 className='MNWelcome'>Welcome</h1>
                    </div>
                    <hr className='firsthr'></hr>
                    <div>
                        <h1 className='MNMore MNOption'>ABOUT</h1>
                    </div>
                    <hr className='followinghr'></hr>
                    <div>
                        <h1 className='MNMore MNOption'>LOGIN / REGISTER</h1>
                    </div>
                    <hr className='followinghr'></hr>
                    <div>
                        <h1 className='MNMore MNOption'>TRACKING</h1>
                    </div>
                    <hr className='followinghr'></hr>
                    <div>
                        <h1 className='MNMore MNOption'>SHOPPING</h1>
                    </div>
                    <hr className='followinghr'></hr>


                    <div className='MNbottomInfo'>
                        <img className='MNFooter'></img>
                        <p className='MNDesc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                    </div>
                </div>
            </Menu>
        </React.Fragment>
    );
};

export default MobileNav;
