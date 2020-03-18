import { useContext } from "react";
import { State } from "state";

interface UseDailyForecast {
  weatherDetails?: {
    dailyForecase: number
  }
}

const useDailyForecast = (): UseDailyForecast => {

  // Grab the daily forecast data
  const [ { weatherDetails: { dailyForecast } }] = useContext(State);

  return dailyForecast;
  
};

export { useDailyForecast };