import { useContext } from "react";
import { State } from "../state";

interface UseCurrentWeather {
  weatherDetails?: {
    currentWeather: number
  }
}

const useCurrentWeather = (): UseCurrentWeather => {

  // Grab the daily forecast data
  const [ { weatherDetails: { currentWeather } }] = useContext(State);

  return currentWeather;
  
};

export { useCurrentWeather };