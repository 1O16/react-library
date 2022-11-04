import React from "react";

export default function BackgroundExample() {
  return (
    <div style={{ height: 100, width: 1680 }}>
      <button
        style={{ height: "inherit", width: "inherit" }}
        className="bg-sky-500/100 ..."
      ></button>
      <button
        style={{ height: "inherit", width: "inherit" }}
        className="bg-sky-500/75 ..."
      ></button>
      <button
        style={{ height: "inherit", width: "inherit" }}
        className="bg-sky-500/50 ..."
      ></button>
    </div>
  );
}
