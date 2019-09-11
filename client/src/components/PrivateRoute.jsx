import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../utils/auth';


const SectionRoute = ({
  component: Component,
  ...rest
}) => {
  const token = getAuthToken();
  // Implement permissions here.
  return (
    <>
      <Route
        {...rest}
        render={props =>
          token ? (
            <div>
              <Component {...props} />
            </div>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </>
  );
};

SectionRoute.displayName = 'Route';
export default SectionRoute;