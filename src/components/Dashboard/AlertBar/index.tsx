import React, { FC } from "react";
import { useSevereAlerts } from "hooks";
import { Severity } from "Types/enums";

// Components
import WarningAlert from "./WarningAlert";

const AlertBar: FC = (): JSX.Element => {

  // Grab the alerts from state
  const [ data ] = useSevereAlerts();
  const { alerts } = data;

  const warnings = alerts.map((alert) => (
    (alert.severity = Severity.warning) && alert
  ));  

  // RENDER
  return(
    <div id="alert-bar">
      {warnings &&
        warnings.map((warning) => (
          <WarningAlert key={warning.uri} {...warning} />
        ))
      }
    </div>
  )
  
};

export default AlertBar;