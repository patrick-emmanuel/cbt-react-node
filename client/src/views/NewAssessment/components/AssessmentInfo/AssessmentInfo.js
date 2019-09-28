import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
}));

const AssessmentInfo = ({ page, newAssessmentFormRef }) => {

  const classes = useStyles();

  if (page === 1) {
    return (
      <div>
        <Typography
          className={classes.title}
          variant="h4"
        >
          Create Assessment
        </Typography>
        <TextField
          className={classes.textField}
          fullWidth
          label="Title"
          name="title"
          ref={newAssessmentFormRef}
          type="text"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          ref={newAssessmentFormRef}
          multiline
          margin="normal"
          rows="4"
          variant="outlined"
        />
      </div>
    );
  }
  return null;
};

export default AssessmentInfo;
