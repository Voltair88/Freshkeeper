import styled from "styled-components";
import AddItem from "./components/AddItem";

/* Top Nav */
export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  /* Auto Layout */
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
    font-family: Pacifico;
    font-size: 20px;
    line-height: 20px;
    /* or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #49beff;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
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
  }
  .subhead {
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 30px;
    margin: auto 8%;
    min-width: 100%;
  }
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
  .numbers {
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    position: absolute;
    line-height: 50%;
    margin: 0px;
    background-color: #49beff;
    padding: 10px;
    border-radius: 100vw;
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
  .number-input {
    font-size: 36px;
    text-align: center;
    width: 75px;
    height: 76px;
    left: 169px;
    top: 314px;
    border-radius: 100vw;
    background: #ffffff;
    border: 2px solid #49beff;
    box-sizing: border-box;
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
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    width: 76px;
    height: 76px;
    
    border-radius: 100vw;
    border: 2px solid #49beff;
    text-align: center;
    letter-spacing: 0.015em;
    text-transform: lowercase;
  }
`;
