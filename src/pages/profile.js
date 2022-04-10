import React from 'react';
import { navigate } from "gatsby";
import 'semantic-ui-css/semantic.css';
import { Container, Input } from 'semantic-ui-react';
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";
import Footer from "../components/Footer";

import State from "../state";

const ProfilePage = () => {

    const state = React.useContext(State);

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };
    return (
        <React.Fragment>
            <main>
                {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}
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