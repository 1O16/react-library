import React, { useState } from "react";
import { Button, ActionSheet, ActionSheetButton } from "react-onsenui";

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const changeFalse = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Action Sheet Open</Button>
      <ActionSheet isOpen={open} title="Action Sheet">
        <ActionSheetButton>Label 1</ActionSheetButton>
        <ActionSheetButton>Label 2</ActionSheetButton>
        <ActionSheetButton>Label 3</ActionSheetButton>
        <ActionSheetButton modifier="destructive" onClick={changeFalse}>
          Cancle
        </ActionSheetButton>
        <ActionSheetButton>Save</ActionSheetButton>
      </ActionSheet>
    </div>
  );
}
