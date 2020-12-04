import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {useLocalStorage} from '../contexts/LocalStorageContext';

const EditTaskDialog = ({name, priority, handleCloseDialog, id, open}) => {
  const {editTask} = useLocalStorage();
  const [localName, setLocalName] = useState(name);
  const [localPriority, setLocalPriority] = useState(priority);

  const handleSave = () => {
    editTask(id, localName, localPriority)
    handleCloseDialog()
  }

  const handleChangeName = (e) => {
    setLocalName(e.currentTarget.value)
  }

  const handleChangePriority = (e) => {
    setLocalPriority(+e.target.value)
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <TextField value={localName} onChange={handleChangeName} label={'Name'}/>
          <FormControl>
            <InputLabel>Priority</InputLabel>
            <Select value={localPriority} onChange={handleChangePriority}>
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'2'}>2</MenuItem>
              <MenuItem value={'3'}>3</MenuItem>
              <MenuItem value={'4'}>4</MenuItem>
              <MenuItem value={'5'}>5</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCloseDialog}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskDialog;