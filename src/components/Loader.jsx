import React from "react";

export default function Loader({isFetching}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: '40px',
        left: "50%",
        // transform: "translate(-50%, -50%)",
        display:(isFetching?'flex':'none'),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderTop: `2px solid #000`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
