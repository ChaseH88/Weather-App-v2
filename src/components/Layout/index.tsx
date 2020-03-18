import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { useLocation } from "../../hooks"

// Components
import { Header } from "./Header";
import { Footer } from "./Footer";
import DailyForecast from "../../components/Dashboard/DailyForecast";

// Styles
import { useStyles } from "./Dashboard_Styles";

export default function Dashboard() {
  const classes:any = useStyles();
  
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        classes={classes}
        openDrawer={() => setOpen(true)}
        open={open}
      />
      <Drawer
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>List Item</List>
        <Divider />
        <List>List Item</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                Paper
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {location && <DailyForecast />}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                Paper
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer {...classes} />
          </Box>
        </Container>
      </main>
    </div>
  );
}