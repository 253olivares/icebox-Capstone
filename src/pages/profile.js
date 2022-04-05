import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Menu, Image, Input, Button } from 'semantic-ui-react';
import "../css/styles.css";
import burgerMenu from '../images/bars-solid.png';

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";
import State from "../state";

import Footer from "../components/Footer";

const ProfilePage = () => {

    const state = React.useContext(State);

    return (
        <React.Fragment>
            <main>
                <UserNav></UserNav>
                <MobileNav></MobileNav>

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
                            <Input className='inputPad' placeholder='Email...' disabled></Input>
                            <Input className='inputPad' placeholder='Enter New Password'></Input>
                        </div>
                    </div>
                    <div className='buttonDiv'>
                        <button className='updateProfileButton'>Update Profile</button>
                    </div>
                </Container>

                <Footer></Footer>
            </main>
        </React.Fragment>
    );

}

export default ProfilePage;