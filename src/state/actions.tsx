import { getLocation } from "../utilities/get-location";
import WeatherBitAPI from "../classes/WeatherBitAPI";
import App from "../classes/App";
import MapBoxAPI from "../classes/MapBoxAPI";
import {
  DailyForecastResponse,
  SevereAlertsResponse,
  CurrentWeatherResponse
} from "../_types";

interface Location {
  lat: number,
  lon: number
}

export const searchLocation = async (dispatch: Function, searchWord: any) => {

  // Initialize the main app
  const app = new App(dispatch);

  // Clear the state
  app.clear();

  // Grab the location coordinates
  const location = new MapBoxAPI(searchWord);

  // Update the app location
  console.log(location)
  app.updateLocation(await location.get() as any);

}

export const getGeolocationCoordinates = async (dispatch: Function) => {

  // Initialize the main app class
  const app = new App(dispatch);

  // Clear the state
  app.clear();

  // Grab the user location and update
  let loc: Location = await getLocation();
  app.updateLocation(loc);

}


export const getCurrentWeather = async (dispatch: Function, location: any) => {
  
  const app = new App(dispatch);
  const api = new WeatherBitAPI(location.coordinates);
  
  // Get the data
  const data: CurrentWeatherResponse = await api.currentForecast();
  
  // Update context with the new data
  app.setCurrentForecast(data);

};


export const getDailyForecast = async (dispatch: Function, location: any) => {
  
  const app = new App(dispatch);
  const api = new WeatherBitAPI(location.coordinates);
  
  // Get the data
  const data: DailyForecastResponse = await api.dailyForecast();
  
  // Update context with the new data
  app.setDailyForecast(data);   

};


export const getSevereAlerts = async (dispatch: Function, location: any) => {
  
  const app = new App(dispatch);
  const api = new WeatherBitAPI(location.coordinates);
  
  // Get the data
  const data: SevereAlertsResponse = await api.weatherAlerts();
  
  // Update context with the new data
  app.setWeatherAlerts(data);

};