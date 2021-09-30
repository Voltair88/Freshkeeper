import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { AI } from "../styles";
import { Icon } from '@iconify/react';

export default function AddItem() {
  const [text, setText] = useState("");
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
          <div className="item-quantity">
            <p className="numbers">2</p>
            <h3>Choose quantity</h3>
            <input className="number-input" type="number" />
          </div>
          <hr />
          <p className="numbers">3</p>
          <h3>Choose storage</h3>
          <div className="storages">
            <div className="storage-options active">
            <Icon icon="bx:bx-fridge"  width="31" height="31"  />
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
              <p>Custom storage</p>
            </div>
          </div>
          <hr />
          <div className="pick-day">
            <p className="numbers">4</p>
            <p>Choose Expiration Date</p>
            <DatePicker value={day} onChange={(day) => setDay(day)} />
          </div>
          <hr />
          <div className="remind">
            <p>Remind me!</p>
          </div>
          <div className="summary">
            <div className="summary-item">
              <div className="summary-titel">product</div>
              <p className="summary-subtitel">{text}</p>
            </div>
            <div className="summary-item">
              <div className="summary-titel">storage</div>
              <p className="summary-subtitel">fridge</p>
            </div>
            <div className="summary-item">
              <div className="summary-titel">date</div>
              <p className="summary-subtitel">7 days</p>
            </div>
            <div className="summary-item">
              <div className="summary-titel">quantity</div>
              <p className="summary-subtitel">quantity</p>
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
