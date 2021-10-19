import React, { createContext } from "react";
import { useItems, useStorages } from "../Hooks";

const ItemsContext = createContext();

function ItemsContextProvider({ children }) {
  const items = useItems();
  const storages = useStorages(items);

  return (
    <ItemsContext.Provider
      value={{
        storages,
        items,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsContextProvider };
