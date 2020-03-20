import axios, { AxiosInstance } from "axios";

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

class MapBoxAPI {
  
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

  constructor(searchWord: string){
    this.location = searchWord;
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

    // Grab the first location and the coordinates
    const location = response.data.features[0];
    let [lon, lat] = location.center;

    // Grab the data
    return { lon, lat } as LocationData;
  }
}

export default MapBoxAPI;