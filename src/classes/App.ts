import * as types from "state/types";
import Dispatch from "./Dispatch";

// Types
import { Temperatures } from "Types/enums";
import {
    DailyForecast,
    SevereAlerts,
    CurrentWeather,
    LocationData,
    Modal
} from "Types/interfaces";


class App extends Dispatch {

  constructor(){
    super();
  }
  
  /**
   * Clears the entire app state
   */
  public clear(){
    this.dispatch({
        type: types.CLEAR
    });
  }

  /**
   * Sets the app's global loading variable to true
   */
  public startLoading(){
    this.dispatch({
      type: types.LOADING,
      payload: true
    });
  }

  /**
   * Sets the app's global loading variable to false
   */
  public stopLoading(): void {
    this.dispatch({
      type: types.LOADING,
      payload: false
    });
  }

  /**
   * Sets the app's dark mode to on or off
   * @param on - On/True or Off/False
   */
  public darkMode(on: boolean): void {
    
    this.dispatch({
      type: types.DARK_MODE,
      payload: on
    });

  }

  /**
   * Sets the app's dark mode to on or off
   * @param on - On/True or Off/False
   */
  public setTempMeasurements(measurement: Temperatures): void {
    
    this.dispatch({
      type: types.UPDATE_TEMP_MEASUREMENT,
      payload: measurement
    });

  }

  /**
   * Sets the modal data to state
   * @param {Modal} - The Modal Date
   */
  public setModalData(data: Modal | null): void {
    
    this.dispatch({
      type: types.SET_MODAL_DATA,
      payload: data
    });

  }

  /**
   * Show the modal
   */
  public showModal(): void {
    
    this.dispatch({
      type: types.MODAL_TOGGLE,
      payload: true
    });

  }

  /**
   * Hide the modal
   */
  public hideModal(): void {
    
    this.dispatch({
      type: types.MODAL_TOGGLE,
      payload: false
    });

  }
  
  /**
   * Update the user's location with coordinates
   * @param location Object including the longitude and latitude
   */
  public updateLocation(location: LocationData): void {
    this.dispatch({ type: types.UPDATE_COORDINATES, payload: {
        lat: location.lat,
        lon: location.lon
      }
    });
  }

  /**
   * Sets the daily forecast data to the app context.
   * @param data 
   */
  public setDailyForecast(data: DailyForecast): void {
    this.dispatch({
        type: types.SET_DAILY_FORECAST,
        payload: data
    });
  }

  /**
   * Sets the weather/severe alerts data to the app context.
   * @param data 
   */
  public setWeatherAlerts(data: SevereAlerts): void {

    this.dispatch({
      type: types.SET_WEATHER_ALERTS_COUNT,
      payload: data.alerts.length
    });

    this.dispatch({
      type: types.SET_WEATHER_ALERTS,
      payload: data
    })

  }

  /**
   * Sets the current forecast data to the app context.
   * @param data 
   */
  public setCurrentForecast(data: CurrentWeather): void {
    this.dispatch({
        type: types.SET_CURRENT_WEATHER,
        payload: data
    })
  }

}

export default App;