import React from "react";
import { storages, items } from "./constants";

export default function Storage() {
  return (
    <div>
      {storages.map((storage) => (
        <div>
          <div className={storage}>{storage}</div>
          {items.map((item) => {
            if (item.storage === storage) {
              return (
                <li key={item.id}>
                  <div className="item-name">{item.name}</div>{" "}
                  <p>
                    <div className="line"></div>
                    {item.quantity}
                    {item.unit} <div className="line"></div> {item.expiry}{" "}
                    <div className="line"></div>{" "}
                  </p>
                </li>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
