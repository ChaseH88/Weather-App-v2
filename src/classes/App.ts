import * as types from "../state/types";
import {
    DailyForecastResponse,
    SevereAlertsResponse,
    CurrentWeatherResponse
} from "../_types";

type DispatchFunction = Function;

class App {

  protected dispatch: DispatchFunction;

  constructor(dispatch: DispatchFunction){
    this.dispatch = dispatch;
  }
  
  /**
   * Clears the entire app state
   */
  clear(){
    this.dispatch({
        type: types.CLEAR
    });
  }

  /**
   * Update the user's location
   */
  updateLocation(location: { lat: number, lon: number }): void {
    this.dispatch({ type: types.UPDATE_COORDINATES, payload: {
        lat: location.lat,
        lon: location.lon
      }
    });
  }

  setDailyForecast(data: DailyForecastResponse): void {

    this.dispatch({
        type: types.SET_DAILY_FORECAST,
        payload: data
    });
    
  }

  setWeatherAlerts(data: SevereAlertsResponse): void {

    this.dispatch({
      type: types.SET_WEATHER_ALERTS_COUNT,
      payload: data.alerts.length
    });

    this.dispatch({
      type: types.SET_WEATHER_ALERTS,
      payload: data
    })

  }

  setCurrentForecast(data: CurrentWeatherResponse): void {
    this.dispatch({
        type: types.SET_CURRENT_WEATHER,
        payload: data
    })
  }

}

export default App;