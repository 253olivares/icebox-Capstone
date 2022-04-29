import React from "react";
import { getFridges, getHouses, getFood } from "../services/db";

const State = React.createContext();

export const Provider = ({ children }) => {
  const [state, setState] = React.useState();

  function currentHouse(selectedHouse) {
    setState({ ...state, selectedHouse });
  }

  function currentFridge(selectedFridge) {
    setState({ ...state, selectedFridge });
  }

  async function addHouseState() {
    const houses = await getHouses(state.user.uid);

    setState({ ...state, houses });
  }

  async function addFridgeState() {
    const fridges = await getFridges(state.user.uid);

    setState({ ...state, fridges });
  }

  async function addFoodState() {
    const food = await getFood(state.selectedFridge.id);

    setState({ ...state, food });
  }

  // main code that will run when user signs in with main objective
  // to sign in user and grab all missing information
  async function signedInAndLoadAllInformation(user) {
    const houses = await getHouses(user.uid);
    const fridges = await getFridges(user.uid);
    setState({ ...state, user, houses, fridges });
  }

  function clearState() {
    setState({ ...state, user: null });
  }

  async function createNstore(user) {
    const houses = await getHouses(user.uid);
    const fridges = await getFridges(user.uid);
    setState({ ...state, user, houses, fridges });
  }

  const stateVals = {
    ...state,
    addFridgeState,
    signedInAndLoadAllInformation,
    clearState,
    createNstore,
    addHouseState,
    currentHouse,
    currentFridge,
    addFoodState,
  };

  return <State.Provider value={stateVals}>{children}</State.Provider>;
};

export default State;
