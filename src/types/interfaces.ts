import * as enums from "./enums";

/**
 * The main typing for the App State.
 * Includes information used across the app including
 * things like app variables, settings, location data,
 * and several different weather details that make up
 * the app's UI.
 */
export interface AppState {
  app: {
    loading?: boolean,
    menuOpen?: boolean
  }
  settings: {
    units?: enums.Units,
    temperature?: enums.Temperatures,
    darkMode?: boolean
  }
  location: {
    coordinates?: object,
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
  alerts: {
    regions: string[],
    expires_utc: Date,
    effective_local: Date
    uri: string,
    description: string,
    effective_utc: Date,
    severity: string,
    title: string,
    expires_local: Date
  }[]      
  city_name: string,
  state_code: string
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