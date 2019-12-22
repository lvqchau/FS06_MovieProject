import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticationRoute = ({ path, component: Component }) => {
  return (
    <Route
      {...props}
      component={component}
    />
  );
};

export default AuthenticationRoute;