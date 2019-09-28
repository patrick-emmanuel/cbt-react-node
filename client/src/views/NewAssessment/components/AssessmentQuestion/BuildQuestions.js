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

const BuildQuestions = ({ questions, newAssessmentFormRef }) => {
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
              ref={newAssessmentFormRef}
              name={name}
              type={type}
              variant="outlined"
              margin="normal"
            />
            <SelectQuestionType 
              options={options}
              newAssessmentFormRef={newAssessmentFormRef} />
          </Paper>
        </div>
      );
    })
  )
}

export default BuildQuestions;
