import React, { FC } from "react";
import { useTemperature } from "hooks";

type TemperatureProps = {
  temp: number
};

const Temperature: FC<TemperatureProps> = ({ temp }): any => {

  // Grab the temperature
  let [temperature, change] = useTemperature(temp);

  return(
      <span className="temperature" onClick={() => change()}>
        {temperature}&deg;
      </span>
  );
};

export default Temperature;