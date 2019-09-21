import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
}));

const AssessmentQuestion = ({ page }) => {

  const classes = useStyles();

  if (page === 2) {
    return (
      <div>
        <Typography
          className={classes.title}
          variant="h4"
        >
          Set Questions
        </Typography>
        <TextField
          className={classes.textField}
          fullWidth
          label="Questions"
          name="title"
          type="text"
          variant="outlined"
          margin="normal"
        />
      </div>
    );
  }
  return null;
};

export default AssessmentQuestion;
