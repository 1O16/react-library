import React from "react";
import AlertDismissible from "./AlertDismissible";
import ButtonExample from "./ButtonExample";
import CarouselExample from "./CarouselExample";
import GridExample from "./GridExample";
import MydModalWithGrid from "./MydModalWithGrid";
import TransitionExample from "./TransitionExample";

export default function ReactBootstrapExample() {
  return (
    <div>
      <CarouselExample />
      <br />
      <GridExample />
      <br />
      <br />
      <AlertDismissible />
      <br />
      <br />
      <ButtonExample />
      <br />
      <br />
      <MydModalWithGrid />
      <br />
      <br />
      <TransitionExample />
    </div>
  );
}
