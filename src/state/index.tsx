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

  /**
   * Adds a property to the window object for use.
   * @param name Name of the key to add
   * @param value The value of your key
   */
  const setValue = (name: string, value: any): void => (
    window[name as any] = value
  );

  useEffect(() => {    
    setValue('dispatch', dispatch);
  }, []);

  return(
    <State.Provider value={[state, dispatch]}>
      {children}
    </State.Provider>
  )
};

export default AppState;