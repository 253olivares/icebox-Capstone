import React from "react";
import "semantic-ui-css/semantic.css";
import { Link } from "gatsby";
import { Container, Menu, Image, Input, Button } from "semantic-ui-react";

import "../css/styles.css";
import burgerMenu from "../images/bars-solid.png";

import Nav from "../components/Nav";
import UserNav from "../components/NavLogged";
import Footer from "../components/Footer";
import MobileNavLogged from "../components/MobileNavLogged";

import { signIn } from "../services/db";

const LoginPage = () => {


  const initialUserLogin = {
    email: "",
    password: "",
  };

  const [userLogin, setUserLogin] = React.useState(initialUserLogin);
  function newUser() {
    setUserLogin(userLogin);
    signIn(userLogin.email, userLogin.password);
  }

  function changeUserLogin(e, { value, name }) {
    const userLoginClone = { ...userLogin };
    userLoginClone[name] = value;
    setUserLogin(userLoginClone);
  }
  return (
    <React.Fragment>
      <main>
        <UserNav></UserNav>
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
                {" "}
                Login{" "}
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
