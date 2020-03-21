import React, { FC, useContext, useEffect } from "react";
import { State } from "state";
import { getSevereAlerts } from "../../../state/actions";
import { useLocation } from "../../../hooks";
import Loading from "../../General/Loading";

const SevereAlerts: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { severeAlerts }}] = useContext(State);
  const location = useLocation();

  useEffect(() => {
    getSevereAlerts(location);
  }, []);
  
  // RENDER
  if(severeAlerts){
    return <p>Ready</p>;
  }
  return <Loading />;
};

export default SevereAlerts;