import { Signup, Login, PrivateRoute, ForgotPassword, UpdateEmail,Changepassword } from "./Auth/Authindex";
import AddItem from "./AddItem";
import Header from "./Head";
import BottomNavbar from "./Navbar";
import Shoppinglist from "./Shoppinglist";
import Storage from "./Storage";
import Support from "./Auth/Support";
import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Account";

function App() {
  
  return (
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Account} />
            <PrivateRoute path="/update-email" component={UpdateEmail} />
            <PrivateRoute path="/change-password" component={Changepassword} />
            <PrivateRoute path="/support" component={Support} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/additem" component={AddItem} />
            <PrivateRoute path="/shoppinglist" component={Shoppinglist} />
            <PrivateRoute path="/storage" component={Storage} />
          </Switch>
          <BottomNavbar />
        </AuthProvider>
      </Router>
  );
}

export default App;
