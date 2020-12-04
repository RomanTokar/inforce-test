import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

import {useLocalStorage} from '../contexts/LocalStorageContext';
import EditTaskDialog from './EditTaskDialog';

const Task = ({name, id, isCompleted, priority}) => {
  const [open, setOpen] = useState(false);
  const {deleteTask, toggleIsCompletedTask} = useLocalStorage();

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    deleteTask(id);
  };

  const handleToggleIsCompletedTask = (e) => {
    e.stopPropagation();
    toggleIsCompletedTask(id);
  };

  const openEditTaskDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <ListItem button onClick={openEditTaskDialog}>
        <ListItemText primary={name} style={{textDecoration: isCompleted ? 'line-through' : 'none'}}/>
        <ListItemIcon>
          <IconButton onClick={handleToggleIsCompletedTask}>
            {isCompleted ? <CloseIcon/> : <DoneIcon/>}
          </IconButton>
          <IconButton onClick={handleDeleteTask}>
            <DeleteIcon/>
          </IconButton>
        </ListItemIcon>
      </ListItem>
      <EditTaskDialog name={name} priority={priority} id={id} open={open} handleCloseDialog={handleCloseDialog}/>
    </>
  );
};

export default Task;