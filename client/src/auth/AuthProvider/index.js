import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from './context';
import { SIGN_UP_MUTATION, LOGIN_MUTATION } from '../mutations';
import { setAuthToken, removeAuthToken } from '../../utils/auth';

export const AuthContext = React.createContext();

const AuthProvider = ({ history }) => {

  const token = getAuthToken();
  const [user, setUser] = useState('');

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
      onError() {
        removeAuthToken();
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
      onError() {
        removeAuthToken();
      }
    }
  );

  React.useEffect(() => {
    const userToken = loginData && loginData.login ? loginData.login.token : token;
    if (userToken && !login && !user) {
      // verifyUser({ token: userToken });
      console.log('Verify token');
    }
  }, []);

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

export default AuthProvider;