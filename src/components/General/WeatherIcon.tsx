import React, { FC } from "react";

type WeatherIconProps = {
  data: {
    icon: string,
    code: string,
    description: string
  }
};

const WeatherIcon: FC<WeatherIconProps> = ({ data }): any => {
  return(
    <img
        src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`}
        alt={data.description}
    />
  );
};

export default WeatherIcon;