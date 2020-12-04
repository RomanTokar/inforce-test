import React from 'react';
import Grid from '@material-ui/core/Grid';
import TaskList from './components/TaskList';
import Header from './components/Header';

function App() {
  return (
    <Grid container>
      <Grid item lg={3} md={2} sm={1}/>
        <Grid item lg={6} md={8} sm={10} xs={12} style={{marginTop: 100}}>
          <Header/>
          <TaskList/>
        </Grid>
      <Grid item lg={3} md={2} sm={1}/>
    </Grid>
  );
}

export default App;
