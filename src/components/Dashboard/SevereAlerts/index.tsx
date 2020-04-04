import React, { FC } from "react";
import { useApp, useSevereAlerts } from "../../../hooks";
import Loading from "../../General/Loading";

const SevereAlerts: FC = (): JSX.Element => {

  // Grab the Severe Alerts Data
  const [ data ] = useSevereAlerts();

  // Grab the loading variable
  const { loading } = useApp();
  
  // RENDER
  if(loading) return <Loading />;
  
  if(!data){
    return <p>NO DATA</p>;
  }
  else {
    return <p>DATA</p>;
  }

};

export default SevereAlerts;