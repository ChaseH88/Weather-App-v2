import React, { FC } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { useDrawer, useSevereAlerts } from "hooks";
import "styles/drawer.scss";

interface DrawerProps {
  styles: {
    drawerPaperClose: object,
    drawerPaper: object, 
    toolbarIcon: string | undefined
  }
}

const DrawerComponent: FC<DrawerProps> = ({ styles }): JSX.Element => {

  const [ open, toggleMenu ] = useDrawer();
  const [ data, count ] = useSevereAlerts();
  
  return (
    <Drawer
      id="drawer"
      classes={{
          paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose),
      }}
      open={open}
    >
      <div className={styles.toolbarIcon}>
        <IconButton onClick={() => toggleMenu()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div>
        <div className="heading">
          Showing <strong>{count}</strong> alert{count > 1 && 's'}:
        </div>
        <div className="alerts">
          {data.alerts.map(alert => (
            <div
              key={alert.uri}
              className={alert.severity.toLowerCase()}
            >
              <List>
                <h3>{alert.title}</h3>
                <p>{alert.description}</p>
                <Divider />
              </List>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerComponent;