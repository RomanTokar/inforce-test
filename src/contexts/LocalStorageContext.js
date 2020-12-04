import React, {createContext, useContext, useEffect, useState} from 'react';
import {uuid} from 'uuidv4';

const LocalStorageContext = createContext('localstorage');

export const useLocalStorage = () => useContext(LocalStorageContext);

const LocalStorageProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));

    if (localTasks) {
      setTasks(localTasks);
    }
  }, []);

  const saveChanges = (newTasksList) => {
    localStorage.setItem('tasks', JSON.stringify(newTasksList));
    setTasks(newTasksList);
  }

  const editTask = (id, name, priority) => {
    const newTasks = [...tasks].map(t => t.id === id ? {...t, name, priority} : t);

    saveChanges(newTasks)
  }

  const addTask = (taskName) => {
    const newTask = {
      id: uuid(),
      name: taskName,
      isCompleted: false,
      priority: 5,
    };
    const newTasks = [...tasks, newTask];

    saveChanges(newTasks)
  };

  const deleteTask = (taskId) => {
    const newTasks = [...tasks].filter(t => t.id !== taskId);

    saveChanges(newTasks)
  };

  const toggleIsCompletedTask = (taskId) => {
    const newTasks = [...tasks].map(t => t.id === taskId ? {...t, isCompleted: !t.isCompleted} : t);

    saveChanges(newTasks)
  }

  return (
    <LocalStorageContext.Provider value={{tasks, addTask, deleteTask, editTask, toggleIsCompletedTask}}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export default LocalStorageProvider;