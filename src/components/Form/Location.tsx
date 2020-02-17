import React, { FC, useContext } from "react";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { AppState } from "../../state";

interface Props{
  done: void
}

const Location: FC<Props> = ({ done }: any) => {
  
  const [state, dispatch] = useContext(AppState);
  const { lat, lon } = useCurrentLocation();

  console.log(state);

  dispatch({
    type: "update-location",
    payload: { lat, lon }
  });

  return <></>;
}

export default Location;