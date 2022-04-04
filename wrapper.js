import React from "react";
import { Provider } from "./src/state";

export function wrapRootElement({ element }) {
  return <Provider>{element}</Provider>;
}
