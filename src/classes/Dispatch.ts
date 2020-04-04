import { Dispatch as DispatchType } from "react";
import * as types from "state/types";

declare global {
  interface Window {
    dispatch: DispatchType<any>
  }
}

/**
 * Provides access to the app's main context dispatch function
 * This class is designed to be extended
 */
class Dispatch {

    protected dispatch: DispatchType<{
      type: types.ContextType,
      payload?: any
    }>;

    constructor(){
      // dispatch is available in Window object
      // logic found in the 'AppState' component
      // path: src\state\index.tsx
      this.dispatch = window.dispatch;
    }

    /**
     * The generic dispatch function, can be used anywhere
     * @param type 
     * @param payload 
     */
    go(type: string, payload: any){
      this.dispatch({
        type, payload
      })
    }

}

export default Dispatch