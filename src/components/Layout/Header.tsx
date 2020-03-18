import React, { FC } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

// Components
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  classes: any
  open: boolean
  openDrawer(): void
}

export const Header: FC<HeaderProps> = ({ classes, openDrawer, open }): JSX.Element => {
  return(
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => openDrawer()}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  )
}