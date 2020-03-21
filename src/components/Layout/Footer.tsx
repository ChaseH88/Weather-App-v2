import React, { FC } from "react";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Footer: FC = (): JSX.Element => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Weather App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}