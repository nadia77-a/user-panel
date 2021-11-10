import React, { useEffect } from 'react';
import { AuthActions } from 'redux-store/models';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Login } from './routes';

const Root = ({ getData, test }) => {
  // useEffect(() => {
  //   getData('test1', 'test2');
  // }, []);

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    </>
  );
};

const mstp = ({ auth: { test } }) => ({
  test,
});
export default connect(mstp, { ...AuthActions })(Root);
