import React from "react";
import { getHouses } from "../services/db";
import { navigate } from "gatsby";

const State = React.createContext();

export const Provider = ({ children }) => {
  const [state, setState] = React.useState();

  function testing() {
    setState({ ...state, testing: true });
  }

  function addHouseState(newHouse) {
    const oldHouses = state.houses || [];

    setState({ ...state, houses: [...oldHouses, newHouse] });
  }
  // old code before combining code
  // async function loadHouses() {
  //   const houses = await getHouses(state.user.uid);
  //   setState({ ...state, houses });
  // }

  function addFridgeState(newFridge) {
    const oldFridges = state.fridges || [];

    setState({ ...state, fridges: [...oldFridges, newFridge] });
  }

  function loadFridges(fridges) {
    setState({ ...state, fridges });
  }
  // main code that will run when user signs in with main objective
  // to sign in user and grab all missing information
  async function signedInAndLoadAllInformation(user) {
    const houses = await getHouses(user.uid);
    setState({ ...state, user, houses });
  }

  function clearState() {
    setState({ ...state, user: null });
  }

  function createNstore(user) {
    setState({ ...state, user });
  }

  const stateVals = {
    ...state,
    addFridgeState,
    loadFridges,
    signedInAndLoadAllInformation,
    clearState,
    testing,
    createNstore,
    addHouseState,
  };

  return <State.Provider value={stateVals}>{children}</State.Provider>;
};

export default State;
