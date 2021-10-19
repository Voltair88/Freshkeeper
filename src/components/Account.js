import React, { useState } from "react";
import { Acc } from "../styles";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Icon } from "@iconify/react";

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
      <p>profile</p>
      </div>
      <div className="account-tab">
        <p>Change Email</p>
        <p> {currentUser.email} </p>
      </div>
      <div className="account-tab">
        <p>Change Password</p>
        <p> ****** </p>
      </div>
      <hr />
      <div className="icon">
      <Icon icon="bytesize:settings" width="40" height="40" />
      <p>Settings</p>
      </div>
      <div className="account-tab">
        <p>Storage Settings</p>
      </div>
      <div className="account-tab">
        <p>Notifications</p>
      </div>
      <hr />
      <div className="icon">
      <Icon icon="akar-icons:more-horizontal" width="40" height="40" />
      <p>More</p>
      </div>
      <div className="account-tab">
        <p>Log Out</p>
      </div>
    </Acc>
  );
}
