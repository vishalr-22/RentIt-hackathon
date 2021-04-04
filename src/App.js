import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Login from './Login'
import Signup from './Signup'
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      {/* <AuthProvider> */}
      <Router>
        <Header />
        
        <Switch>
          {/* <PrivateRoute path="/">
            <> */}
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/logged in">
            <Login />
          </Route>
          <Route exact path="/sign">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </ Router>
      {/* </AuthProvider> */}
    </div>
   
  );
}

export default App;
