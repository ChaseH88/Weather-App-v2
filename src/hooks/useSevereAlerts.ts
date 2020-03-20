import { useContext } from "react";
import { State } from "state";

interface UseSevereAlerts {
  weatherDetails?: {
    currentWeather: number
  }
}

const useSevereAlerts = (): UseSevereAlerts => {

  // Grab the daily forecast data
  const [ { weatherDetails: { severeAlerts } }] = useContext(State);

  return severeAlerts;
  
};

export { useSevereAlerts };