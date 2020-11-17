import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/authDb';

const PrivateRoute = ({ component: Component, ...rest}) => {
  // get the currentuser from the hook.
  const currentUser = useAuth();
  // Return a route based on the user being logged in.
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to='/login' />
      }}
    >
    </Route>
  )
}

export default PrivateRoute
