import React from "react";
import { ProgressBar, ProgressCircular } from "react-onsenui";

export default function ProgressExample() {
  return (
    <div>
      <br />
      <ProgressCircular indeterminate></ProgressCircular>
      <ProgressCircular value="30" secondaryValue="50"></ProgressCircular>
      <ProgressCircular indeterminate modifier="material"></ProgressCircular>
      <ProgressBar indeterminate></ProgressBar>
    </div>
  );
}
