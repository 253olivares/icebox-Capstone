import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container, Input } from "semantic-ui-react";
import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";
import State from "../state";


import Footer from "../components/Footer";

import { createUser } from "../services/db";

const CreatePage = () => {
  const state = React.useContext(State);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const initialUserInfo = {
    email: "",
    password: "",
    first: "",
    last: "",
  };

  const [userInfo, setUserInfo] = React.useState(initialUserInfo);

  function createNewUser() {
    setUserInfo(userInfo);
    createUser(
      userInfo.email,
      userInfo.password,
      userInfo.first,
      userInfo.last
    );
  }

  function changeNewUser(e, { value, name }) {
    const userInfoClone = { ...userInfo };
    userInfoClone[name] = value;
    setUserInfo(userInfoClone);
  }
  return (
    <React.Fragment>
      <main>
        {state.user ? <><UserNav openCloseNav={openCloseNav}></UserNav>{mobileNavOpen ? <MobileNavLogged ></MobileNavLogged> : null}</> : <><Nav openCloseNav={openCloseNav}></Nav>{mobileNavOpen ? <MobileNav ></MobileNav> : null}</>}

        <Container className="createBox">
          <div className="createContainer">
            <h1 className="head">Welcome!</h1>
            <Input
              className="firstName"
              placeholder="First Name"
              name="first"
              value={userInfo.first}
              onChange={changeNewUser}
            ></Input>
            <Input
              className="lastName"
              placeholder="Last Name"
              name="last"
              value={userInfo.last}
              onChange={changeNewUser}
            ></Input>
            <p>*email cannot be changed</p>
            <Input
              className="email"
              placeholder="Email"
              name="email"
              value={userInfo.email}
              onChange={changeNewUser}
            ></Input>
            <Input
              className="password"
              placeholder="Password"
              name="password"
              value={userInfo.password}
              onChange={changeNewUser}
            ></Input>
            <button className="createAccount" onClick={createNewUser}>
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </Container>

        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};
export default CreatePage;
