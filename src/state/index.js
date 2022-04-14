import React from "react";

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

  function loadHouses(houses) {
    setState({ ...state, houses });
  }

  function addFridge(newFridge) {
    const oldFridges = state.fridges || [];

    setState({ ...state, fridges: [...oldFridges, newFridge] });
  }

  function loadFridges(fridges) {
    setState({ ...state, fridges });
  }

  function signedIn(user) {
    setState({ ...state, user });
  }

  function clearState() {
    setState({ ...state, user: null });
  }

  function createNstore(user) {
    setState({ ...state, user });
  }

  const stateVals = {
    ...state,
    addFridge,
    loadFridges,
    signedIn,
    clearState,
    testing,
    createNstore,
    addHouseState,
    loadHouses,
  };

  return <State.Provider value={stateVals}>{children}</State.Provider>;
};

export default State;
