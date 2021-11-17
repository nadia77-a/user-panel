import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthActions } from 'redux-store/models';
import { withRouter } from 'react-router-dom';

const PublicRoute = ({ user, component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        user ? <Redirect to="/backoffice" /> : <Component {...props} />
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
  connect(mapsStateToProps, { ...AuthActions })(PublicRoute)
);
