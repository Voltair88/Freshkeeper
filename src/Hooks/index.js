import { useState, useEffect } from "react";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function useItems() {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(firebase.auth());

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("items")
      .onSnapshot(snapshot => {
        const newItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(newItems);
      });
    return () => unsubscribe();
  }, [user]);

  return items;
}

export function useStorages(items) {
  const [storages, setStorages] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("storages")
      .onSnapshot((snapshot) => {
        const newstorage = snapshot.docs.map((doc) => {
          const storageName = doc.data().name;

          return {
            id: doc.id,
            name: storageName,
          };
        });
        setStorages(newstorage);
      });

    return () => unsubscribe();
  }, []);

  return storages;
}

export function useShoppinglist() {
  const [shoppinglist, setShoppinglist] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("Shoppinglist")
      .onSnapshot((snapshot) => {
        const newShoppinglist = snapshot.docs.map((doc) => {
          const shoppinglistName = doc.data().name;

          return {
            id: doc.id,
            name: shoppinglistName,
          };
        });
        setShoppinglist(newShoppinglist);
      });

    return () => unsubscribe();
  }, []);

  return shoppinglist;
}
