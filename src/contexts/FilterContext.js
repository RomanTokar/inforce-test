import React, {createContext, useContext, useEffect, useState} from 'react';
import {useLocalStorage} from './LocalStorageContext';

const FilterContext = createContext('localstorage');

export const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {
  const {tasks} = useLocalStorage();
  const [filter, setFilter] = useState('Created date');
  const [filterTasks, setFilterTasks] = useState([...tasks]);

  const filterPriority = () => {
    const newTasks = [...tasks];

    newTasks.sort((a, b) => a.priority - b.priority);

    setFilterTasks(newTasks);
  };

  const filterAlphabetically = () => {
    const newTasks = [...tasks];

    newTasks.sort((a, b) => a.name > b.name ? 1 : -1);

    setFilterTasks(newTasks);
  };

  const filterCreateDate = () => {
    setFilterTasks([...tasks]);
  };

  const filterCompleted = () => {
    const newTasks = [...tasks].filter(t => t.isCompleted);

    setFilterTasks(newTasks);
  };

  const filterNotCompleted = () => {
    const newTasks = [...tasks].filter(t => !t.isCompleted);

    setFilterTasks(newTasks);
  };

  const filterFunc = () => {
    switch (filter) {
      case 'Priority':
        filterPriority();
        break;
      case 'Alphabetically':
        filterAlphabetically();
        break;
      case 'Created date':
        filterCreateDate();
        break;
      case 'Completed':
        filterCompleted();
        break;
      case 'Not completed':
        filterNotCompleted();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    filterFunc();
  }, [tasks, filter]);

  return (
    <FilterContext.Provider value={{filter, setFilter, filterTasks}}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;