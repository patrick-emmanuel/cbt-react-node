import React from 'react';
import {
  FormControl, 
  MenuItem,
} from '@material-ui/core';

const SelectCorrectAnswer = ({ numberOfOptions }) => {

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age-simple">Correct Answer</InputLabel>
        <Select
          value={value}
          onChange={setValue}
        >
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectCorrectAnswer;
