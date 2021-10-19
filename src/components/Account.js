import React, { useState } from "react";
import { Acc } from "../styles";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Icon } from "@iconify/react";
import UpdateEmail from "./Auth/UpdateEmail";

export default function Account() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <Acc>
      <h3>Account</h3>
      <hr />
      <div className="icon">
      <Icon icon="iconoir:profile-circled" width="38" height="38" />
      <h9>profile</h9>
      </div>
      <div className="account-tab">
        <Link to="/update-email">Change Email</Link>
        <p> {currentUser.email} </p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </div>
      <div className="account-tab">
        <Link to="/change-password">Change Password</Link>
        <p> ****** </p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </div>
      <hr />
      <div className="icon">
      <Icon icon="bytesize:settings" width="40" height="40" />
      <h9>Settings</h9>
      </div>
      <div className="account-tab">
        <Link>Storage Settings</Link>
        <p>avalible in version 2.0</p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </div>
      <div className="account-tab">
        <Link>Notifications</Link>
        <p>avalible in version 2.0</p>
        <Icon icon="dashicons:arrow-left-alt2" rotate={2} />
      </div>
      <hr />
      <div className="icon">
      <Icon icon="akar-icons:more-horizontal" width="40" height="40" />
      <h9>More</h9>
      </div>
      <div className="account-tab">
        <Link to="/support">Support</Link>
      </div>
      <div className="account-tab">
        <p className="Logout" onClick={handleLogout}>Log Out</p>
      </div>
    </Acc>
  );
}
