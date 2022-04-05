import app from "gatsby-plugin-firebase-v9.0";
import { navigate } from "gatsby";


// initializes the auth, but we need to pass app to auth function
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, getFirestore, setDoc } from "firebase/firestore";

// sign in function (?) - pulled from firebase docs
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, user => {

  if (user != null) {
    console.log('Logged in!');

  } else {
    console.log('no user');

  }
})

export async function signIn(email, password, first, last) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log("user signed in successfully");
      // console.log(GlobalVarIfLogged);
      // GlobalVarIfLogged = true;

      return user
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
      // GlobalVarIfLogged = false;
      navigate("/");

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
      window.location.href = "/dashboard";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("cannot create user");
      // ..
    });
}
