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

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  }
}));

const SelectQuestionType = ({ options }) => {
  const classes = useStyles();

  const [questionType, setQuestionType] = React.useState('text');

  const handleQuestionTypeChange = event => {
    setQuestionType(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Question Type</FormLabel>
        <RadioGroup aria-label="questionType" name="questionType" value={questionType} onChange={handleQuestionTypeChange}>
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="selectMultiple" control={<Radio />} label="Select Multiple" />
          <FormControlLabel value="selectOne" control={<Radio />} label="Select One" />
        </RadioGroup>
      </FormControl>
      {questionType === 'selectMultiple' &&
        <Grid
          container
          spacing={4}
        >
          <BuildOptions options={options} />
        </Grid>
      }
    </div>
  )
}

export default SelectQuestionType;
