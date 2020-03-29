import React, { FC } from "react";

export enum MeasurementSystems {
  fahrenheit = 'fahrenheit',
  celsius = 'celsius'
}

type TemperatureProps = {
  temp: number
  defaultUnit?: MeasurementSystems
};

/**
 * 
 * @param param0 
 */
const Temperature: FC<TemperatureProps> = ({ temp, defaultUnit = MeasurementSystems.fahrenheit }): any => {

  // Grab the temperature
  let temp_value = temp;

  // See if it needs to be converted
  if(defaultUnit === MeasurementSystems.celsius){
    temp_value = (5/9) * (temp - 32)
  }

  return(
      <>
        {temp_value}
      </>
  );
};

export default Temperature;