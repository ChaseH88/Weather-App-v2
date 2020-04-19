import * as enums from "./enums";
import { ReactComponentElement } from "react";

/**
 * The main typing for the App State.
 * Includes information used across the app including
 * things like app variables, settings, location data,
 * and several different weather details that make up
 * the app's UI.
 */
export interface MainAppState {
  app: AppState,
  settings: SettingsState,
  location: LocationState,
  weatherDetails: WeatherDetailsState
}

export interface AppState {
  loading?: boolean,
  menuOpen?: boolean,
  modal?: boolean,
  modalData?: Modal | null
}

export interface SettingsState {
  units?: enums.Units,
  temperature?: enums.Temperatures,
  darkMode?: boolean
}

export interface LocationState {
  coordinates?: {
    lat?: number, 
    lon?: number
  },
  fullLocation?: string | null,
  zipcode?: number | null,
  lastUpdated?: null | Date
}

export interface WeatherDetailsState {
  currentWeather?: CurrentWeather | null,
  dailyForecast?: DailyForecast | null,
  severeAlerts?: SevereAlerts | null,
  severeAlertsCount?: number
}

export interface DailyForecast {
  city_name: string
  lon: number
  timezone: string
  lat: number
  country_code: string
  state_code: string
  data: {
    moonrise_ts: number
    wind_cdir: string
    rh: number
    pres: number
    high_temp: number
    sunset_ts: number
    ozone: number
    moon_phase: number
    wind_gust_spd: number
    snow_depth: number
    clouds: number
    ts: number
    sunrise_ts: number
    app_min_temp: number
    wind_spd: number
    pop: number
    wind_cdir_full: string
    slp: number
    valid_date: string
    app_max_temp: number
    vis: number
    dewpt: number
    snow: number
    uv: number
    weather: {
        icon: string
        code: number
        description: string
    },
    wind_dir: number,
    max_dhi: number | null,
    clouds_hi: number,
    precip: number,
    low_temp: number,
    max_temp: number,
    moonset_ts: number,
    datetime: string,
    temp: number,
    min_temp: number,
    clouds_mid: number
    clouds_low: number
  }[]
}


export interface CurrentWeather {
    rh: number
    pod: string
    lon: number
    pres: number
    timezone: string
    ob_time: string
    country_code: string
    clouds: number
    ts: number
    solar_rad: number
    state_code: string
    city_name: string
    wind_spd: number
    last_ob_time: string
    wind_cdir_full: string
    wind_cdir: string
    slp: number
    vis: number
    h_angle: number
    sunset: string
    dni: number
    dewpt: number
    snow: number
    uv: number
    precip: number
    wind_dir: number
    sunrise: string
    ghi: number
    dhi: number
    aqi: number
    lat: number
    weather: {
        icon: string
        code: string
        description: string
    },
    datetime: string
    temp: number
    station: string
    elev_angle: number
    app_temp: number
}

export interface SevereAlerts {
  country_code: string,
  lon: number,
  timezone: string,
  lat: number,
  alerts: Alert[]      
  city_name: string,
  state_code: string
}

export interface Alert {
  regions: string[],
  expires_utc: Date,
  effective_local: Date
  uri: string,
  description: string,
  effective_utc: Date,
  severity: string,
  title: string,
  expires_local: Date
}

export interface LocationData {
  lat?: number
  lon?: number
  search?: string
}

export interface ApiResponse {
  data: any,
  status: number,
  statusText: string,
  headers: object,
  config: object,
  request: XMLHttpRequest,
}

export interface Modal {
  heading?: string,
  text?: string,
  component: ReactComponentElement<any>
}