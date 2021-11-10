import React from "react";

import { connect } from "react-redux";

import AuthActions from "redux-store/models/auth";
import LoginComponent from "routes/domains/Login";

class Login extends React.Component {
//   componentDidMount() {
//     if (localStorage.getItem("accountData")?.includes("object")) {
//       localStorage.setItem("accountData", null);
//     }
//   }

  render() {
    return <LoginComponent></LoginComponent>;
  }
}

const mapsStateToProps = ({ auth }) => ({});

export default connect(mapsStateToProps, { ...AuthActions })(Login);
