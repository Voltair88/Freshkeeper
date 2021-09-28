import React from "react";
import { Bnav } from "../styles";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
export default function BottomNavbar() {
  return (
    <Bnav>
        <div className="nav-button">
      <NavLink to="/additem" activeClassName="Active">
        <Icon icon="ic:baseline-playlist-add" width="55" height="34" />
        <p>Add items</p>
      </NavLink>
      </div>
      <div className="nav-button">
        <Icon icon="bx:bxs-fridge" width="40" height="34" />
        <p>Storage</p>
      </div>
      <div className="nav-button">
        <Icon icon="mdi:clipboard-text" width="65" height="34" />
        <p>Shopping list</p>
      </div>
      <div className="nav-button">
        <Icon icon="ic:baseline-account-circle" width="45" height="34" />
        <p>Account</p>
      </div>
    </Bnav>
  );
}
