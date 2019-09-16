import React from 'react';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import './App.css';
import Routes from './Routes';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          {/* <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch> */}
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;