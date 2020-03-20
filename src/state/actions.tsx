import { getLocation } from "../utilities/get-location";
import API from "../classes/API";
import App from "../classes/App";
import {
  DailyForecastResponse,
  SevereAlertsResponse,
  CurrentWeatherResponse
} from "../_types";

interface Location {
  lat: number,
  lon: number
}

export const updateLocation = async (dispatch: Function) => {

  // Initialize the main app class
  const app = new App(dispatch);

  // Clear the state, grab and set the location
  app.clear();
  let loc: Location = await getLocation();
  app.updateLocation(loc);

}


export const getCurrentWeather = async (dispatch: Function, location: any) => {
  
  const app = new App(dispatch);
  const api = new API(location.coordinates);
  
  // Get the data
  const data: CurrentWeatherResponse = await api.currentForecast();
  
  // Update context with the new data
  app.setCurrentForecast(data);

};


export const getDailyForecast = async (dispatch: Function, location: any) => {
  
  const app = new App(dispatch);
  const api = new API(location.coordinates);
  
  // Get the data
  const data: DailyForecastResponse = await api.dailyForecast();
  
  // Update context with the new data
  app.setDailyForecast(data);

};


export const getSevereAlerts = async (dispatch: Function, location: any) => {
  
  const app = new App(dispatch);
  const api = new API(location.coordinates);
  
  // Get the data
  const data: SevereAlertsResponse = await api.weatherAlerts();
  
  // Update context with the new data
  app.setWeatherAlerts(data);

};