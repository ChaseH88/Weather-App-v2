import React, { FC } from "react";
import "styles/daily-forecast.scss";
import { key } from "utilities/key";
import moment from "moment";
import WeatherIcon from "components/General/WeatherIcon";
import Temperature from "components/General/Temperature";
import { DailyForecast } from "Types/interfaces";

type ForecastProps = {
  data: DailyForecast
};

const DailyForecast_Grid: FC<ForecastProps> = ({ data }): JSX.Element => {
  return(
    <div>
      <div id="daily-forecast" className="panel">
        <div className="wrapper">
          {data.data.map((day: any): JSX.Element => (
            <div className="day" key={key()}>
              <div className="container">
                <WeatherIcon data={day.weather} />
                <div className="date">
                  <span>
                    {moment(new Date(day.valid_date)).format("MM/DD")}
                  </span>
                </div>

                <div className="temperature">
                  <span title={`High Temperature\n${day.high_temp}`}>
                    <Temperature temp={day.high_temp} />
                  </span>
                  <span title={`Low Temperature\n${day.low_temp}`}>
                    <Temperature temp={day.low_temp} />
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