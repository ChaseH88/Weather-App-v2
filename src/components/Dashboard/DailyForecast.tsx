import React, { FC, useContext, useEffect } from "react";
import { State } from "state";
import DailyForecast_Grid from "./DailyForecast_Grid";
import { getDailyForecast } from "../../state/actions";
import { useLocation } from "../../hooks";
import Loading from "../../components/General/Loading";

const DailyForecast: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { dailyForecast }}, dispatch] = useContext(State);
  const location = useLocation();

  useEffect(() => {
    getDailyForecast(dispatch, location);
  }, []);
  
  // RENDER
  if(dailyForecast){
    return <DailyForecast_Grid data={dailyForecast.data} />;
  }
  return <Loading />;
};

export default DailyForecast;