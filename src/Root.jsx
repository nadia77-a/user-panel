import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import './style.css';

import { Login, Backoffice } from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Root = () => {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute component={Login} path="/" exact />
        <PublicRoute component={Login} path="/login" exact />
        <PrivateRoute component={Backoffice} path="/backoffice" exact />
      </Switch>
    </HashRouter>
  );
};

export default Root;
