import React from "react";

const State = React.createContext();

export const Provider = ({ children }) => {
  const [state, setState] = React.useState();

  function addFridge(newFridge) {
    const oldFridges = state.fridges;

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
  };

  const stateVals = {
    ...state,
    addFridge,
    loadFridges,
    signedIn,
    clearState
  };

  return <State.Provider value={stateVals}>{children}</State.Provider>;
};

export default State;
