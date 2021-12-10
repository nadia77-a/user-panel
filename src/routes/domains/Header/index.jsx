import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from 'redux-store/models';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';
import { Trans } from '@lingui/macro';
import Bconfig from "config";
// import skinImages from 'skinImages';
 import images from 'images';

const Header = ({
  setLanguage,
  language,
  user,
  logOut,
}) => { 
  const [hasLangDropDown, setLangDropDown] = useState(false);
  const [balanceVisible, setBalance] = useState(true);
  return (
    <header>
      <nav>
        <div>Logo</div>
        <div className="rightDiv">
          {user && (
            <div className="logged-container">
              <div className="userDropDown">
                <i className="fal fa-user"></i>
                <div className="userDropDown-drop">
                  <ul>
                    <li>
                      <Trans>Utente</Trans>: {user.name}
      
                    </li>
                    <li
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <Trans>Esci</Trans>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="balance">
                {balanceVisible && (
                  <div className="wallet-wrapper">
                    <span>{user.balance}</span> <span>{user.currency}</span>
                    <span>
                      <i className="fad fa-chevron-down" aria-hidden="true"></i>
                    </span>
                    <div className="wallet-dropdown">
                      {user?.wallet_balance?.map(w => (
                        <div key={w.currency}>
                          <span>{w.balance}</span> <span>{w.currency}</span>{' '}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <i
                  onClick={() => {
                    setBalance(!balanceVisible);
                  }}
                  className={`fal fa-${balanceVisible ? 'eye' : 'eye-slash'}`}
                ></i>
              </div>
            </div>
          )}
          {/* <div className="logoutBtn"  onClick={() => { logOut() }}>Logout</div> */}

       
              <div className="lang">
                <div>
                  <img src={images[language] || ''} alt="" />
                  <span>{language}</span>
                  <i
                    onClick={() => {
                      setLangDropDown(!hasLangDropDown);
                    }}
                    className={`fal fa-chevron-${
                      !hasLangDropDown ? 'down' : 'up'
                    }`}
                  ></i>
                </div>
                {hasLangDropDown && (
                  <div className="dropDown">
                    {Object.keys(Bconfig.languages)?.map(language => (
                      <div
                        key={language}
                        className="dropDown-item"
                        onClick={() => {
                          setLangDropDown(false);
                          setLanguage(language);
                          localStorage.setItem('language', language);
                        }}
                      >
                        <img src={images[language] || ''} alt="" />
                        {Bconfig.languages[language]?.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  setLanguage: PropTypes.func,
  setUserLoginPopUp: PropTypes.func,
  setPopUp: PropTypes.func,
  logOut: PropTypes.func,
  language: PropTypes.string,
  getLogin: PropTypes.func,
  user: PropTypes.object,
};

const mapsStateToProps = state => {
  return {
    user: state.auth.user,
    language:state.auth.language
  };
};

export default withRouter(
  connect(mapsStateToProps, { ...AuthActions })(Header)
);
