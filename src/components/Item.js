import React from "react";

export default function Item() {
  const item = [
    { id: 1, name: "bread", storage: "fridge" },
    { id: 2, name: "milk", storage: "fridge" },
    { id: 3, name: "cheese", storage: "fridge" },
    { id: 4, name: "butter", storage: "fridge" },
  ];
  return (
    <div>
      {item.map((item) => (
        <item key={item.id}>
          <item.name>{item.name}</item.name>
        </item>
      ))}
    </div>
  );
}
