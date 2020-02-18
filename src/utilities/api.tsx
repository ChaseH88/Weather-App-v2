import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/',
  method: 'get',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

const key: string = '47b4b166bf68465eb7c4695bd5f4e6f5';

export async function getDailyForecast<T>(obj: object){
  // ?lat=30.6601984&lon=-87.90425599999999
  //const response = await instance.get(`{{URL}}/forecast/daily${`  `}&key=${key}`);
  const response = await instance.get(`{{URL}}/forecast/daily?lat=30.6601984&lon=-87.90425599999999&key=${key}`);
  return response;  
}
