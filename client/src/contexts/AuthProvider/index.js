import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from "react-router-dom";
import {
  SIGN_UP_MUTATION,
  LOGIN_MUTATION,
  VERIFY_TOKEN_MUTATION
} from './mutations';
import {
  getAuthToken,
  getLoggedInUser,
  saveCredentials,
  deleteCredentials
} from '../../utils/auth';
import { defineAbility } from '../../utils/authorization/ability';

export const AuthContext = React.createContext();

const AuthProvider = ({ children, history }) => {

  const token = getAuthToken();
  const [ability, setAbility] = React.useState(null);
  const loggedInUser = JSON.parse(getLoggedInUser());

  const logout = () => {
    deleteCredentials();
    history.replace('/login');
    window.location.reload();
  };

  const authenticate = (token, user) => {
    saveCredentials(token, user)
    const ability = defineAbility(user);
    setAbility(ability);
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

  const [
    verifyToken,
    {
      data: verifyTokenData,
      loading: verifyLoading,
    }
  ] = useMutation(
    VERIFY_TOKEN_MUTATION,
    {
      onCompleted(data) {
        if (data.verifyToken.user && data.verifyToken.token) {
          const { user } = data.verifyToken;
          if (user.id !== loggedInUser.id) {
            logout();
          }
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
    if (userToken) {
      verifyToken({ variables: { token: userToken } });
    }
  }, [verifyToken, loginData, token]);

  return (
    <AuthContext.Provider
      value={{
        login,
        signUp,
        ability,
        signUpError,
        loginError,
        loginLoading,
        signUpLoading,
        verifyLoading,
        verifyTokenData,
        user: loggedInUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthProvider);