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

const SelectQuestionType = ({ options, register, questionNumber }) => {
  const classes = useStyles();

  const [questionType, setQuestionType] = React.useState('TEXT');

  const handleQuestionTypeChange = event => {
    setQuestionType(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Question Type</FormLabel>
        <RadioGroup 
          aria-label="questionType" 
          name={`${questionNumber}.questionType`} 
          value={questionType}
          onChange={handleQuestionTypeChange}
        >
          <FormControlLabel
            value="TEXT"
            control={<Radio inputRef={register} />} 
            label="Text" 
          />
          <FormControlLabel 
            value="SELECT" 
            control={<Radio inputRef={register} />} 
            label="Select" 
          />
        </RadioGroup>
      </FormControl>
      {questionType === 'SELECT' && (
        <div>
          <Grid
            container
            spacing={4}
          >
            <BuildOptions
              questionNumber={questionNumber}
              register={register} 
              options={options} 
            />
          </Grid>
          <SelectCorrectAnswer 
            register={register}
            answerOptions={generateAnswerOptions(options)} 
          />
        </div>
      )}
    </div>
  )
}

export default SelectQuestionType;
