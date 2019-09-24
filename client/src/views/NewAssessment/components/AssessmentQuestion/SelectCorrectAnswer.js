import React from 'react';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core';

const SelectCorrectAnswer = ({ numberOfOptions }) => {

  const [value, setValue] = React.useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="correct-answer">Correct Answer</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'correct-answer',
            id: 'correct-answer',
          }}
        >
          {[...new Array(numberOfOptions)].map((_, index) => {
            const val = index + 1;
            return <MenuItem key={val} value={val}>{val}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectCorrectAnswer;
