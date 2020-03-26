import React, { FC, useContext, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { findUserLocation, searchLocation } from "../../state/actions";
import { State } from "../../state";

// Styles
import "styles/search-bar.scss";

// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';

export const SearchBar: FC = (): JSX.Element => {

  const [search, setSearch] = useState("");
  const [{ weatherDetails: { severeAlertsCount } }] = useContext(State);

  return(
    <div id="search">
      <TextField
        size="small"
        label="Search..." variant="filled"
        onChange={({ target }) => {
          setSearch(target.value);
        }}
      />
      <IconButton color="inherit" onClick={() => searchLocation(search)}>
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => findUserLocation()}>
        <MyLocationIcon />
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={severeAlertsCount} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  )
}