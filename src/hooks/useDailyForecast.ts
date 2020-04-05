import { useContext } from "react";
import { State } from "state";
import { DailyForecast } from "Types/interfaces";

const useDailyForecast = (): DailyForecast | null => {

  // Grab the daily forecast data
  const [ { weatherDetails: { dailyForecast } }] = useContext(State);

  if(!dailyForecast) return null;
  return dailyForecast as DailyForecast;
  
};

export { useDailyForecast };