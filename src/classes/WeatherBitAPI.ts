import axios, { AxiosInstance } from "axios";
import Dispatch from "./Dispatch";
import {
  ApiResponse,
  LocationData,
  CurrentWeather,
  DailyForecast,
  SevereAlerts
} from "Types/interfaces";

type WeatherbitKey = string;
type QueryString = string;

class WeatherBitAPI extends Dispatch {
  
  protected key: WeatherbitKey = '47b4b166bf68465eb7c4695bd5f4e6f5';
  
  protected Axios: AxiosInstance = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0',
    method: 'get',
    timeout: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  protected location: QueryString;
  protected units: String = 'units=i';

  constructor(loc: LocationData, units?: String){
    super();
    this.location = this.formatLocation(loc);
    if(units){
      this.units = units;
    }
  }

  /**
   * Format the location
   * @param loc 
   */
  protected formatLocation(loc: any): QueryString {

    const queryString: QueryString = Object.entries(loc)
      .map(([a, b]: any): string => `${a}=${b}`)
      .join('&');
    
    return queryString as QueryString;
    
  }

  protected handleResponse(res: ApiResponse | null){
    
    if(!res || res.status !== 200){
      return console.error('API Error');
    };

    return res.data;

  }

  /**
   * Gets the user's current forecast
   */
  async currentForecast<T>(): Promise<CurrentWeather> {
    
    let response = await this.Axios.get(
      `/current?${this.units}&${this.location}&key=${this.key}`
    ) as any;

    response = this.handleResponse(response);
    
    return response as unknown as CurrentWeather;
  }

  /**
   * Gets the user's daily forecast
   */
  async dailyForecast<T>(): Promise<DailyForecast> {
    
    let response = await this.Axios.get(
      `/forecast/daily?${this.units}&${this.location}&key=${this.key}`
    ) as any;

    response = this.handleResponse(response);
    
    return response as unknown as DailyForecast;
  }

  /**
   * Gets the user's local weather alerts
   */
  async weatherAlerts<T>(): Promise<SevereAlerts> {
    
    let response = await this.Axios.get(
      `/alerts?${this.units}&${this.location}&key=${this.key}`
    ) as any;

    response = this.handleResponse(response);
    
    return response as unknown as SevereAlerts;
  }

  /**
   * Load all of the weather information at once
   */
  async loadData(): Promise<any>{

    let data = await Promise.all([
      this.currentForecast(),
      this.dailyForecast(),
      this.weatherAlerts()
     ]);

     const current_weather: CurrentWeather  = data[0];
     const daily_forecast: DailyForecast    = data[1];
     const severe_alerts: SevereAlerts      = data[2];

     return { current_weather, daily_forecast, severe_alerts };
  }

}

export default WeatherBitAPI;