import React from "react";

export default function CenteredContainer({ children }) {
  return (
    <div
      className="centered-container"
      style={{
        marginTop: "7.2vh",
        marginBottom: "7.2vh",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
