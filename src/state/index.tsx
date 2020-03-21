import React, { FC, useReducer, useEffect, Dispatch } from "react";
import { reducer, initialState } from "./reducer";  

declare global {
  interface Window {
    dispatch: Dispatch<any>
  }
}


export const State = React.createContext<Array<any>>([]);

const AppState: FC = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    Object.defineProperty(window, 'dispatch', {
      get: () => dispatch
    });
  }, []);

  return(
    <State.Provider value={[state, dispatch]}>
      {children}
    </State.Provider>
  )
};

export default AppState;