import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0',
  method: 'get',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

const key: string = '47b4b166bf68465eb7c4695bd5f4e6f5';

interface LocationData {
  lat?: number
  lon?: number
}

export async function getDailyForecast<T>(obj?: LocationData){
  // ?lat=30.6601984&lon=-87.90425599999999
  //const response = await instance.get(`{{URL}}/forecast/daily${`  `}&key=${key}`);
  const response = await instance.get(`/forecast/daily?units=i&lat=30.6601984&lon=-87.90425599999999&key=${key}`);
  return handleResponse(response);  
}




type Response = {
  data: object,
  status: number 
}

type JSON_Data = object | void;

function handleResponse({ data, status }: Response): JSON_Data {
  if(status != 200){
    return console.log('Error with API');
  }
  return data;
}