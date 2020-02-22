import React, { FC, useContext, useEffect } from "react";
import { State } from "state";
import { LOADING, SET_DAILY_FORECAST } from "state/types";
import { getDailyForecast } from "utilities/api";
import DailyForecast_Grid from "./DailyForecast_Grid";


const DailyForecast: FC = (props: any): JSX.Element => {

  // Grab the daily forecast data
  const [{ weatherDetails: { dailyForecast } }, dispatch] = useContext(State);

  useEffect(() => {
    async function loadData(){

      // Get the data
      dispatch({ type: LOADING, payload: true });
      const data = await getDailyForecast<Promise<object>>();
      dispatch({ type: LOADING, payload: false });
      
      // Update context
      dispatch({
        type: SET_DAILY_FORECAST,
        payload: data
      });

    }
    loadData();
  }, []);

  // RENDER
  if(dailyForecast){
    return <DailyForecast_Grid data={dailyForecast.data} />;
  }
  return <p>Loading</p>;
};

export default DailyForecast;






/**
 * 
 * moonrise_ts: 1582375124
wind_cdir: "ENE"
rh: 63
pres: 1024.2
high_temp: 57.7
sunset_ts: 1582415086
ozone: 276.803
moon_phase: 0.00262219
wind_gust_spd: 12.1
snow_depth: 0
clouds: 0
ts: 1582351260
sunrise_ts: 1582374144
app_min_temp: 25.8
wind_spd: 3.6
pop: 0
wind_cdir_full: "east-northeast"
slp: 1030.21
valid_date: "2020-02-22"
app_max_temp: 57.7
vis: 15
dewpt: 30.7
snow: 0
uv: 6.73305
weather: {icon: "c01d", code: 800, description: "Clear Sky"}
wind_dir: 57
max_dhi: null
clouds_hi: 0
precip: 0
low_temp: 34.9
max_temp: 57.8
moonset_ts: 1582415711
datetime: "2020-02-22"
temp: 44
min_temp: 33.7
clouds_mid: 0
clouds_low: 0
 */