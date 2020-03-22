import axios, { AxiosInstance } from "axios";
import * as types from "../state/types";
import Dispatch from "./Dispatch";

interface LocationData {
  lat?: number
  lon?: number
  searchWord?: string
}

interface ApiResponse {
  data: any,
  status: number,
  statusText: string,
  headers: object,
  config: object,
  request: XMLHttpRequest,
}

type MapBoxKey = string;

class MapBoxAPI extends Dispatch {
  
  protected key: MapBoxKey = 'pk.eyJ1IjoiY2hhc2VoODgiLCJhIjoiY2s4MHQxN2JjMGkwYzNlbG44Zm5yNXFnbyJ9.5T_O4eM8FvzMiNXzZm5s9g';
  protected coordinates: LocationData | null = null;

  protected Google: AxiosInstance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    method: 'get',
    timeout: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  protected location: string;

  /**
   * API used to search for a user inputted location. This class has a method called 'get' that returns the coordinates of that location.
   * @param searchWord The user input of their location
   */
  constructor(searchWord: string){
    super(){
      this.location = searchWord;
    }
  }

  public async get(): Promise<LocationData | void> {
     
    // Search for the location
    const response = await this.Google(`/${this.location}.json?access_token=${this.key}`) as ApiResponse;
    
    // Check for errors
    if(
        !response ||
        response.status !== 200
    ){
        return console.error('Error while searching for location.');
    }

    // The API returns locations that are in an array
    // Take the closest match (first) location and grab the coordinates
    const location = response.data.features[0];
    let [lon, lat] = location.center;

    // Grab the full location name and add to the app state
    this.dispatch({
      type: types.SET_FULL_LOCATION,
      payload: location.place_name
    })

    // Return the data in an object so the Weather API can work with it
    return { lon, lat } as LocationData;
  }
}

export default MapBoxAPI;