import { useContext } from "react";
import { State } from "state";
import { AppState } from "Types/interfaces";


const useApp = (): AppState => {

  // Grab the daily forecast data
  const [ { app }] = useContext(State);

  return app as AppState;
  
};

export { useApp };