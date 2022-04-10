import React from 'react';
import { navigate } from "gatsby";
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Container, Button } from 'semantic-ui-react';
import "../css/styles.css";


import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";
import State from "../state";


import Footer from "../components/Footer";

const DashboardPage = () => {

    const state = React.useContext(State);

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const openCloseNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };


    return (
        <React.Fragment>
            <main>
                {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}
                <Container className='dashboardName'>
                    <div className='dashcontainer'>
                        <img className='dashboardImage'></img>
                        <div className='dashboardInformation'>
                            <h1><span className='userName'>
                                {state.user ? <>{state.user.displayName}</> : <>User's Name</>}
                            </span> DASHBOARD</h1>
                            <p>Number of Households: X</p>
                            <p>Number of Fridges: X</p>
                        </div>
                    </div>
                </Container>

                <Container className='dashboardHouseholds'>
                    <div className='houseContainer'>
                        <h1 className='hCHead'>HOUSEHOLDS <Button className='addH'> <Link to="/addh"> Add House</Link></Button></h1>
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
                        <h1 className='iFCHead'>
                            INDIVIDUAL FRIDGES <Button className='addF'> <Link to="/addf"> Add Fridge</Link></Button>
                        </h1>
                        <div className='fridges'>
                            <a href='/fridge'>
                                <div className='fridges_One'>
                                    <img></img>
                                    <div className='drigeinformation'>
                                        <h1>FRIDGE'S NAME</h1>
                                        <hr></hr>
                                        <p>Number of Items: X</p>
                                        <p>Recent Expired Items: X</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>

                <Footer></Footer>
            </main>
        </React.Fragment>
    );


}

export default DashboardPage;