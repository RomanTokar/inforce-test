import React from 'react';
import {orange} from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import Task from './Task';
import {Typography} from '@material-ui/core';
import {useFilter} from '../contexts/FilterContext';

const TaskList = () => {
  const {filterTasks} = useFilter();

  return (
    <div style={{padding: 20, backgroundColor: orange[200]}}>
      {filterTasks.length
        ? <List>
          {filterTasks.map((t) => <Task key={t.id} {...t}/>)}
        </List>
        : <Typography align={'center'}>No tasks</Typography>
      }
    </div>
  );
};

export default TaskList;