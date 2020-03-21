import React, { FC, useContext, useEffect } from "react";
import { State } from "../../../state";
import { getCurrentWeather } from "../../../state/actions";
import { useLocation } from "../../../hooks";
import Loading from "../../../components/General/Loading";

const CurrentWeather: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { currentWeather }}] = useContext(State);
  const location = useLocation();

  useEffect(() => {
    getCurrentWeather(location);
  }, []);
  
  // RENDER
  if(currentWeather){
    return <p>Ready</p>;
  }
  return <Loading />;
};

export default CurrentWeather;