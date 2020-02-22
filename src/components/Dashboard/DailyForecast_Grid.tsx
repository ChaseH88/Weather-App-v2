import React, { FC } from "react";
import "styles/daily-forecast.scss";

type ForecastProps = {
  data: [object]
};

const DailyForecast_Grid: FC<ForecastProps> = ({ data }): any => {
  return(
    <div>
      <div id="daily-forecast" className="panel">
        <div className="wrapper">
          {data.map((day: any): JSX.Element => (
            <div className="day">
              <div className="container">
                <img src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} />
                
                <div className="temperature">
                  <span title={`High Temperature\n${day.high_temp}`}>
                    {day.high_temp}&deg;
                  </span>
                  <span title={`Low Temperature\n${day.low_temp}`}>
                    {day.low_temp}&deg;
                  </span>
                </div>

                <div className="rain-chance">
                  <span>Chance of Precipitation</span>
                  <span>{day.pop}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast_Grid;






/**
 * 
 * moonrise_ts: 1582375124
wind_cdir: "ENE"
rh: 63
pres: 1024.2
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
moonset_ts: 1582415711
datetime: "2020-02-22"
high_temp: 57.7
low_temp: 34.9
max_temp: 57.8
temp: 44
min_temp: 33.7
clouds_mid: 0
clouds_low: 0
 */