import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

import './style.css';

import { Login,Backoffice } from './routes';

const Root = () => {

  return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </HashRouter>
  );
};


export default Root
