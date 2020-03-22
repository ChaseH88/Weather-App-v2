import { Dispatch as DispatchType } from "react";
import * as types from "../state/types";

declare global {
    interface Window {
      dispatch: DispatchType<any>
    }
  }

class Dispatch {

    public dispatch: DispatchType<{
        type: types.ContextType,
        payload?: any
      }>;

    constructor(){
        this.dispatch = window.dispatch;
    }

}

export default Dispatch