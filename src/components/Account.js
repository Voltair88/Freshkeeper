import React from "react";
import { Acc } from "../styles";
import { NavLink } from "react-router-dom";

export default function Account() {
  return (
    <Acc>
      <div className="account-tab">
        <NavLink to="/forgot-password">
          <p> forgot password </p>
        </NavLink>
      </div>
      <div className="account-tab">
        <p>logout</p>
      </div>
    </Acc>
  );
}
