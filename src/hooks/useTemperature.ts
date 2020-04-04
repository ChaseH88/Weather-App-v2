import { useContext } from "react";
import { State } from "state";
import { Temperatures } from "@types";
import { UPDATE_TEMP_MEASUREMENT } from "state/types";

/**
 * The hook will render a temperature in fahrenheit or celsius.
 * This also gives you a function to swap the two measurement systems.
 * @param number Accepts the temperate
 * @returns {[number, Function]}
 */
const useTemperature = (number: number): [number, Function] => {

  let temp: number = number;

  // Grab the daily forecast data
  const [ { settings: { temperature } }] = useContext(State);

  if(temperature === Temperatures.celsius){
    temp = (5/9) * (number - 32)
  }
  
  const updateTemp = (): void => {
    window.dispatch({
      type: UPDATE_TEMP_MEASUREMENT,
      payload: Temperatures.fahrenheit === temperature ?
        Temperatures.celsius :
        Temperatures.fahrenheit
    })
  }

  return [Math.round(temp * 10) / 10, updateTemp];
  
};

export { useTemperature };