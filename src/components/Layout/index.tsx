import React, { FC } from "react";
import { Grid } from "semantic-ui-react";
import Button from "../Form";
import DailyForecast from "../Dashboard/DailyForecast";

const Layout: FC = ({ children }: any): JSX.Element => {
 
  return(
    <Grid centered columns={1}>
      
      <Grid.Row>
        <Grid.Column>
          <Button />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <DailyForecast />
        </Grid.Column>
      </Grid.Row>

    </Grid>
  )

}

export default Layout;