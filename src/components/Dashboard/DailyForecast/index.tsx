import React, { FC, useContext } from "react";
import { State } from "state";
import DailyForecast_Grid from "./DailyForecast_Grid";
import Loading from "../../../components/General/Loading";
import { useApp } from "../../../hooks";

const DailyForecast: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { dailyForecast }}] = useContext(State);
  const { loading } = useApp();
  
  // RENDER
  if(loading) return <Loading />;

  if(!dailyForecast){
    return <p>NO DATA</p>;
  }
  else {
    return <DailyForecast_Grid data={dailyForecast.data} />;
  }
};

export default DailyForecast;