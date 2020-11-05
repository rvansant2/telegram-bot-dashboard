import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffaa00',
    },
    secondary: {
      main: '#646464',
      light: '#999999',
      lightX: '#E8E8E8',
      dark: '#0a0a0a',
      white: '#ffffff',
      grey: '#cccccc',
    },
  },
  container: {},
});

export default defaultTheme;
