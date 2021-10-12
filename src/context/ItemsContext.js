import React, { createContext, useState} from 'react'
import { useItems, useStorages } from '../Hooks'

const ItemsContext = createContext()

function ItemsContextProvider({children}) {
    const defaultStorage = 'Fridge'
    const [selectedStorage, setSelectedStorage] = useState(defaultStorage)

    const items = useItems
    const storages = useStorages(items)

    return (
        <ItemsContext.Provider
        value={{
            selectedStorage,
            setSelectedStorage,
            storages,
            items
        }}
        >
            {children}
         </ItemsContext.Provider>
    )
}

export {ItemsContext, ItemsContextProvider}