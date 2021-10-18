import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./components/App";
import { ItemsContextProvider } from "./context/ItemsContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
      <ItemsContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ItemsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
