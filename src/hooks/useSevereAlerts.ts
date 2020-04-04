import { useContext } from "react";
import { State } from "state";
import { SevereAlerts } from "../_types";

type UseSevereAlerts = [SevereAlerts, number];

const useSevereAlerts = (): UseSevereAlerts => {

  // Grab the daily forecast data
  const [ { weatherDetails: {
    severeAlerts, severeAlertsCount
  } }] = useContext(State);

  const data: SevereAlerts = severeAlerts;
  const count: number = severeAlertsCount;

  return [data, count];
  
};

export { useSevereAlerts };