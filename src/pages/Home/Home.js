import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import useStyles from './Home.styles';
import Dashboard from '../../components/Dashboard/Dashboard';

// eslint-disable-next-line no-unused-vars
const Home = ({ themeClasses }) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Dashboard />
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  themeClasses: PropTypes.shape(),
};

Home.defaultProps = {
  themeClasses: {},
};

export default Home;
