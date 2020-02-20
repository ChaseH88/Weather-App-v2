import React, { FC, useContext} from "react";
import { State } from "state";
import { UPDATE_COORDINATES, LOADING } from "state/types";
import { getLocation } from "utilities/get-location";
import { Input, Icon } from 'semantic-ui-react';

interface Location {
  lat: number,
  lon: number
}

const Button: FC = (): JSX.Element => {

  const [{ loading }, dispatch] = useContext(State);

  // Handle the click
  const handleClick: Function = async (): Promise<any> => {
    
    dispatch({ type: LOADING, payload: true });
    
    // Get the Location
    let loc: Location = await getLocation();

    dispatch({ type: UPDATE_COORDINATES, payload: {
        lat: loc.lat,
        lon: loc.lon
      }
    });

    dispatch({ type: LOADING, payload: false });

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
      style={{ minWidth: '30%' }}
    />
  )
}

export default Button;