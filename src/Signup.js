import React, {useCallback} from 'react';
import './Signup.css'
import { withRouter } from "react-router";
import app from "./fire";
// import { Button } from "@material-ui/core";
// import Search from './Search';
// import { useHistory } from "react-router-dom";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);
    return (
        <div className="inner-container">
        <div className="header1">
          Register
        </div>
        <div className="box">
        <form onSubmit={handleSignUp}>
          {/* <div className="input-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div> */}

          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            >Sign Up</button>
            </form>
        </div>
      </div>
    );
}

// export default Signup
export default withRouter(Signup);