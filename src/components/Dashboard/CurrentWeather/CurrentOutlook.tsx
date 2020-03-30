import React, { FC } from "react";
import { CurrentWeather } from "../../../_types";
import WeatherIcon from "components/General/WeatherIcon";
import Temperature from "components/General/Temperature";
import "../../../styles/current-forecast.scss";

interface CurrentOutlookProps {
  data: CurrentWeather
}

const CurrentOutlook: FC<CurrentOutlookProps> = ({ data }): JSX.Element => {
  
  // RENDER
  return(
    <div id="current-outlook">
      <h1>{data.city_name}, {data.state_code}</h1>
      <div className="wrapper">
        <div className="left">
          <div className="feature">
            <div className="temperature">
              <div className="temp-now">
                <Temperature temp={data.temp} />
              </div>
              <div className='feels-like'>
                <span className='sub-title'>Feels Like</span>
                <Temperature temp={data.app_temp} />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <WeatherIcon data={data.weather} /> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default CurrentOutlook;