import React, { FC, useReducer } from "react";

export const AppState = React.createContext<Array<any>>([]);

const initialState = {
  location: null
}

const reducer = (state: Object, { type, payload }: any) => {
  switch (type) {
      case 'update-location':
          return {
              ...state,
              location: { ...payload }
          }
      default:
          return state;
  }
}

const State: FC = ({ children }: any) => (
  <AppState.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppState.Provider>
);

export default State;