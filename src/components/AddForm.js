import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useLocalStorage} from '../contexts/LocalStorageContext';

const AddForm = () => {
  const [taskName, setTaskName] = useState('');
  const {addTask} = useLocalStorage();

  const onChange = (e) => {
    setTaskName(e.currentTarget.value);
  };

  const handleAddTask = () => {
    if (taskName) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', gap: 20}}>
      <TextField autoComplete={'off'} variant={'outlined'} label={'Task Name'} value={taskName}
                 onChange={onChange}/>
      <Button type={'button'} color={'primary'}
              variant={'contained'} onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
};

export default AddForm;