import { Signup, Profile, Login, PrivateRoute, ForgotPassword, UpdateProfile, } from "./Auth/Authindex";
import CenteredContainer from "./CenteredContainer";
import AddItem from "./AddItem";
import Header from "./Head";
import BottomNavbar from "./Navbar";
import Shoppinglist from "./Shoppinglist";
import Storagetab from "./Storagetab";
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
            <PrivateRoute path="/additem" component={AddItem} />
            <PrivateRoute path="/shoppinglist" component={Shoppinglist} />
            <PrivateRoute path="/storage" component={Storagetab} />
          </Switch>
          <BottomNavbar />
        </AuthProvider>
      </Router>
    </CenteredContainer>
  );
}

export default App;
