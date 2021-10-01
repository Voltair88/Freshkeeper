import styled from "styled-components";

/* Top Nav */
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
  position: absolute;
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

export const Acc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: space-between;

  .account-tab {
    padding: 6px;
    margin: 2px 0px;
    left: 0px;
    right: 0px;
    background: aliceblue;
  }
  p {
    margin-bottom: 0;
  }
`;

export const AI = styled.div`
  form {
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
    padding: 5px 10px;
  }
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
  .numbers {
    font-family: Inter,sans-serif;
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
    border: 2px solid #49BEFF;
  }
  input {
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 276px;
    height: 41px;
    left: 66px;
    top: 200px;
    background: rgba(17, 169, 255, 0.12);
    border: 1px solid #49beff;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .input-group {
    width: 75px;
    height: 75px;
    display: flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: space-between;
    margin: auto 120px;
    border-radius: 100vw
  }
  .input-group > .form-control {
    min-width: 75px;
  }

  .input-group>.form-control, .input-group>.form-select {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    position: static;
    height: 76px;
    top: 314px;
    margin: auto 15px !important;
    border-radius: 100vw !important;
    background: #ffffff;
    border: 2px solid #49beff;
    box-sizing: border-box;
  }
  .input-group .btn {
    position: static;
    height: 49px;
    width: 49px;
    top: 314px;
    margin: 15px 15px;
    border-radius: 100vw;
    background: #ffffff;
    color: #49beff;
    border: 2px solid #49beff;
  }
  .input-group>.form-control, .input-group>.form-select {
    position: static;
    height: 76px;
    width: 75px;
  }
  .item-quantity {
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    margin: auto;
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

  .Datepicker {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .storage-options {
    margin: auto 5px;
    width: 76px;
    height: 76px;
    padding-top: 8px;
    border-radius: 100vw;
    border: 2px solid #49beff;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: lowercase;
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
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #49beff;
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
`;
