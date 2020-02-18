import * as types from "./types";

export const initialState = {
  location: null
}

export const reducer = (state: Object, { type, payload }: any) => {
  switch (type) {
    case types.UPDATE_COORDINATES:
      return {
        ...state,
        location: { ...payload }
      }
      default:
        return state;
  }
}