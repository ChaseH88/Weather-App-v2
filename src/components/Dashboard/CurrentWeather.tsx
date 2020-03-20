import React, { FC, useContext, useEffect } from "react";
import { State } from "../../state";
import { getCurrentWeather } from "../../state/actions";
import { useLocation } from "../../hooks";
import Loading from "../../components/General/Loading";

const CurrentWeather: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { severeAlerts }}, dispatch] = useContext(State);
  const location = useLocation();

  useEffect(() => {
    getCurrentWeather(dispatch, location);
  }, []);
  
  // RENDER
  if(severeAlerts){
    return <p>Ready</p>;
  }
  return <Loading />;
};

export default CurrentWeather;