import React from "react";
import { Acc } from "../styles";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Icon } from "@iconify/react";

export default function Account() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
        try {
      await logout();
      history.push("/login");
    } catch {
    }
  }

  return (
    <Acc>
      <h3>Account</h3>
      <hr />
      <div className="icon">
        <Icon icon="iconoir:profile-circled" width="38" height="38" />
        <p>profile</p>
      </div>
      <Link to="/update-email" className="account-tab">
        Change Email
        <p> {currentUser.email} </p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </Link>
      <Link to="/change-password" className="account-tab">
        Change Password
        <p> ****** </p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </Link>
      <hr />
      <div className="icon">
        <Icon icon="bytesize:settings" width="40" height="40" />
        <p>Settings</p>
      </div>
      <Link to="/" className="account-tab">
        Storage Settings
        <p>avalible in version 2.0</p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </Link>
      <Link to="/" className="account-tab">
        Notifications
        <p>avalible in version 2.0</p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </Link>
      <hr />
      <div className="icon">
        <Icon icon="akar-icons:more-horizontal" width="40" height="40" />
        <p>More</p>
      </div>
      <Link to="/support" className="account-tab">
        Support
      </Link>
      <p className="Logout account-tab" onClick={handleLogout} >
        Log Out
      </p>
    </Acc>
  );
}
