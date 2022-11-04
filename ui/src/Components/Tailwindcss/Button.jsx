import React, { useState } from "react";
import "./button.css";

export default function Button() {
  const [isGreen, setIsGreen] = useState(true);
  return (
    <div>
      <br />
      <button class="bg-sky-600 hover:bg-sky-400 rounded-full text-white py-2 px-4">
        Save changes
      </button>
      <button
        class={`py-2 px-4 bg-${
          isGreen ? "green" : "purple"
        }-500 text-white font-semibold rounded-full shadow-md hover:bg-${
          isGreen ? "green" : "purple"
        }-700 focus:outline-none focus:ring-2 focus:ring-${
          isGreen ? "green" : "purple"
        }-400 focus:ring-opacity-75`}
        onClick={() => setIsGreen((prev) => !prev)}
      >
        Click Me
      </button>
      <button class="btn-purple">Save changes</button>
      <br />
      <br />
    </div>
  );
}
