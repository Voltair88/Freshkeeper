import React from "react";
import { ST } from "../styles";
import Storage from "./Storage";


export default function Storagetab() {


  return (
    <ST>
      <div className="Storage">
        <div className="Storage-header">
          <h3>Storage</h3>
          <p className="Storage-description">
            this is your storage. see all items in storage, or sotrted in
            preffered sections, or create a new storage.
          </p>
          <hr />
        </div>
        <div>
          <Storage />
        </div>  
      </div>
    </ST>
  );
}
