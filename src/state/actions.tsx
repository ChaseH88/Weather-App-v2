import { getLocation } from "../utilities/get-location";
import WeatherBitAPI from "../classes/WeatherBitAPI";
import App from "../classes/App";
import MapBoxAPI from "../classes/MapBoxAPI";
import Storage, { AppKeys } from "../classes/Storage";

interface Location {
  lat: number,
  lon: number
}

/**
 * Open or close the menu
 * @param open Open or closed
 */
export const menuToggle = (open: boolean): void => {

  const app = new App();
  app.menu(open);
  
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

  // Clear the state and start loading
  app.clear();
  app.startLoading();

  // Grab the location coordinates
  const mapAPI = new MapBoxAPI(searchWord);
  const location = await mapAPI.get()
  
  // Update the app location
  app.updateLocation(location as any);

  // Fetch the data
  fetchWeatherData({
    lat: location.lat,
    lon: location.lon
  });

}


/**
 * Takes user's current geolocation and sets coordinates of that location in the app context.
 */
export const findUserLocation = async (): Promise<void> => {

  // Initialize the main app class
  const app = new App();

  // Clear the state and start loading
  app.clear();
  app.startLoading();

  // Grab the user location and update
  let { lon, lat }: Location = await getLocation();

  // Add Location to Storage
  const storage = new Storage();
  storage.add(AppKeys.coordinates, { lat, lon });
  
  // Use the coordinates to lookup the city name
  const mapAPI = new MapBoxAPI(`${lon}, ${lat}`);
  const location = await mapAPI.get()
  debugger
  // Update the app location
  app.updateLocation(location as any);

  // Fetch the data
  fetchWeatherData({
    lat: location.lat,
    lon: location.lon
  });

}


const fetchWeatherData = async (location: { lat: any, lon: any }): Promise<void> => {
  
  // Initialize the main app class
  const app = new App();

  // Grab Weather Data
  const api = new WeatherBitAPI(location);
  
  let data = await Promise.all([
    api.currentForecast(),
    api.dailyForecast(),
    api.weatherAlerts()
   ]);
debugger;
  // Get the data
  const current_weather  = data[0];
  const daily_forecast   = data[1];
  const severe_alerts    = data[2];
  
  
  // Update context with the new data
  app.setCurrentForecast(current_weather);
  app.setDailyForecast(daily_forecast);
  app.setWeatherAlerts(severe_alerts);

  // Stop loading
  app.stopLoading();

}