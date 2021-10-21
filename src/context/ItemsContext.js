import React, { createContext } from "react";
import { useItems, useStorages, useShoppinglist } from "../Hooks";

const ItemsContext = createContext();

function ItemsContextProvider({ children }) {
  const items = useItems();
  const storages = useStorages(items);
  const shoppinglist = useShoppinglist();

  return (
    <ItemsContext.Provider
      value={{
        storages,
        items,
        shoppinglist
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsContextProvider };
