import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
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
          <TextField
            key={name}
            className={classes.textField}
            fullWidth
            label={label}
            name={name}
            type="text"
            variant="outlined"
            margin="normal"
          />
        )
      }
      return null;
    })
  );
};

export default BuildOptions;
