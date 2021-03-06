import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticate } from '../../shared/utils';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticate() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  export default PrivateRoute;