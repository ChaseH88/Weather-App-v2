import * as types from "./types";

enum Units {
  imperial = 'imperial',
  metric = 'metric'
}

interface AppState {
  app: {
    loading?: boolean,
    menuOpen?: boolean
  }
  settings: {
    units?: Units,
    darkMode?: boolean
  }
  location: {
    coordinates?: object
    fullLocation?: string | null,
    zipcode?: number | null
  },
  weatherDetails: {
    currentWeather?: object | null,
    dailyForecast?: object | null,
    severeAlerts?: object | null,
    severeAlertsCount?: number
  }
}

/**
 * The default app state
 */
export const initialState: AppState = {
  app: {
    loading: false,
    menuOpen: false
  },
  settings: {
    units: Units.imperial,
    darkMode: false
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

interface Action {
  type: types.ContextType,
  payload: any
}

/**
 * The main context reducer to control app state changes
 * @param state - The main app state
 * @param {Action} - Includes the action name and payload
 */
export const reducer = (state: AppState, { type, payload }: Action): AppState => {
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

    // --- Update App Settings - Units ---
    case types.UPDATE_UNITS:
      return {
        ...state,
        settings: {
          ...state.settings,
          units: payload
        }
      }

    // --- Update App Settings - Units ---
    case types.DARK_MODE:
      return {
        ...state,
        settings: {
          ...state.settings,
          darkMode: payload
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