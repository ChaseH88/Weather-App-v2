import React, { FC, useContext } from "react";
import { State } from "state";
import { Grid } from "semantic-ui-react";
import Form from "../Form";
import DailyForecast from "components/Dashboard/DailyForecast";

const Layout: FC = (): JSX.Element => {
  
  // Grab the ready check
  const [{ app: { ready } }] = useContext(State);
  
  return(
    <Grid centered columns={1}>
      
      <Grid.Row>
        <Grid.Column textAlign={'center'}>
          <Form />
        </Grid.Column>
      </Grid.Row>

      {ready &&
        <Grid.Row>
          <Grid.Column>
            <DailyForecast />
          </Grid.Column>
        </Grid.Row>
      }
    </Grid>
  )

}

export default Layout;