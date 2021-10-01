import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { AI } from "../styles";
import { Icon } from "@iconify/react";
import InputSpinner from 'react-bootstrap-input-spinner' 

export default function AddItem() {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState("");
  const [day, setDay] = useState(new Date());


  return (
    <AI>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form>
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
              placeholder={amount}
             />
            <select
              placeholder="Choose quantity"
              className="select-input"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
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
            <div className="storage-options active">
              <Icon icon="bx:bx-fridge" width="31" height="31" />
              <p>fridge</p>
            </div>
            <div className="storage-options">
              <Icon icon="ph:thermometer-cold" width="31" height="31" />
              <p>freezer</p>
            </div>
            <div className="storage-options">
              <Icon icon="carbon:wheat" width="31" height="31" />
              <p>Pantry</p>
            </div>
            <div className="storage-options">
              <p style={{ marginTop: "8px" }}>Custom storage</p>
            </div>
          </div>
          <hr />
          <div className="pick-day">
            <p className="numbers">4</p>
            <h3>Choose Expiration Date</h3>
            <DatePicker
              format="dd/MM/yyyy"
              className="Datepicker"
              value={day}
              onChange={(day) => setDay(day)}
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
              <p className="summary-subtitel">fridge</p>
            </div>
            <div className="summary-item">
              <div className="summary-title">date</div>
              <p className="summary-subtitel">7</p>
            </div>
            <div className="summary-item">
              <div className="summary-title">quantity</div>
              <p className="summary-subtitel">
                {quantity}
                {amount}
              </p>
            </div>
          </div>
          <div className="confirm">
            <button>Confirm</button>
          </div>
        </form>
      </MuiPickersUtilsProvider>
    </AI>
  );
}
