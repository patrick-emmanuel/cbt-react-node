import React from 'react';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';
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