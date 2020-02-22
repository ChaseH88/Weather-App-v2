import React, { FC, useContext} from "react";
import { State } from "state";
import { UPDATE_COORDINATES, LOADING, SET_FULL_LOCATION, CLEAR } from "state/types";
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

    dispatch({ type: CLEAR });
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

  const handleChange = ({ value:v }: any) => {
    dispatch({ type: SET_FULL_LOCATION, payload: v });
  }

  const handleSubmit = async (keyCode: any) => {
    if(keyCode !== 13) return;
    dispatch({ type: LOADING, payload: true });
    dispatch({ type: CLEAR });
    // await 

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
      onChange={({ target }: any) => handleChange(target)}
      onKeyDown={({ keyCode }: any) => handleSubmit(keyCode)}
      placeholder='Search...'
      style={{ minWidth: '30%' }}
    />
  )
}

export default Button;