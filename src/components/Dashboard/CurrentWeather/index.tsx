import React, { FC, useContext } from "react";
import { State } from "../../../state";
import Loading from "../../../components/General/Loading";
import { useApp } from "../../../hooks";
import CurrentOutlook from "./CurrentOutlook";

const CurrentWeather: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { currentWeather }}] = useContext(State);
  const { loading } = useApp();
  
  // RENDER
  if(loading) return <Loading />;

  if(!currentWeather){
    return <p>NO DATA</p>;
  }
  else {
    return <CurrentOutlook data={currentWeather} />
  }
};

export default CurrentWeather;