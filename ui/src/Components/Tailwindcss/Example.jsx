import React from "react";
import BackgroundExample from "./BackgroundExample";
import Button from "./Button";
import Message from "./Message";
import Position from "./Position";

export default function Example() {
  return (
    <div>
      <Position />
      <Message />
      <Button />
      <BackgroundExample />
    </div>
  );
}
