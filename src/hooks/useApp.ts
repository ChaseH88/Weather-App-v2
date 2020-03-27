import { useContext } from "react";
import { State } from "state";

interface UseApp {
  loading?: boolean,
  menuOpen: boolean
}

const useApp = (): UseApp => {

  // Grab the daily forecast data
  const [ { app }] = useContext(State);

  return app as UseApp;
  
};

export { useApp };