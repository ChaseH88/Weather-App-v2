import React, { FC } from "react";
import { Alert } from "Types/interfaces";
import Moment, { Format } from "classes/Moment";

const WarningAlert: FC<Alert> = ({
  description,
  title,
  effective_utc,
  expires_utc,
  uri
}): JSX.Element => {

  // Initiate moment
  const time_effective = new Moment(effective_utc);
  const time_expires = new Moment(expires_utc);

  // RENDER
  return(
    <div id="alert-bar">
      <h4>{title}</h4>
      <p>
        Effective At:
        {time_effective.format(Format.full_date_with_time)}
      </p>
      <p>
        Expires:
        {time_expires.format(Format.full_date_with_time)} - 
        {time_expires.fromNow()}
      </p>
      <p>{description}</p>
      <a href={uri} target={'_blank'}>See More</a>
    </div>
  )
  
};

export default WarningAlert;