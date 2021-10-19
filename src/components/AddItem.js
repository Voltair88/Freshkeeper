import React, { useState, useContext } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Icon } from "@iconify/react";
import { AI } from "../styles";
import { ItemsContext } from "../context/ItemsContext";
import firebase from "../firebase";
import moment from "moment";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@mui/material/Alert";

export default function AddItem() {
  // State
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState("");
  const [days, setDays] = useState(null);
  const [storage, setStorage] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  // Context

  const { storages } = useContext(ItemsContext);

  // Arrays

  const icons = [
    { storage: "Freezer", icon: "ph:thermometer-cold" },
    { storage: "Fridge", icon: "bx:bx-fridge" },
    { storage: "Pantry", icon: "carbon:wheat" },
  ];

  // Functions

  const handleName = (e) => {
    setText(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
  };

  const handlePlus = (e) => {
    e.preventDefault();
    setQuantity(parseInt(quantity) + 1);
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      setQuantity(parseInt(quantity) - 1);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      text === "" ||
      quantity === 0 ||
      unit === "" ||
      days === "" ||
      storage === ""
    )
      return setOpen(true);
    else {
      const db = firebase.firestore();
      db.collection("items")
        .add({
          text,
          quantity,
          unit,
          days: moment(days).endOf("day").fromNow(),
          storage,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setText("");
          setQuantity(0);
          setUnit("");
          setDays(null);
          setStorage(null);
          setMessage(true);
        });
    }
  };

  // Snackbar

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // Render

  return (
    <AI>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit}>
          <div className="text">
            <h3>Add Item</h3>
            <p className="subhead ">
              choose your product, quantity, storage and expiration date.{" "}
            </p>
          </div>
          <hr />
          <div className="item-name">
            <p className="numbers">1</p>
            <h3>Add product name</h3>
            <input
              className="name-input"
              type="text"
              value={text}
              maxLength="20"
              minLength="1"
              onChange={handleName}
              placeholder="Add product name"
              autoFocus
            />
          </div>
          <hr />
          <p className="numbers">2</p>
          <h3>Choose quantity</h3>
          <div className="item-quantity">
            <button className="minus" onClick={handleMinus}>
              {" "}
              -{" "}
            </button>
            <input
              className="number-input"
              type="number"
              min={0}
              max={1000}
              precision={2}
              step={0.1}
              value={quantity}
              onChange={handleQuantity}
            />
            <button className="plus" onClick={handlePlus}>
              {" "}
              +{" "}
            </button>
            <select
              placeholder="Choose quantity"
              className="select-input"
              onChange={handleUnit}
              value={unit}
            >
              <option hidden>...</option>
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="Liter">L</option>
              <option value="ml">ml</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
          <hr />
          <p className="numbers">3</p>
          <h3>Choose storage</h3>
          <div className="storages">
            {storages.map((storage) => (
              <div className="storage-options" key={storage.name}>
                <input
                  className={storage.name}
                  type="radio"
                  id={storage.id}
                  name="storage"
                  value={storage.name}
                  onClick={() => setStorage(storage.name)}
                />
                <label for={storage.id}>
                  <Icon
                    icon={
                      icons.find((icon) => icon.storage === storage.name).icon
                    }
                    width="31"
                    height="31"
                  />
                  {storage.name}
                </label>
              </div>
            ))}
          </div>
          <hr />
          <div className="pick-day">
            <p className="numbers">4</p>
            <h3>Choose Expiration Date</h3>
            <DatePicker
              format="dd/MM/yyyy"
              className="Datepicker"
              value={days}
              onChange={setDays}
            />
          </div>
          <hr />
          <div className="summary">
            <div className="summary-item">
              <div className="summary-title">product</div>
              <p className="summary-subtitel">
                {text}
                <br />
              </p>
            </div>
            <div className="summary-item">
              <div className="summary-title">storage</div>
              <p className="summary-subtitel">
                {storage}
                <br />
              </p>
            </div>
            <div className="summary-item">
              <div className="summary-title">date</div>
              <p className="summary-subtitel">
                {days ? moment(days).endOf("day").fromNow() : null}
                <br />
              </p>
            </div>
            <div className="summary-item">
              <div className="summary-title">quantity</div>
              <p className="summary-subtitel">
                {quantity} {unit}
                <br />
              </p>
            </div>
          </div>
          <div className="confirm">
            <button>Confirm</button>

            {/* Snackbar */}

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert onClose={handleClose} severity="info">
                Please fill in all fields!
              </Alert>
            </Snackbar>
            <Snackbar
              open={message}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert onClose={handleClose} severity="success">
                Item added !
              </Alert>
            </Snackbar>

            {/* Snackbar */}
          </div>
        </form>
      </MuiPickersUtilsProvider>
    </AI>
  );
}
