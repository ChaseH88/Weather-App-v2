export type ContextType = string;

// App
export const LOADING: ContextType = '@app/loading';
export const MENU_TOGGLE: ContextType = '@app/menu';

// Modal
export const MODAL_TOGGLE: ContextType = '@modal/toggle';
export const SET_MODAL_DATA: ContextType = '@modal/set-data';

// Settings
export const UPDATE_UNITS: ContextType = '@settings/units';
export const DARK_MODE: ContextType = '@settings/toggle-dark-mode';
export const UPDATE_TEMP_MEASUREMENT: ContextType = '@settings/temperature';

// Weather Details
export const SET_DAILY_FORECAST: ContextType = '@weather/daily-forecast';
export const SET_WEATHER_ALERTS: ContextType = '@weather/severe-alerts';
export const SET_WEATHER_ALERTS_COUNT: ContextType = '@weather/severe-alerts-counts';
export const SET_CURRENT_WEATHER: ContextType = '@weather/current-weather';

// Location
export const CLEAR: ContextType = '@location/clear';
export const UPDATE_COORDINATES: ContextType = '@location/update';
export const SET_ZIPCODE: ContextType = '@location/zipcode_update';
export const SET_FULL_LOCATION: ContextType = '@location/full_location_update';
export const SET_LAST_UPDATED: ContextType = '@location/last-updated';