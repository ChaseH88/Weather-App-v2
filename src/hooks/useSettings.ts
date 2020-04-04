import { useContext } from "react";
import { State } from "state";

// Typescript
import { Temperatures } from "@types";

interface UseSettings {
  units: string,
  darkMode: boolean,
  temperature: Temperatures
}

const useSettings = (): UseSettings => {

  // Grab the daily forecast data
  const [ { settings }] = useContext(State);

  return settings as UseSettings;
  
};

export { useSettings };