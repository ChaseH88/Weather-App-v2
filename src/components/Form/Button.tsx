import React, { FC, useState, useContext} from "react";
import { AppState } from "../../state";
import { getLocation } from "utilities/get-location";

interface Location {
  lat: number,
  lon: number
}

const Button: FC = () => {

  const [, dispatch] = useContext(AppState);
  const [prompt] = useState(false);

  // Handle the click
  const handleClick: Function = async (): Promise<any> => {

    // Get the Location
    let loc: Location = await getLocation();
    
    // Update the State
    dispatch({
      type: 'update-location',
      payload: {
        lat: loc.lat,
        lon: loc.lon
      }
    });
  }

  return(
    <button onClick={() => handleClick()}>
      {!prompt ?
        'Get Location!' :
        'Getting Location...'
      }
    </button>
  )
}

export default Button;