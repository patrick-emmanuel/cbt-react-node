import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
}));

const AssessmentInfo = ({ 
  page,
  title, 
  description, 
  onTitleChange, 
  onDescriptionChange 
}) => {

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
          value={title}
          onChange={onTitleChange}
          type="text"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={description}
          onChange={onDescriptionChange}
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
