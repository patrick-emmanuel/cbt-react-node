import React from 'react';
import {
  TextField,
  Grid,
} from '@material-ui/core';

const BuildOptions = ({ options, register, questionNumber }) => {

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
              name={`${questionNumber}.${option}.content`}
              inputRef={register}
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
