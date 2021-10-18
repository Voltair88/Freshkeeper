import React, { useContext, useState } from "react";
import { ST } from "../styles";
import { ItemsContext } from "../context/ItemsContext";
import firebase from "../firebase";
import { Accordion } from "@material-ui/core";
import { Icon } from "@iconify/react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// Context

export default function Shoppinglist() {
  const { items } = useContext(ItemsContext);
  const [open, setOpen] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .update({
        Shoppinglist: false,
      })
      .then(() => {
        return setOpen(true);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  return (
    <ST>
      <div className="Shoppinglist">
        <div className="Shoppinglist-Header">
          <h3>Shopping List</h3>
          <p className="Storage-description">
            this is your shoppinglist. see all shoppinglist items, or add new
            catagoies.
          </p>
          <hr />
        </div>
      </div>
      <div className="All-items">Shoppinglist </div>
      {items.map((item) => {
        if (item.Shoppinglist === true) {
          return (
            <Accordion className="item">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p> {item.text}</p>
                <div className="item-info">
                  <div className="line"></div>
                  {item.quantity} {item.unit} <div className="line"></div>{" "}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="item-details">
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
        <Alert severity="success">Item deleted !</Alert>
      </Snackbar>
    </ST>
  );
}
