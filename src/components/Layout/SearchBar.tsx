import React, { FC, useContext } from "react";
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { updateLocation } from "../../state/actions";
import { State } from "../../state"
import "styles/search-bar.scss";

export const SearchBar: FC = (): JSX.Element => {

  const [, dispatch] = useContext(State);

  const handleSubmit = () => {
    updateLocation(dispatch)
  }

  const showSevereAlertsNum = () => {
    return 3;
  }

  return(
    <div id="search">
      <TextField
        size="small"
        label="Search..." variant="filled"
      />
      <IconButton color="inherit" onClick={() => handleSubmit()}>
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={showSevereAlertsNum()} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  )
}