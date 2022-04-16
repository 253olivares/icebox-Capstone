import React from "react";
import { navigate } from "gatsby";
import "semantic-ui-css/semantic.css";
import { Container, Image, Input, Button } from "semantic-ui-react";

import "../css/styles.css";

import MobileNav from "../components/MobileNav";
import UserNav from "../components/NavLogged";
import Nav from "../components/Nav";
import MobileNavLogged from "../components/MobileNavLogged";
import Footer from "../components/Footer";

import { signIn } from "../services/db";

import State from "../state";

const LoginPage = () => {
  const state = React.useContext(State);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const openCloseNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    {
      mobileNavOpen
        ? (document.body.style.overflow = "scroll")
        : (document.body.style.overflow = "hidden");
    }
  };

  const initialUserLogin = {
    email: "",
    password: "",
  };

  const [userLogin, setUserLogin] = React.useState(initialUserLogin);
  async function newUser() {
    setUserLogin(userLogin);
    const user = await signIn(userLogin.email, userLogin.password);
    await state.signedIn(user);
    await state.loadHouses(user.uid);
    navigate('/dashboard');
  }

  function changeUserLogin(e, { value, name }) {
    const userLoginClone = { ...userLogin };
    userLoginClone[name] = value;
    setUserLogin(userLoginClone);
  }

  return (
    <React.Fragment>
      <main>
        {state.user ? (
          <>
            <UserNav openCloseNav={openCloseNav}></UserNav>
            {mobileNavOpen ? <MobileNavLogged></MobileNavLogged> : null}
          </>
        ) : (
          <>
            <Nav openCloseNav={openCloseNav}></Nav>
            {mobileNavOpen ? <MobileNav></MobileNav> : null}
          </>
        )}
        <Container className="loginBox">
          <div className="loginContainer">
            <div className="leftBox">
              <Image></Image>
            </div>
            <div className="rightBox">
              <h1 className="bigHead">Welcome Back</h1>
              <p className="subHead">so good to see you :)</p>

              <Input
                className="emailInput"
                placeholder="Email"
                value={userLogin.email}
                name="email"
                onChange={changeUserLogin}
              />
              <Input
                className="passwordInput"
                placeholder="Password"
                type="password"
                value={userLogin.password}
                name="password"
                onChange={changeUserLogin}
              />

              <p className="subForgor">forgot password?</p>

              <button className="logOption" onClick={newUser}>
                Login
              </button>

              <div className="divider">
                <hr></hr>
                <p>or</p>
                <hr></hr>
              </div>

              <Button className="googleBtnSignIn">Sign in with Google</Button>

              <p className="newUser">
                New user? <a href="/create">Create account</a> here!
              </p>
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
