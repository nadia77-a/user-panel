import React from "react";
import { connect } from "react-redux";
import { AuthActions } from "redux-store/models";
import { withRouter } from "react-router-dom";
import "./login.css";

class Login extends React.Component {
  state = {
    userName: "",
    password: "",
    isForgot: false,
  };

  handleChangeUsername = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userName, password, email, isForgot } = this.state;
    if (isForgot) {
      this.props.forgotPassword(email);
    } else {
       await this.props.getLogin(userName, password);
    }
  };

  render() {
    const { isForgot } = this.state;
    const { loginMsg } = this.props;

    return (
      <React.Fragment>
        <form className="login animated fadeIn" method="POST">
          <div className="title">
            <i className="fal fa-user-circle"></i>
            <div>Login</div>
          </div>
          <ul>
            {isForgot ? (
              <li>
                <input
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      this.handleSubmit(e);
                    }
                  }}
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                  id="loginEmail"
                />
              </li>
            ) : (
              <>
                <li>
                  <input
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        this.handleSubmit(e);
                      }
                    }}
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChangeUsername}
                    id="loginUserName"
                  />
                </li>
                <li>
                  <input
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        this.handleSubmit(e);
                      }
                    }}
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    onChange={this.handleChangePassword}
                  />
                </li>
              </>
            )}

            <li>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="loginBtn"
              >
                {isForgot ? "Vai" : "Login"}
              </button>
              <span onClick={() => this.setState({ isForgot: !isForgot })}>
                {!isForgot ? "Password dimenticata?" : "Accedi"}
              </span>
            </li>
          </ul>

          {loginMsg && <div className="loginMsg">{loginMsg}</div>}
        </form>
      </React.Fragment>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    loginMsg: state.auth.loginMsg,
  };
};

export default withRouter(
  connect(mapsStateToProps, { ...AuthActions })(Login)
);
