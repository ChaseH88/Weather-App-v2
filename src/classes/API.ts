import axios, { AxiosInstance } from "axios";
import { CurrentWeatherResponse } from "../_types";

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
    timeout: 1000,
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

  private formatLocation(loc: any): QueryString {

    const queryString: QueryString = Object.entries(loc)
      .map(({ a, b }: any) => `${a}=${b}`)
      .join('&');

    return queryString as QueryString;
  }

  async dailyForecast<T>(): Promise<CurrentWeatherResponse> {
    const response = await this.Axios.get(`/forecast/daily?${this.units}&${this.location}&key=${this.key}`);
    return response as unknown as CurrentWeatherResponse;
  }

}

export default API;











