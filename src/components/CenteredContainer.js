import React from "react";

export default function CenteredContainer({ children }) {
  return (
    <div
      className="centered-container"
      style={{
        height: "100%",
        marginTop: "7.2vh",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
