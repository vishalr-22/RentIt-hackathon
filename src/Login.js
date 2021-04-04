import React, { useCallback, useContext } from "react";
import './Login.css';
import { withRouter, Redirect } from "react-router";
import app from "./fire.js";
import { AuthContext } from "./Auth.js";
// import { Button } from "@material-ui/core";
// import Search from './Search';
// import { useHistory } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return(
        <div className="inner-container">
          <div className="header1">
            Login
          </div>
          <div className="box">

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <span htmlFor="email">Email: </span>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"/>
            </div>

            <div className="input-group">
              <span htmlFor="password">Password:</span>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>

            <button
              type="button"
              className="login-btn">Login</button>
            </form>

        </div>
        {/* <div className='wallpaper'>
          <img src="https://i.ibb.co/HGP86bN/card-wp-1.jpg"></img>
        </div> */}
      </div>
    );
}

// export default Login
export default withRouter(Login);