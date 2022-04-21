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

import {
  doc,
  getFirestore,
  setDoc,
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// sign in function (?) - pulled from firebase docs
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    // console.log("Logged in!");
  } else {
    console.log("no user");
  }
});

export async function signIn(email, password, first, last) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      // console.log("user signed in successfully");
      // console.log(GlobalVarIfLogged);
      // GlobalVarIfLogged = true;
      return user;
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
      // console.log("user signed out");
      // GlobalVarIfLogged = false;
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

export async function addHouse(newHouse) {
  const docRef = await addDoc(collection(db, "houses"), {
    owner: newHouse.owner,
    ownerName: newHouse.ownerName,
    houseName: newHouse.houseName,
    description: newHouse.description,
  });
  const docSnap = getDoc(docRef);
  const docData = (await docSnap).data();
  return docData;
}

export async function addFridge(newFridge) {
  const docRef = await addDoc(collection(db, "fridges"), {
    owner: newFridge.owner,
    ownerName: newFridge.ownerName,
    fridgeName: newFridge.fridgeName,
    description: newFridge.description,
    household: newFridge.household,
  });
  const docSnap = getDoc(docRef);
  const docData = (await docSnap).data();
  // // docData.id = docSnap.id;
  // console.log(docSnap.id);
  return docData;
}

export async function addFood(newFood) {
  const docRef = await addDoc(collection(db, "food"), {
    fridge: newFood.fridge,
    foodName: newFood.foodName,
    foodType: newFood.foodType,
    expDate: newFood.expDate,
    quantity: newFood.quantity,
  });
  const docSnap = getDoc(docRef);
  const docData = (await docSnap).data();
  return docData;
}

export async function getHouses(user) {
  const houses = [];
  const q = query(collection(db, "houses"), where("owner", "==", user));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());

    houses.push(doc.data());
  });
  // console.log(houses);
  return houses;
}

export async function getFridges(user) {
  const fridges = [];
  const q = query(collection(db, "fridges"), where("owner", "==", user));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const info = doc.data();
    info.id = doc.id;
    // console.log(info);
    fridges.push(info);
  });
  return fridges;
}

export async function getFood(fridgeID) {
  const food = [];
  const q = query(collection(db, "food"), where("fridge", "==", fridgeID));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    food.push(doc.data());
  });
  return food;
}

export async function createUser(email, password, first, last) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let username = first + " " + last;
      // console.log("user created successfully");
      updateUser(username);

      setDoc(doc(db, "users", user.uid), {
        email: email,
        first_name: first,
        last_name: last,
      });
      console.log(user);
      navigate("/dashboard");
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("cannot create user");
      // ..
    });
}
