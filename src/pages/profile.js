import React from 'react';
import { navigate } from "gatsby";
import 'semantic-ui-css/semantic.css';
import { Container, Input, Label } from 'semantic-ui-react';
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";

import profileIcon from "../images/Icebox_assets/profile_icon.png";

import Footer from "../components/Footer";

import State from "../state";

const ProfilePage = () => {

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
                <Container className='profileSection'>
                    <h1>PROFILE</h1>
                    <div className='profileInformationHolder'>
                        <div className='profileImageChangeButton'>
                            <img src={profileIcon} alt='profile icon'></img>
                            <button className='changeIcon'>Change</button>
                        </div>
                        <div className='profileInformation'>
                            <label>Display Name:</label>
                            <br></br>
                            {state.user ? <Input className='inputPad' placeholder={state.user.displayName} value={state.user.displayName}></Input> : <Input className='inputPad' placeholder='No Display Name...'></Input>}
                            <h1 className='uI'>USER INFO</h1>
                            <p className='emailChange'>*email cannot be changed</p>
                            {state.user ? <Input className='inputPad' placeholder={state.user.email} value={state.user.email} disabled></Input> : <Input className='inputPad' placeholder='Null' value="Null" disabled></Input>}
                            <label>Password:</label>
                            <br></br>
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