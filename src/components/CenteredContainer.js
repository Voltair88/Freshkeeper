import React from "react";

export default function CenteredContainer({ children }) {
  return (
    <div
      className="centered-container"
      style={{
        marginTop: "8vh",
        marginBottom: "8vh",
/*         justifyContent: "center",
 */      }}
    >
      {children}
    </div>
  );
}
