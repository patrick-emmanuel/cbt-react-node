import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
} from '@material-ui/core';
import SelectQuestionType from './SelectQuestionType';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  }
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
            fullWidth
            label={label}
            name={name}
            type={type}
            variant="outlined"
            margin="normal"
          />
          <SelectQuestionType options={options} />
        </div>
      );
    })
  )
}

export default BuildQuestions;
