import { useContext } from "react";
import { State } from "state";
import { LocationState } from "Types/interfaces";

const useLocation = (): LocationState => {

  // Grab the daily forecast data
  const [ { location }] = useContext(State);

  return location as LocationState;
  
};

export { useLocation };