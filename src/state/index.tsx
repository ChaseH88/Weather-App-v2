import React, { FC, useReducer } from "react";
import { reducer, initialState } from "./reducer";  

export const AppState = React.createContext<Array<any>>([]);

const State: FC = ({ children }: any) => (
  <AppState.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppState.Provider>
);

export default State;