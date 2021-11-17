import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthActions } from 'redux-store/models';
import { withRouter } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapsStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default withRouter(
  connect(mapsStateToProps, { ...AuthActions })(PrivateRoute)
);
