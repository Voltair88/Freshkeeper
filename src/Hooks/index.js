import { useState, useEffect } from "react";
import firebase from "../firebase";

export function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('items')
      .onSnapshot( snapshot => {
        const newItem = snapshot.docs.map( doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setItems(newItem)
      })

    return () => unsubscribe()
  }, [])

  return items
}

export function useStorages(items) {
    const [storages, setStorages] = useState([]);
  
    useEffect(() => {
      let unsubscribe = firebase
        .firestore()
        .collection('storages')
        .onSnapshot( snapshot => {
          const newstorage = snapshot.docs.map( doc => {

            const storageName = doc.data().name

            return {
                id: doc.id,
                name: storageName
            }
          })
          setStorages(newstorage)
        })
  
      return () => unsubscribe()
    }, [])
  
    return items
  }