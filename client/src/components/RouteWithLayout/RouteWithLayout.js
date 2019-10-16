import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from 'contexts/AuthProvider';
import { getAuthToken } from 'utils/auth';

const RouteWithLayout = props => {
  const { user, verifyLoading, verifyTokenData } = React.useContext(AuthContext);
  const token = getAuthToken();
  const {
    adminRoute,
    privateRoute,
    layout: Layout,
    component: Component,
    ...rest
  } = props;

  if (verifyLoading && !verifyTokenData) {
    return 'Loading...'
  }

  if (privateRoute && !token) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    );
  }

  if (adminRoute && !user.role === 'ADMIN') {
    return 'Unauthorized!'
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  adminRoute: PropTypes.bool,
  privateRoute: PropTypes.bool
};

export default RouteWithLayout;
