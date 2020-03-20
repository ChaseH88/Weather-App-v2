import axios, { AxiosInstance } from "axios";
import {
  CurrentWeatherResponse,
  DailyForecastResponse,
  SevereAlertsResponse
} from "../_types";

interface LocationData {
  lat?: number
  lon?: number
}

type WeatherbitKey = string;
type QueryString = string;

class API {
  
  private key: WeatherbitKey = '47b4b166bf68465eb7c4695bd5f4e6f5';
  
  private Axios: AxiosInstance = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0',
    method: 'get',
    timeout: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  private location: QueryString;
  private units: String = 'units=i';

  constructor(loc: LocationData, units?: String){
    this.location = this.formatLocation(loc);
    if(units){
      this.units = units;
    }
  }

  /**
   * Format the location
   * @param loc 
   */
  private formatLocation(loc: any): QueryString {

    const queryString: QueryString = Object.entries(loc)
      .map(([a, b]: any): string => `${a}=${b}`)
      .join('&');
    
    return queryString as QueryString;
  }

  /**
   * Gets the user's current forecast
   */
  async currentForecast<T>(): Promise<CurrentWeatherResponse> {
    
    const response = await this.Axios.get(
      `/current?${this.units}&${this.location}&key=${this.key}`
    );
    
    return response as unknown as CurrentWeatherResponse;
  }

  /**
   * Gets the user's daily forecast
   */
  async dailyForecast<T>(): Promise<DailyForecastResponse> {
    
    const response = await this.Axios.get(
      `/forecast/daily?${this.units}&${this.location}&key=${this.key}`
    );
    
    return response as unknown as DailyForecastResponse;
  }

  /**
   * Gets the user's local weather alerts
   */
  async weatherAlerts<T>(): Promise<SevereAlertsResponse> {
    
    const response = await this.Axios.get(
      `/alerts?${this.units}&${this.location}&key=${this.key}`
    );
    
    return response as unknown as SevereAlertsResponse;
  }

}

export default API;











