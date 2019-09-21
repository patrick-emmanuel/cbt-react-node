import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
}));

const FormBuilder = ({ options }) => {

  const classes = useStyles();

  return (
    options.map(option => {
      const { type, label, name } = option;
      if (type === "text") {
        <TextField
          className={classes.textField}
          fullWidth
          label={label}
          name={name}
          type="text"
          variant="outlined"
          margin="normal"
        />
      }
    })
  );
};

export default FormBuilder;
