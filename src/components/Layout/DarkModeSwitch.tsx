import React, { FC } from 'react';
import Switch from '@material-ui/core/Switch';
import { useSettings } from "../../hooks/useSettings";
import { darkModeToggle } from "../../state/actions";

const DarkModeSwitch: FC = (): JSX.Element => {
  
  const settings = useSettings();

  return (
    <Switch
      checked={settings.darkMode}
      onChange={({ target }) => darkModeToggle(target.checked)}
      color="default"
      inputProps={{
        'aria-label': `Dark mode is ${settings.darkMode ? 'on' : 'off'}.`
      }}
    />
  );
}

export { DarkModeSwitch };