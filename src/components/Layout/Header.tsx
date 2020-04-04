import React, { FC } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

// Components
import { SearchBar } from "./SearchBar";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { TemperatureSwitch } from "./TemperatureSwitch";

interface HeaderProps {
  classes: any
  open: boolean
}

export const Header: FC<HeaderProps> = ({ classes, open }): JSX.Element => (
  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        Dashboard
      </Typography>
      <TemperatureSwitch />
      <DarkModeSwitch />
      <SearchBar />
    </Toolbar>
  </AppBar>
);