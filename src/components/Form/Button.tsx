import React, { FC, useState, useContext} from "react";
import { State } from "state";
import { UPDATE_COORDINATES } from "state/types";
import { getLocation } from "utilities/get-location";
import { Input, Icon } from 'semantic-ui-react';

interface Location {
  lat: number,
  lon: number
}

const Button: FC = (): JSX.Element => {

  const [, dispatch] = useContext(State);
  const [loading, setLoading] = useState<Boolean>(false);

  // Handle the click
  const handleClick: Function = async (): Promise<any> => {
    setLoading(true);
    
    // Get the Location
    let loc: Location = await getLocation();
    
    // Update the State
    dispatch({
      type: UPDATE_COORDINATES,
      payload: {
        lat: loc.lat,
        lon: loc.lon
      }
    });

    setLoading(false);
  }

  return(
    <Input 
      icon={
        <Icon name={!loading ?
          'location arrow' :
          'world'
        }
        onClick={() => handleClick()}
        link
        />
      } 
      placeholder='Search...'
    />
  )
}

export default Button;