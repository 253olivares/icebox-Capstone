import app from "gatsby-plugin-firebase-v9.0";

// initializes the auth, but we need to pass app to auth function
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { doc, getFirestore, setDoc } from "firebase/firestore";

// sign in function (?) - pulled from firebase docs
const auth = getAuth(app);
const db = getFirestore(app);

export function signIn(email, password, first, last) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log("user signed in successfully");
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
    })
    .catch((error) => {
      // An error happened.
      console.log("error signing out user" + error);
    });
}
function updateUser(username) {
  updateProfile(auth.currentUser, {
    displayName: username,
  }).then(() => {
    console.log("display name updated");
  });
}

export function createUser(email, password, first, last) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let username = first + " " + last;
      console.log("user created successfully");
      updateUser(username);

      setDoc(doc(db, "users", user.uid), {
        email: email,
        first_name: first,
        last_name: last,
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("cannot create user");
      // ..
    });
}
