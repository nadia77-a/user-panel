import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthActions } from 'redux-store/models';
import { withRouter } from 'react-router-dom';

import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { messages as enMessages } from 'locales/en/messages.js';
import { messages as itMessages } from 'locales/it/messages.js';

const messages = {
  en: enMessages,
  it: itMessages,
};

const PrivateRoute = ({ user, language, component: Component, ...rest }) => {

  useEffect(() => {
    i18n.load(language, messages[language || 'it']);
    i18n.activate(language);
  }, [language]);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <I18nProvider
    i18n={i18n}
    language={language}
    forceRenderOnLocaleChange={false}
  >
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
    </I18nProvider>
  );
};

const mapsStateToProps = state => {
  return {
    user: state.auth.user,
    language: state.auth.language,
  };
};

export default withRouter(
  connect(mapsStateToProps, { ...AuthActions })(PrivateRoute)
);
