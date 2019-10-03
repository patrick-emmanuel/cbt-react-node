import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  TextField,
} from '@material-ui/core';
import SelectQuestionType from './SelectQuestionType';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));

const BuildQuestions = ({ questions, register }) => {
  const classes = useStyles();

  return (
    questions.map(options => {
      const question = options['question'];
      const { type, label, name } = question;
      return (
        <div key={options.id}>
          <Paper className={classes.paper}>
            <TextField
              fullWidth
              label={label}
              inputRef={register}
              name={`${name}.content`}
              type={type}
              variant="outlined"
              margin="normal"
            />
            <SelectQuestionType
              questionNumber={name}
              options={options}
              register={register}
            />
          </Paper>
        </div>
      );
    })
  )
}

export default BuildQuestions;
