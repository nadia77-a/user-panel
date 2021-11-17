
import React from "react";
import { connect } from "react-redux";
import { AuthActions } from "redux-store/models";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import "./header.css";

// const Header = (logOut) => (
//   <header>
//     <nav>
//       <div>Logo</div>
//       <div className="rightDiv">
//       <div className="logoutBtn"  onClick={() => { logOut() }}>Logout</div>
//       </div>
//     </nav>
//   </header>
// );


const Header = ({
  // setLanguage,
  // language,
  // getLogin,
  user,
  logOut,
  // setUserLoginPopUp,
  // setPopUp,
}) => {
console.log("user",user)


  return (
    <header>
    <nav>
      <div>Logo</div>
      <div className="rightDiv">
      <div className="logoutBtn"  onClick={() => { logOut() }}>Logout</div>
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

const mapsStateToProps = (state) => {
  return {
    user: state.auth.user
  }
  // return {
  //   logOut: state.auth.logOut,
  // };
};

export default withRouter(
  connect(mapsStateToProps, { ...AuthActions })(Header)
);


