import React from "react";
import { getFridges, getHouses } from "../services/db";

const State = React.createContext();

export const Provider = ({ children }) => {
  const [state, setState] = React.useState();

  function currentHouse(selectedHouse) {
    setState({ ...state, selectedHouse });
  }

  function currentFridge(selectedFridge) {
    // console.log(selectedFridge);
    setState({ ...state, selectedFridge });
    // navigate("/fridge");
  }

  async function addHouseState() {
    // const oldHouses = state.houses || [];

    // setState({ ...state, houses: [...oldHouses, newHouse] });

    const houses = await getHouses(state.user.uid);

    setState({ ...state, houses });
  }

  async function addFridgeState() {
    // const oldFridges = state.fridges || [];

    // setState({ ...state, fridges: [...oldFridges, newFridge] });
    const fridges = await getFridges(state.user.uid);

    setState({ ...state, fridges });
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

  function createNstore(user) {
    setState({ ...state, user });
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
  };

  return <State.Provider value={stateVals}>{children}</State.Provider>;
};

export default State;
