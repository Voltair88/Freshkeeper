import React from "react";

export default function Item(item) {
  return (
    <div>
      <div className="item">
        <div className="item-name">{item.name}</div>{" "}
        <p>
          <div className="line"></div>
          {item.quantity}
          {item.unit} <div className="line"></div> {item.expiry}{" "}
          <div className="line"></div>{" "}
        </p>
      </div>
    </div>
  );
}
