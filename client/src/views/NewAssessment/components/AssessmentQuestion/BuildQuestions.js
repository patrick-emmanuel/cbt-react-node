import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
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

const BuildQuestions = ({ questions }) => {
  const classes = useStyles();

  const [questionType, setQuestionType] = React.useState('text');

  const handleQuestionTypeChange = event => {
    setQuestionType(event.target.value);
  };

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
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Question Type</FormLabel>
            <RadioGroup aria-label="questionType" name="questionType" value={questionType} onChange={handleQuestionTypeChange}>
              <FormControlLabel value="text" control={<Radio />} label="Text" />
              <FormControlLabel value="selectMultiple" control={<Radio />} label="Select Multiple" />
              <FormControlLabel value="selectOne" control={<Radio />} label="Select One" />
            </RadioGroup>
          </FormControl>
          {/* <Grid 
            container
            spacing={4}
            >
            <BuildOptions options={options} />
          </Grid> */}
        </div>
      );
    })
  )
}

export default BuildQuestions;
