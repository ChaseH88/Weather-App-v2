import { useContext } from "react";
import { State } from "state";

interface UseApp {
  ready?: boolean
  loading?: boolean
}

const useApp = (): UseApp => {

  // Grab the daily forecast data
  const [ { app }] = useContext(State);

  return app;
  
};

export { useApp };