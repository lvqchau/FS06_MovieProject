import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthAdmin = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      component={component}
    />
  );
};

export default AuthAdmin;