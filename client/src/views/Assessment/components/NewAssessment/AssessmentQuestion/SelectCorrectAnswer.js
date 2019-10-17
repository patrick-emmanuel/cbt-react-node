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

const SelectCorrectAnswer = ({ answerOptions, register }) => {

  const classes = useStyles();
  const [answerValues, setAnswerValues] = React.useState(answerOptions);

  const handleChange = optionId => event => {
    debugger;
    setAnswerValues({
      ...answerValues,
      [optionId]: {
        ...answerValues[optionId],
        value: event.target.checked
      }
    });
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select correct answers</FormLabel>
        <FormGroup>
          {Object.keys(answerValues).map(optionId => {
            const { name, label, value } = answerValues[optionId];
            return (
              <div key={name}>
                <FormControlLabel
                  control={
                    <Checkbox
                      inputRef={register}
                      checked={value}
                      onChange={handleChange(optionId)}
                      value={value}
                      name={name}
                    />
                  }
                  label={label}
                />
              </div>
            )
          })}
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default SelectCorrectAnswer;
