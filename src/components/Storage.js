import React, { useState, useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { ST } from "../styles";
import firebase from "../firebase";
import { Icon } from "@iconify/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuthState } from "react-firebase-hooks/auth"

export default function Storage() {
 
  // States
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  // Context
  const { items } = useContext(ItemsContext);
  const [user] = useAuthState(firebase.auth());

  // Functions

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const emptyStorage = (id) => {
    firebase
      .firestore()
      .collection(user.uid)
      .doc(id)
      .update({
        storage: "",
      })
      .then(() => {
        return setMessage(true);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection(user.uid)
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
        shoppinglist: true,
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
      <div className="Storage">
        <div className="Storage-header">
          <h3>Storage</h3>
          <p className="Storage-description">
            this is your storage. see all items in storage, or sotrted in
            preffered sections, or create a new storage.
          </p>
        </div>
        <hr />
      </div>
      <div className="Freezer">Freezer </div>
      {items.map((item) => {
        if (item.storage === "Freezer" && item.user === user.uid) {
          return (
            <Accordion className="item" key={item.id}>
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
                      onClick={
                        item.shoppinglist === true
                          ? () => emptyStorage(item.id)
                          : () => handleDelete(item.id)
                      }
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
        if (item.storage === "Fridge" && item.user === user.uid) {
          return (
            <Accordion className="item" key={item.id}>
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
                      onClick={
                        item.shoppinglist === true
                          ? () => emptyStorage(item.id)
                          : () => handleDelete(item.id)
                      }
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
        if (item.storage === "Pantry" && item.user === user.uid) {
          return (
            <Accordion className="item" key={item.id}>
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
                      onClick={
                        item.shoppinglist === true
                          ? () => emptyStorage(item.id)
                          : () => handleDelete(item.id)
                      }
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
