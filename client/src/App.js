import React from 'react';
import AuthProvider from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Home from './home';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;