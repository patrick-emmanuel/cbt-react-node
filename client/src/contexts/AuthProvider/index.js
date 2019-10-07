import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from "react-router-dom";
import {
  SIGN_UP_MUTATION,
  LOGIN_MUTATION,
  VERIFY_TOKEN_MUTATION
} from './mutations';
import { getAuthToken, setAuthToken, removeAuthToken } from '../../utils/auth';

export const AuthContext = React.createContext();

const AuthProvider = ({ children, history }) => {

  const token = getAuthToken();
  const [user, setUser] = React.useState('');

  const logout = () => {
    removeAuthToken();
    history.replace('/login');
    window.location.reload();
  };

  const authenticate = (token, user) => {
    setAuthToken(token)
    setUser(user);
    history.replace('/');
  };

  const [
    signUp,
    {
      loading: signUpLoading,
      error: signUpError
    }
  ] = useMutation(
    SIGN_UP_MUTATION,
    {
      onCompleted(data) {
        const { user, token } = data.signup;
        authenticate(token, user);
      },
      onError(error) {
        // removeAuthToken();
        console.log(error);
      }
    }
  );

  const [
    login,
    {
      data: loginData,
      loading: loginLoading,
      error: loginError,
    }
  ] = useMutation(
    LOGIN_MUTATION,
    {
      onCompleted(data) {
        const { user, token } = data.login;
        authenticate(token, user);
      },
      onError(error) {
        // removeAuthToken();
        console.log(error);
      }
    }
  );

  const [verifyToken] = useMutation(
    VERIFY_TOKEN_MUTATION,
    {
      onCompleted(data) {
        if (data.verifyToken.user && data.verifyToken.token) {
          const { user } = data.verifyToken;
          setUser(user);
        }
      },
      onError(error) {
        // removeAuthToken();
        console.log(error);
      }
    }
  );

  React.useEffect(() => {
    const userToken = loginData && loginData.login ? loginData.login.token : token;
    if (userToken && !user) {
      verifyToken({ variables: { token: userToken } });
    }
  }, [verifyToken, loginData, token, user]);

  return (
    <AuthContext.Provider
      value={{
        login,
        signUp,
        signUpError,
        loginError,
        loginLoading,
        signUpLoading,
        user,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthProvider);