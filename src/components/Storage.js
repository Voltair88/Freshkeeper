import React, { useState,useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Accordion } from "@material-ui/core";
import { Icon } from "@iconify/react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ST } from "../styles";
import firebase from "../firebase";


export default function Storage() {
  // States
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);

  // Context
  const { items, setItems } = useContext(ItemsContext);

  // Functions

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const storages = [
    { id: 1, name: "Freezer" },
    { id: 2, name: "Fridge" },
    { id: 3, name: "Pantry" },
  ];

  return (
    <ST>
      <div className="Freezer">Freezer </div>
      {items.map((item) => {
        if (item.storage === "Freezer") {
          return (
            <Accordion className="item">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p> {item.text}</p>
                <div className="item-info">
                  <div className="line"></div>
                  {item.quantity}
                  {item.unit} <div className="line"></div> {item.days}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
                  <button className="item-details-button">
                    <Icon
                      icon="carbon:shopping-cart-plus"
                      width="32"
                      height="32"
                    />
                    Add to Cart
                  </button>
                  <button className="item-details-button">
                    <Icon
                    onClick={() => handleDelete(item.id)}
                      icon="ic:baseline-delete-forever"
                      width="32"
                      height="32"
                    />
                    Delete
                  </button>
                  <button className="item-details-button">
                    <Icon icon="bx:bxs-edit" width="32" height="32" />
                    Edit
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
      <div className="Fridge">Fridge </div>
      {items.map((item) => {
        if (item.storage === "Fridge") {
          return (
            <Accordion className="item">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p> {item.text}</p>
                <div className="item-info">
                  <div className="line"></div>
                  {item.quantity}
                  {item.unit} <div className="line"></div> {item.days}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
                  <button className="item-details-button">
                    <Icon
                      icon="carbon:shopping-cart-plus"
                      width="32"
                      height="32"
                    />
                    Add to Cart
                  </button>
                  <button className="item-details-button">
                    <Icon
                    onClick={() => handleDelete(item.id)}
                    icon="ic:baseline-delete-forever"
                      width="32"
                      height="32"
                    />
                    Delete
                  </button>
                  <button className="item-details-button">
                    <Icon icon="bx:bxs-edit" width="32" height="32" />
                    Edit
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
      <div className="Pantry">Pantry</div>
      {items.map((item) => {
        if (item.storage === "Pantry") {
          return (
            <Accordion className="item">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p> {item.text}</p>
                <div className="item-info">
                  <div className="line"></div>
                  {item.quantity}
                  {item.unit} <div className="line"></div> {item.days}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
                  <button className="item-details-button">
                    <Icon
                      icon="carbon:shopping-cart-plus"
                      width="32"
                      height="32"
                    />
                    Add to Cart
                  </button>
                  <button className="item-details-button">
                    <Icon
                    onClick={() => handleDelete(item.id)}
                    icon="ic:baseline-delete-forever"
                      width="32"
                      height="32"
                    />
                    Delete
                  </button>
                  <button className="item-details-button">
                    <Icon icon="bx:bxs-edit" width="32" height="32" />
                    Edit
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </ST>
  );
}
