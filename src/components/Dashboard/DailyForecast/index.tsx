import React, { FC } from "react";
import DailyForecast_Grid from "./DailyForecast_Grid";
// import RangeChart from "./RangeChart";
import Loading from "components/General/Loading";
import { useApp, useDailyForecast } from "hooks";

const DailyForecast: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const dailyForecast = useDailyForecast();
  const { loading } = useApp();
  
  // RENDER
  if(loading) return <Loading />;

  if(!dailyForecast){
    return <p>NO DATA</p>;
  }
  else {
    return(
      <div>
        <DailyForecast_Grid data={dailyForecast} />
        {/* <RangeChart data={dailyForecast} /> */}
      </div>
    );
  }
};

export default DailyForecast;