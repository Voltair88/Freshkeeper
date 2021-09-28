import Signup from "./Auth/Signup";
import Profile from "./Auth/Profile"
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import ForgotPassword from "./Auth/ForgotPassword";
import UpdateProfile from "./Auth/UpdateProfile";
import CenteredContainer from "./CenteredContainer";
import AddItem from "./AddItem";
import Header from "./Head";
import BottomNavbar from "./Navbar";
import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <CenteredContainer>
        <Router>
          <AuthProvider>
          <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/additem" component={AddItem} />
            </Switch>
            <BottomNavbar />
          </AuthProvider>
        </Router>
    </CenteredContainer>
  );
}

export default App;
