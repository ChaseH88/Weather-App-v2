import React, { FC, useReducer } from "react";
import { reducer, initialState } from "./reducer";  

export const State = React.createContext<Array<any>>([]);

const AppState: FC = ({ children }: any) => (
  <State.Provider value={useReducer(reducer, initialState)}>
    {children}
  </State.Provider>
);

export default AppState;