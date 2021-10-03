import React from "react";
import Item from "./Item";
import { storages } from "./constants";

export default function Storage() {
  return (
    <div>
      {storages.map((storage) => (
        <div className="Storage-item" key={storage}>
          {storage}
        </div>
      ))}
    </div>
  );
}
