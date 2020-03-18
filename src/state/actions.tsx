import * as types from "./types";
import { getLocation } from "../utilities/get-location";
import API from "../classes/API";
import { CurrentWeatherResponse } from "../_types";

interface Location {
  lat: number,
  lon: number
}


export const setLoading = () => async (dispatch: any) => {
  console.log(dispatch);
  return types.LOADING;
} 


export const updateLocation = async (dispatch: Function) => {

  dispatch({ type: types.CLEAR });

  dispatch({ type: types.LOADING, payload: true });
  
  // Get the Location
  let loc: Location = await getLocation();

  dispatch({ type: types.UPDATE_COORDINATES, payload: {
      lat: loc.lat,
      lon: loc.lon
    }
  });

  dispatch({ type: types.LOADING, payload: false });

}


export const getDailyForecast = async (dispatch: Function, location: any) => {

  const api = new API({
    lat: 30.6601984,
    lon:-87.90425599999999
  });

  console.log(api);

  // Get the data
  dispatch({ type: types.LOADING, payload: true });
  const data: CurrentWeatherResponse = await api.dailyForecast();
  dispatch({ type: types.LOADING, payload: false });
  
  // Update context with the new data
  dispatch({ type: types.SET_DAILY_FORECAST, payload: data });
  dispatch({ type: types.SET_FULL_LOCATION, payload: `${data.city_name}, ${data.state_code}` });

};