import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/navbar/Navbar";
import Landing from "./components/layout/landing-page/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import { FooterContainer } from "./components/layout/footer/containers/footer";
import { TermsOfCondition } from "./components/layout/footer/containers/TermsOfCondition";
import { PrivacyPolicy } from "./components/layout/footer/containers/PrivacyPolicy";


import "./App.css";

import Hiring from "./components/layout/hiring-page/Hiring.js";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" >
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/hiring" component={Hiring}/>
          <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/TermsOfCondition" component={TermsOfCondition} />
          <FooterContainer/>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>

      </Router>
    </Provider>
  );
};
export default App;
