import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Layout from './pages/Layout';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Routes from './Routes';
import defaultTheme from './themes/default';

const App = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <Layout>
        <Main maxWidth={false}>
          <NavBar />
          <Routes />
        </Main>
      </Layout>
    </MuiThemeProvider>
  );
};

export default App;
