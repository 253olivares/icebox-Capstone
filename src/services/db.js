import app from "gatsby-plugin-firebase-v9.0";


// initializes the auth, but we need to pass app to auth function
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// sign in function (?) - pulled from firebase docs
const auth = getAuth(app);

var GlobalVarIfLogged = false;

export function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user signed in successfully");
      console.log(GlobalVarIfLogged);
      GlobalVarIfLogged = true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("user signed out");
      GlobalVarIfLogged = false;
    })
    .catch((error) => {
      // An error happened.
      console.log("error signing out user" + error);
    });
}
export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user created successfully");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("cannot create user");
      // ..
    });
}
