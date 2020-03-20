import { useContext } from "react";
import { State } from "state";

interface UseLocation {
  coordinates?: {
    lat: number, 
    lon: number
  }
}

const useLocation = (): UseLocation => {

  // Grab the daily forecast data
  const [ { location }] = useContext(State);

  return location;
  
};

export { useLocation };