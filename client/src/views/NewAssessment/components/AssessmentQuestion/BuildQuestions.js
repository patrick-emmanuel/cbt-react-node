import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField, Typography,
} from '@material-ui/core';
import BuildOptions from './BuildOptions';

const useStyles = makeStyles(theme => ({
}));

const BuildQuestions = ({ questions }) => {
  const classes = useStyles();

  return (
    questions.map(options => {
      const question = options['question'];
      const { type, label, name } = question;
      return (
        <div key={options.id}>
          <TextField
            className={classes.textField}
            fullWidth
            label={label}
            name={name}
            type={type}
            variant="outlined"
            margin="normal"
          />
          <Typography
            variant="h5"
          >
            Options
            </Typography>
          <BuildOptions options={options} />
        </div>
      );
    })
  )
}

export default BuildQuestions;
