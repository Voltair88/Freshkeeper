import React, { useState, useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Accordion } from "@material-ui/core";
import { Icon } from "@iconify/react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ST } from "../styles";
import firebase from "../firebase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Storage() {
  // States
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  // Context
  const { items } = useContext(ItemsContext);

  // Functions

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
      .then(() => {
        return setMessage(true);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleMove = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .update({
        Shoppinglist: true,
      })
      .then(() => {
        return setOpen(true);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

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
                  {item.quantity} {item.unit} <div className="line"></div>{" "}
                  {item.days}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
                  <button className="item-details-button">
                    <Icon
                      onClick={() => handleMove(item.id)}
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

        return null;
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
                  {item.quantity} {item.unit} <div className="line"></div>{" "}
                  {item.days}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
                  <button className="item-details-button">
                    <Icon
                      onClick={() => handleMove(item.id)}
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

        return null;
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
                  {item.quantity} {item.unit} <div className="line"></div>{" "}
                  {item.days}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
                  <button className="item-details-button">
                    <Icon
                      onClick={() => handleMove(item.id)}
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

        return null;
      })}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="info">Item added to shopping list</Alert>
      </Snackbar>
      <Snackbar
        open={message}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">Item deleted!</Alert>
      </Snackbar>
    </ST>
  );
}
