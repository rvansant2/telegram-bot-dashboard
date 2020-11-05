import React from 'react';
import { PropTypes } from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
  },
}));

const Main = ({ children, maxWidth, className: classNameProp, ...other }) => {
  const classes = useStyles();
  const className = clsx(classes.root, classNameProp);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container maxWidth={maxWidth} className={className} {...other} style={{ padding: '0 3rem' }}>
      {children}
    </Container>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
};

Main.defaultProps = {
  children: '',
  className: null,
  maxWidth: 'lg',
};

export default Main;
