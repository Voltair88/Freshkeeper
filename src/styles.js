import styled from "styled-components";

/* Header */
export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px 14px 18px;
  position: absolute;
  height: 65px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #0e4462;

  h1 {
    position: static;
    height: 31px;
    top: 17px;
    font-family: Pacifico, cursive, sans-serif;
    font-size: 20px;
    line-height: 20px;
    color: #49beff;
    margin: 0px 10px;
  }
`;

/* Bottom Nav */
export const Bnav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  position: fixed;
  height: 65px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #033b5b;
  color: #49beff;
  padding: 8px 16px 14px 18px;

  .nav-button {
    font-size: 12px;
    margin: 0px auto;
    bottom: 0px;
  }

  a {
    text-decoration: none;
  }

  .Active {
    color: white;
  }
`;

/* Account */
export const Acc = styled.div`
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }

  .account-tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px;
    margin: 2px 0px;
    left: 0px;
    right: 0px;
    background: rgba(185, 219, 231, 0.4);
    color: #11a9ff;
    width: 100%;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0px;
    margin-right: 10px !important;
    margin: auto;
  }
  .Logout {
    margin-left: 0px !important;
    color: #11a9ff;
  }
  hr {
    margin: 5px;
    border: 0.5px solid #49beff;
  }
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px auto;
    font-size: 12px;
    color: black;
  }
  a {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0;
    color: #49beff;
  }
  svg {
    color: black;
    margin-right: 0px;
  }
`;

/* Add Item */
export const AI = styled.div`
  width: 100%;
  padding: 5px 10px;
  margin: auto;
  max-width: 400px;

  .subhead {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 30px;
    min-width: 33%;
  }
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }

  p {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    margin: auto;
  }

  .item-name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 20px;
    margin: auto;
  }
  .numbers {
    font-family: Inter, sans-serif;
    font-style: normal;
    padding: 8px 7px;
    font-weight: 900;
    font-size: 12px;
    position: absolute;
    line-height: 50%;
    background-color: #49beff;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #49beff;
  }
  .name-input {
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 276px;
    height: 41px;
    left: 66px;
    top: 200px;
    background: rgba(17, 169, 255, 0.12);
    color: black;
    border: 1px solid #49beff;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 20px;
    margin: auto;
    padding-left: 1.2rem;
  }

  .item-quantity {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    margin: auto;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .number-input {
    -webkit-appearance: none;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid #49beff;
  }

  .plus,
  .minus {
    text-align: center;
    border-radius: 50%;
    width: 50px;
    border: 2px solid #49beff;
    background: #ffffff;
    color: black;
    font-size: 2rem;
  }

  .select-input {
    border-radius: 100vw;
    background: #ffffff;
    border: 2px solid #49beff;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    height: 50px;
    width: 50px;
    margin: 0;
  }
  .storages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    height: 65px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .storage-options label {
    margin: auto 5px;
    width: 76px;
    height: 76px;
    padding-top: 8px;
    border-radius: 100vw;
    border: 2px solid #49beff;
    text-align: center;
    letter-spacing: 0.025em;
    cursor: pointer;
  }

  input:active + label {
    background-color: #49beff;
  }

  .storage-options input[type="radio"] {
    display: none;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    height: 65px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .summary-item {
    font-family: Inter, sans-serif;
    margin: auto;
  }
  .summary-title {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
  }
  .summary-subtitel {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #49beff;
    text-transform: lowercase;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px auto;
    padding: 14px 16px 14px 18px;
    width: 311px;
    height: 48px;
    top: 740px;
    margin-top: 15px;
    border: #ffffff;
    background: #49beff;
    color: #ffffff;
    border-radius: 4px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  /* Date picker */

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    display: flex;
    margin: auto;
    width: 276px;
    height: 41px;
  }
  
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    display: flex;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    margin: auto;
    display: flex;
    background: rgba(17, 169, 255, 0.12);
    border: 1px solid #49beff;
    box-sizing: border-box;
    border-radius: 5px;
    width: 276px;
    height: 41px;
    cursor: pointer;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    display: flex;
    border: none; 
    cursor: pointer;
  }

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    cursor: pointer;
    margin-left: 73px;
  }
  
  /* Snackbar */

  .css-acap47-MuiAlert-message {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: fixed;
    padding-left: 30px;
  }
  .css-secft3-MuiPaper-root-MuiAlert-root,
  .css-16sd9zo-MuiPaper-root-MuiAlert-root {
    height: 50px;
    position: fixed;
    bottom: 10%;
  }
`;

/* Storage */
export const ST = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  margin-bottom: 100px;
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }

  .Storage-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    min-width: 33%;
  }
  .All-items {
    font-family: "Roboto", sans-serif;
    line-height: 21px;
    margin: 8px 0px;
    padding: 12px 0px 12px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    background-color: #e5cab0;
  }

  p {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }

  .Freezer,
  .Fridge,
  .Pantry {
    font-family: "Roboto", sans-serif;
    line-height: 21px;
    margin: 8px 0px;
    padding: 12px 0px 12px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
  }

  .item-name {
    color: #11a9ff;
  }

  .item-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }

  .item-details-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #11a9ff;
    background: #ffffff;
    color: black;
    width: 70px;
    height: 70px;
    margin: 0px 8px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    padding: 4px;
    transition: 0.2s ease-out;
  }

  .item-details-button:active {
    background: #49beff;
  }

  .item {
    width: 100%;
    align-items: left;
    padding-left: 14px;
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    background: #d5e4fb;
    margin: 8px 0px;
  }
  .item p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14;
    margin-right: auto;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-transform: capitalize;
  }
  .item-info {
    right: 0px;
    display: flex;
    flex-direction: row;
  }

  .line {
    width: 1px;
    height: 30px;
    background-color: black;
    margin: 2px 10px;
  }
  .Freezer {
    background-color: #49beff;
  }
  .Fridge {
    background-color: #73abff;
  }
  .Pantry {
    background-color: #ffe1d5;
  }
  .css-acap47-MuiAlert-message {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: fixed;
    padding-left: 30px;
    width: 300px;
  }
  .css-secft3-MuiPaper-root-MuiAlert-root,
  .css-16sd9zo-MuiPaper-root-MuiAlert-root {
    height: 50px;
    width: 300px;
    position: fixed;
    bottom: 10%;
  }
  .MuiAccordionSummary-content {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
  }
`;

/* Shopping List */
export const SL = styled.div`
  margin-bottom: 100px;
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
  .Shoppinglist-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    min-width: 33%;
  }
  .All-items {
    font-family: "Roboto", sans-serif;
    line-height: 21px;
    margin: 8px 0px;
    padding: 12px 0px 12px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    background-color: #e5cab0;
  }
`;

/* Support Page */
export const SP = styled.div`
  max-width: 30rem;
  margin-top: 9vh;
  margin-left: auto;
  margin-right: auto;
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2.7em;
    margin-right: auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
  label {
    color: #49beff;
  }
  input,
  textarea {
    border: 2px solid #49beff;
  }
  button {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-top: 14vh;
    width: 90%;
    max-width: 311px;
    height: 48px;
    border: none;
    background: #49beff;
  }
`;
