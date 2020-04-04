import React, { FC, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { findUserLocation, searchLocation } from "state/actions";
import { useDrawer, useSevereAlerts } from "hooks";

// Styles
import "styles/search-bar.scss";

// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';

export const SearchBar: FC = (): JSX.Element => {

  const [search, setSearch] = useState("");
  const [, count] = useSevereAlerts();
  const [, menuToggle] = useDrawer();

  return(
    <div id="search">
      <TextField
        size="small"
        label="Search..." variant="filled"
        onChange={({ target }) => {
          setSearch(target.value);
        }}
        onKeyDown={({ keyCode }) => {
           if(keyCode === 13) searchLocation(search);
        }}
      />
      <IconButton color="inherit" onClick={() => searchLocation(search)}>
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => findUserLocation()}>
        <MyLocationIcon />
      </IconButton>
      <IconButton
        color="inherit"
        title={count === 0 ? 'No Alerts' : `${count} Alerts`}
        onClick={() => {
          if(count === 0) return;
          menuToggle();
        }}>
        <Badge badgeContent={count} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  )
}