import React, { FC } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useDrawer } from "hooks";

// Components
import { Header } from "./Header";
import { Footer } from "./Footer";
import Drawer from "./Drawer";
import DailyForecast from "components/Dashboard/DailyForecast";
import CurrentWeather from "components/Dashboard/CurrentWeather";
import SevereAlerts from "components/Dashboard/SevereAlerts";
import AlertBar from "components/Dashboard/AlertBar";

// Styles
import { useStyles } from "./Dashboard_Styles";

const Dashboard: FC = (): JSX.Element => {

  // Dashboard Styles
  const classes:any = useStyles();

  const [ open ] = useDrawer();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        classes={classes}
        open={open}
      />
      <Drawer styles={classes} />
      <main className={classes.content}>
        <AlertBar />
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={5}>
              <Paper className={fixedHeightPaper}>
                <CurrentWeather />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Paper className={fixedHeightPaper}>
                <DailyForecast />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SevereAlerts />
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

export default Dashboard;