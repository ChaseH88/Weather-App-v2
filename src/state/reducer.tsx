import * as types from "./types";

interface AppState {
  app?: {
    loading?: boolean,
    menuOpen?: boolean
  }
  location?: {
    coordinates?: object
    fullLocation?: string | null,
    zipcode?: number | null
  },
  weatherDetails?: {
    currentWeather?: object | null,
    dailyForecast?: object | null,
    severeAlerts?: object | null,
    severeAlertsCount?: number
  }
}

export const initialState: AppState = {
  app: {
    loading: false,
    menuOpen: false
  },
  location: {
    coordinates: {},
    fullLocation: null
  },
  weatherDetails: {
    currentWeather: null,
    dailyForecast: null,
    severeAlerts: null,
    severeAlertsCount: 0
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

    // --- Set Menu Open ---
    case types.MENU_TOGGLE: 
      return {
        ...state,
        app: {
          ...state.app,
          menuOpen: payload
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
          ...state.app
        }
      }

    // --- Set Current Weather ---
    case types.SET_CURRENT_WEATHER:
      return {
        ...state,
        weatherDetails: {
          ...state.weatherDetails,
          currentWeather: payload
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

    // --- Set Severe Alerts ---
    case types.SET_WEATHER_ALERTS:
      return {
        ...state,
        weatherDetails: {
          ...state.weatherDetails,
          severeAlerts: payload
        }
      }

      // --- Set Severe Alerts Count ---
    case types.SET_WEATHER_ALERTS_COUNT:
      return {
        ...state,
        weatherDetails: {
          ...state.weatherDetails,
          severeAlertsCount: payload
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

    // --- Set Zip Code
    case types.SET_ZIPCODE:
      return {
        ...state,
        location: {
          ...state.location,
          zipcode: payload
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