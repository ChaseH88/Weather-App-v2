import * as types from "./types";

// Types
import { MainAppState } from "Types/interfaces";
import {
  Units,
  Temperatures
} from "Types/enums";

/**
 * App Debug Mode
 */
const debugMode: boolean = true;
const testFile = (name: string) => (
  require(`../json/${name}.json`)
);

/**
 * The default app state
 */
export const initialState: MainAppState = {
  app: {
    loading: false,
    menuOpen: false,
    modal: false,
    modalData: null
  },
  settings: {
    units: Units.imperial,
    temperature: Temperatures.fahrenheit,
    darkMode: false
  },
  location: {
    coordinates: {},
    fullLocation: null,
    lastUpdated: null
  },
  weatherDetails: {
    currentWeather: debugMode ? testFile('current-weather') : null,
    dailyForecast: debugMode ? testFile('daily-forecast') : null,
    severeAlerts: debugMode ? testFile('severe-alerts') : null,
    severeAlertsCount: 2
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
export const reducer = (state: MainAppState, { type, payload }: Action): MainAppState => {
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

    // --- Set Modal ---
    case types.MODAL_TOGGLE: 
      return {
        ...state,
        app: {
          ...state.app,
          modal: payload
        }
      }

    // --- Set Modal ---
    case types.SET_MODAL_DATA: 
      return {
        ...state,
        app: {
          ...state.app,
          modalData: payload
        }
      }

    // --- Update App Coordinates ---
    case types.UPDATE_COORDINATES:
      return {
        ...state,
        location: {
          ...state.location,
          coordinates: payload,
          lastUpdated: new Date()
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

    // --- Update App Settings - Dark Mode ---
    case types.DARK_MODE:
      return {
        ...state,
        settings: {
          ...state.settings,
          darkMode: payload
        }
      }

    // --- Update App Settings - Dark Mode ---
    case types.UPDATE_TEMP_MEASUREMENT:
      return {
        ...state,
        settings: {
          ...state.settings,
          temperature: payload
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