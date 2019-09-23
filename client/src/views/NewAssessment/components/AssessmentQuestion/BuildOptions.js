import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
}));

const BuildOptions = ({ options }) => {

  const classes = useStyles();

  return (
    Object.keys(options).map(option => {
      const { type, label, name } = options[option];
      if (type === "text" && option.startsWith('option')) {
        return (
          <Grid
            item
            xs={6}
          >
            <TextField
              key={name}
              label={label}
              name={name}
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid>
        )
      }
      return null;
    })
  );
};

export default BuildOptions;
