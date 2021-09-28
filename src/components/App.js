import { Signup, Profile, Login, PrivateRoute, ForgotPassword, UpdateProfile, } from "./Auth/Authindex";
import CenteredContainer from "./CenteredContainer";
import AddItem from "./AddItem";
import Header from "./Head";
import BottomNavbar from "./Navbar";
import Shoppinglist from "./Shoppinglist";
import Storage from "./Storage";
import Account from "./Account";
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
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/additem" component={AddItem} />
            <Route path="/shoppinglist" component={Shoppinglist} />
            <Route path="/storage" component={Storage} />
          </Switch>
          <BottomNavbar />
        </AuthProvider>
      </Router>
    </CenteredContainer>
  );
}

export default App;
