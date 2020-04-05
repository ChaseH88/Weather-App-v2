import React, { FC } from 'react';
import Switch from '@material-ui/core/Switch';
import { useSettings, useTemperature } from "hooks";

// Typescript
import { Temperatures } from "Types/enums";

const TemperatureSwitch: FC = (): JSX.Element => {

  const { temperature } = useSettings();
  const [, toggleTemp] = useTemperature(0);

  return (
    <Switch
        checked={temperature === Temperatures.fahrenheit}
        onClick={() => toggleTemp()}
        color="default"
        inputProps={{
            'aria-label': temperature
        }}
    />
  );
}

export { TemperatureSwitch };