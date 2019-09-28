import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import BuildOptions from './BuildOptions';
import SelectCorrectAnswer from './SelectCorrectAnswer';
import generateAnswerOptions from 'helpers/generateAnswerOptions';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  }
}));

const SelectQuestionType = ({ options, newAssessmentFormRef }) => {
  const classes = useStyles();

  const [questionType, setQuestionType] = React.useState('text');

  const handleQuestionTypeChange = event => {
    setQuestionType(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Question Type</FormLabel>
        <RadioGroup 
          aria-label="questionType" 
          name="questionType" 
          value={questionType} 
          onChange={handleQuestionTypeChange}
        >
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="select" control={<Radio />} label="Select" />
        </RadioGroup>
      </FormControl>
      {questionType === 'select' && (
        <div>
          <Grid
            container
            spacing={4}
          >
            <BuildOptions options={options} />
          </Grid>
          <SelectCorrectAnswer 
            newAssessmentFormRef={newAssessmentFormRef} 
            answerOptions={generateAnswerOptions(options)} 
          />
        </div>
      )}
    </div>
  )
}

export default SelectQuestionType;
