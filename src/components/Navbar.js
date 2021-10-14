import React from "react";
import { Bnav } from "../styles";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";


export default function BottomNavbar() {
  return (
    <Bnav>
      <div className="nav-button">
        <NavLink  to="/additem" activeClassName="Active">
          <Icon icon="ic:baseline-playlist-add" width="55" height="34" />
          <p>Add items</p>
        </NavLink>
      </div>
      <div className="nav-button">
        <NavLink to="/storage" activeClassName="Active">
        <Icon icon="bx:bxs-fridge" width="40" height="34" />
        <p>Storage</p>
        </NavLink>
      </div>
      <div className="nav-button">
        <NavLink to="/shoppinglist" activeClassName="Active">
        <Icon icon="mdi:clipboard-text" width="65" height="34" />
        <p>Shopping list</p>
        </NavLink>
      </div>
      <div className="nav-button">
        <NavLink exact to="/" activeClassName="Active">
        <Icon icon="ic:baseline-account-circle" width="45" height="34" />
        <p>Account</p>
        </NavLink>
      </div>
    </Bnav>
  );
}
