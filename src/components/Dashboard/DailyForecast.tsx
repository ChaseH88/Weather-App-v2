import React, { FC, useContext, useEffect } from "react";
import { State } from "state";
import { LOADING, SET_DAILY_FORECAST } from "state/types";
import { getDailyForecast } from "utilities/api";


const DailyForecast: FC = ({ children }: any): JSX.Element => {

  const [{ loading, dailyForecast }, dispatch] = useContext(State);

  useEffect(() => {
    async function loadData(){
      
      // Get the data
      dispatch({ type: LOADING, payload: true });
      const data = await getDailyForecast<Promise<object>>();
      dispatch({ type: LOADING, payload: false });
      
      // Update context
      dispatch({
        type: SET_DAILY_FORECAST,
        payload: data
      });

    }
    loadData();
  }, []);

  // RENDER
  if(!dailyForecast || loading){
    return <p>Loading...</p>;
  }

  return <p>COMPONENT</p>
};

export default DailyForecast;