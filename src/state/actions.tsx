import * as types from "./types";
//import { State } from "./";


export const setLoading = () => async (dispatch: any) => {
  console.log(dispatch);
  return types.LOADING;
} 