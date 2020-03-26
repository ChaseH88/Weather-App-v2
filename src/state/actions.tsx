import { getLocation } from "../utilities/get-location";
import WeatherBitAPI from "../classes/WeatherBitAPI";
import App from "../classes/App";
import MapBoxAPI from "../classes/MapBoxAPI";
import Storage, { AppKeys } from "../classes/Storage";
import {
  DailyForecastResponse,
  SevereAlertsResponse,
  CurrentWeatherResponse
} from "../_types";

interface Location {
  lat: number,
  lon: number
}



/**
 * Takes user input and set coordinates of that location in the app context.
 * @param searchWord The users search input
 */
export const searchLocation = async (searchWord: any): Promise<void> => {

  // Save the search word to storage
  const storage = new Storage();
  storage.add(AppKeys.search_history, searchWord);

  // Initialize the main app
  const app = new App();

  // Clear the state
  app.clear();

  // Grab the location coordinates
  const mapAPI = new MapBoxAPI(searchWord);
  const location = await mapAPI.get()
  
  // Update the app location
  app.updateLocation(location as any);

}


/**
 * Takes user's current geolocation and sets coordinates of that location in the app context.
 */
export const findUserLocation = async (): Promise<void> => {

  // Initialize the main app class
  const app = new App();

  // Clear the state
  app.clear();

  // Grab the user location and update
  let loc: Location = await getLocation();
  
  // Use the coordinates to lookup the city name
  const mapAPI = new MapBoxAPI(`${loc.lon}, ${loc.lat}`)
  const location = await mapAPI.get()
  
  // Update the app location
  app.updateLocation(location as any);

}


/**
 * Updates the user's current forecast in the app context with their location
 * @param location The user's location
 */
export const getCurrentWeather = async (location: any): Promise<void> => {
  
  const app = new App();
  const api = new WeatherBitAPI(location.coordinates);
  
  // Get the data
  const data: CurrentWeatherResponse = await api.currentForecast();
  
  // Update context with the new data
  app.setCurrentForecast(data);

};


/**
 * Updates the user's daily forecast in the app context with their location
 * @param location The user's location
 */
export const getDailyForecast = async (location: any): Promise<void> => {
  
  const app = new App();
  const api = new WeatherBitAPI(location.coordinates);
  
  // Get the data
  const data: DailyForecastResponse = await api.dailyForecast();
  
  // Update context with the new data
  app.setDailyForecast(data);   

};


/**
 * Updates the user's severe alerts in the app context with their location
 * @param location The user's location
 */
export const getSevereAlerts = async (location: any): Promise<void> => {
  
  const app = new App();
  const api = new WeatherBitAPI(location.coordinates);
  
  // Get the data
  const data: SevereAlertsResponse = await api.weatherAlerts();
  
  // Update context with the new data
  app.setWeatherAlerts(data);

};