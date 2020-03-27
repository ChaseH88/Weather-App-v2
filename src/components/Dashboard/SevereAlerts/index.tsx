import React, { FC, useContext } from "react";
import { State } from "state";
import { useApp } from "../../../hooks";
import Loading from "../../General/Loading";

const SevereAlerts: FC = (): JSX.Element => {

  // Grab the daily forecast data
  const [ { weatherDetails: { severeAlerts }}] = useContext(State);

  const { loading } = useApp();
  console.log(severeAlerts)
  // RENDER
  if(loading) return <Loading />;
  
  if(!severeAlerts){
    return <p>NO DATA</p>;
  }
  else {
    return <p>DATA</p>;
  }

};

export default SevereAlerts;