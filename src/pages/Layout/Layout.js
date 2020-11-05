/* React */
import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.main}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
