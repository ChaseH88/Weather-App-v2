import React, { FC } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { useDrawer } from "../../hooks"

interface DrawerProps {
  styles: {
    drawerPaperClose: object,
    drawerPaper: object, 
    toolbarIcon: string | undefined
  }
}

const DrawerComponent: FC<DrawerProps> = ({ styles }): JSX.Element => {

  const [ open, toggleMenu ] = useDrawer();

  return (
    <Drawer
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
      <Divider />
      <List>List Item</List>
      <Divider />
      <List>List Item</List>
    </Drawer>
  );
}

export default DrawerComponent;