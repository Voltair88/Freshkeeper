import React,{useContext} from "react";
import { ItemsContext } from "../context/ItemsContext";
import Item from "../components/Item";

export default function Storage() {
  const storages = [
    { id: 1, name: "Freezer" },
    { id: 2, name: "Fridge" },
    { id: 3, name: "Pantry" },
  ];
  const { items } = useContext(ItemsContext);
  return (
    <div>
      {storages.map((storage) => (
        <div>
          <div className={storage.name}>{storage.name}</div>
          {items.map(item => {
            if (item.storage === storage.name) {
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
