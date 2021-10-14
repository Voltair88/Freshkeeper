import React, { useState, useContext, useEffect } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Icon } from "@iconify/react";
import { AI } from "../styles";
import InputSpinner from "react-bootstrap-input-spinner";
import { ItemsContext } from "../context/ItemsContext";
import firebase from "../firebase";
import moment from "moment";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


export default function AddItem() {
  // Context
  const { selectedStorage } = useContext(ItemsContext);

  // State
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [days, setDays] = useState(null);
  const [storage, setStorage] = useState("");
  const [open , setOpen] = useState(false);
  const [message , setMessage] = useState(false);

  const storages = [
    { id: 1, name: "Freezer" },
    { id: 2, name: "Fridge" },
    { id: 3, name: "Pantry" },
  ];
  const icons = [
    { storage: "Freezer", icon: "ph:thermometer-cold" },
    { storage: "Fridge", icon: "bx:bx-fridge" },
    { storage: "Pantry", icon: "carbon:wheat" },
  ];

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // Functions

  const handleClick = () => {
    if (text === "" || quantity === 0 || unit === "" || days === 0)
    return setOpen(true);
    else  {
      return setMessage(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || quantity === 0 || unit === "" || days === 0) {
      handleClick();
    } else {
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
          setDays(0);
          setStorage("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setStorage(selectedStorage);
  }, [selectedStorage]);

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
              onChange={(e) => setText(e.target.value)}
              placeholder="Add product name"
              autoFocus
            />
          </div>
          <hr />
          <p className="numbers">2</p>
          <h3>Choose quantity</h3>
          <div className="item-quantity">
            <InputSpinner
              className="number-input"
              type="number"
              min="0"
              value={quantity}
              onChange={setQuantity}
              placeholder={unit}
            />
            <select
              placeholder="Choose quantity"
              className="select-input"
              onChange={(e) => setUnit(e.target.value)}
              value={unit}
            >
              <option hidden>...</option>
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="L">L</option>
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
                    icon={icons.find((i) => i.storage === storage.name).icon}
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
          {/*           <div className="remind">
            <p>Remind me!</p>
          </div> */}
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
                {moment(days).endOf("day").fromNow()}
              </p>
            </div>
            <div className="summary-item">
              <div className="summary-title">quantity</div>
              <p className="summary-subtitel">
                {quantity}
                {unit}
                <br />
              </p>
            </div>
          </div>
          <div className="confirm">
            <button onClick={handleClick}>Confirm</button>
             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}>
              <Alert onClose={handleClose} severity="info" style={{ height: '48px' }}  >
              Please fill in all fields!
              </Alert>
            </Snackbar>
            <Snackbar open={message} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}>
              <Alert onClose={handleClose} severity="success" style={{ height: '48px' }}  >
              Item added !
              </Alert>
            </Snackbar> 
          </div>
        </form>
      </MuiPickersUtilsProvider>
    </AI>
  );
}
