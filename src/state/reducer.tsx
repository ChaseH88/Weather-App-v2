import * as types from "./types";

interface AppState {
  loading?: boolean
  location?: object | null
  dailyForecast?: object | null
}

export const initialState: AppState = {
  location: null,
  loading: false,
  dailyForecast: null
}

interface Reducer {
  type: string,
  payload: any
}

export const reducer = (state: Object, { type, payload }: Reducer): AppState => {
  switch (type) {
    case types.LOADING: 
      return {
        ...state,
        loading: payload
      }
    case types.UPDATE_COORDINATES:
      return {
        ...state,
        location: { ...payload }
      }
    case types.SET_DAILY_FORECAST:
      return {
        ...state,
        dailyForecast: payload
      }
      default:
        return state;
  }
}