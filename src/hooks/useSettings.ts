import { useContext } from "react";
import { State } from "state";
import { SettingsState } from "Types/interfaces";


const useSettings = (): SettingsState => {

  // Grab the daily forecast data
  const [ { settings }] = useContext(State);

  return settings as SettingsState;
  
};

export { useSettings };