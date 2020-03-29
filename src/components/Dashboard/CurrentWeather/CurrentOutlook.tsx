import React, { FC } from "react";
import { CurrentWeatherResponse } from "../../../_types";
import WeatherIcon from "components/General/WeatherIcon";
import Temperature from "components/General/Temperature";

interface CurrentOutlookProps {
  data: CurrentWeatherResponse
}

const CurrentOutlook: FC<CurrentOutlookProps> = ({ data }): JSX.Element => {
  
  // RENDER
  return(
    <div>
      <p>{data.city_name}</p>
      <WeatherIcon data={data.weather} />
      <Temperature temp={data.temp} />
    </div>
  )
};

export default CurrentOutlook;