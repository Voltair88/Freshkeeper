import Signup from "./Auth/Signup";
import Profile from "./Auth/Profile"
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import ForgotPassword from "./Auth/ForgotPassword";
import UpdateProfile from "./Auth/UpdateProfile";
import CenteredContainer from "./CenteredContainer";
import Header from "./Head";
import BottomNavbar from "./Navbar";
import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <CenteredContainer>
          <Header />
          <BottomNavbar />

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
    </CenteredContainer>
  );
}

export default App;
