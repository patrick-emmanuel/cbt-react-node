import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
  },
}));

const SelectCorrectAnswer = ({ answerOptions }) => {

  const classes = useStyles();
  const [answerValues, setAnswerValues] = React.useState(answerOptions);

  const handleChange = name => event => {
    setAnswerValues({ ...answerValues, [name]: event.target.checked });
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select correct answers</FormLabel>
        <FormGroup>
          {Object.keys(answerOptions).map(numberInWords => (
            <FormControlLabel
              key={numberInWords}
              control={
              <Checkbox 
                checked={answerValues[numberInWords]} 
                onChange={handleChange(numberInWords)} 
                value={numberInWords} />
              }
              label={numberInWords}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default SelectCorrectAnswer;
