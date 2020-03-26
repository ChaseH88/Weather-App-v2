import * as types from "../state/types";
import Dispatch from "./Dispatch";
import { LocationData } from "./WeatherBitAPI";
import {
    DailyForecastResponse,
    SevereAlertsResponse,
    CurrentWeatherResponse
} from "../_types";


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
  public stopLoading(){
    this.dispatch({
      type: types.LOADING,
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
  public setDailyForecast(data: DailyForecastResponse): void {
    this.dispatch({
        type: types.SET_DAILY_FORECAST,
        payload: data
    });
  }

  /**
   * Sets the weather/severe alerts data to the app context.
   * @param data 
   */
  public setWeatherAlerts(data: SevereAlertsResponse): void {

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
  public setCurrentForecast(data: CurrentWeatherResponse): void {
    this.dispatch({
        type: types.SET_CURRENT_WEATHER,
        payload: data
    })
  }

}

export default App;