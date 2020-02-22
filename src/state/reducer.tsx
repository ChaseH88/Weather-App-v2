import * as types from "./types";

interface AppState {
  app?: {
    loading?: boolean,
    ready?: boolean
  }
  location?: {
    coordinates?: object
    fullLocation?: string | null
  },
  weatherDetails?: {
    dailyForecast?: object | null,
  }
}

export const initialState: AppState = {
  app: {
    loading: false,
    ready: false
  },
  location: {
    coordinates: {},
    fullLocation: null
  },
  weatherDetails: {
    dailyForecast: null,
  }
}

interface Reducer {
  type: string,
  payload: any
}

export const reducer = (state: AppState, { type, payload }: Reducer): AppState => {
  switch (type) {

    // --- Set Global Loading ---
    case types.LOADING: 
      return {
        ...state,
        app: {
          ...state.app,
          loading: payload
        }
      }

    // --- Update App Coordinates ---
    case types.UPDATE_COORDINATES:
      return {
        ...state,
        location: {
          ...state.location,
          coordinates: payload
        },
        app: {
          ...state.app,
          ready: checkReady(payload)
        }
      }
      
    // --- Set Daily Forecast ---
    case types.SET_DAILY_FORECAST:
      return {
        ...state,
        weatherDetails: {
          ...state.weatherDetails,
          dailyForecast: payload
        }
      }
      
    // --- Set Full Location
    case types.SET_FULL_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          fullLocation: payload
        }
      }

    // Clears the app state...the master reset!
    case types.CLEAR:
      return initialState;

    // default as needed......
      default:
        return state;
  }
}

/**
 * Checks the initial value, should always return
 * true, but just making sure before app is updated
 * @param state 
 */
function checkReady(state: any): boolean{
  return(
    Object.values(state)
      .some((l: any) => l !== null)
  );
}