import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {useFilter} from '../contexts/FilterContext';

const Filter = () => {
  const {filter, setFilter} = useFilter();

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel>Filter</InputLabel>
      <Select value={filter} onChange={handleChange}>
        <MenuItem value={'Created date'}>Created date</MenuItem>
        <MenuItem value={'Priority'}>Priority</MenuItem>
        <MenuItem value={'Alphabetically'}>Alphabetically</MenuItem>
        <MenuItem value={'Completed'}>Completed</MenuItem>
        <MenuItem value={'Not completed'}>Not completed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;