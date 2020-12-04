import React from 'react';
import AddForm from './AddForm';
import Filter from './Filter';
import Grid from '@material-ui/core/Grid';
import {blue} from '@material-ui/core/colors';

const Header = () => {
  return (
    <Grid container justify={'space-around'} style={{padding: 20, backgroundColor: blue[300]}}>
      <AddForm/>
      <Filter/>
    </Grid>
  );
};

export default Header;