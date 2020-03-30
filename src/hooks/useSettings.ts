import { useContext } from "react";
import { State } from "state";

interface UseSettings {
  units: string,
  darkMode: boolean
}

const useSettings = (): UseSettings => {

  // Grab the daily forecast data
  const [ { settings }] = useContext(State);

  return settings as UseSettings;
  
};

export { useSettings };