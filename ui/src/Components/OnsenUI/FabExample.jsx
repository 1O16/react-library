import React from "react";
import { Fab, Icon } from "react-onsenui";

export default function FabExample() {
  return (
    <div>
      <Fab position="bottom right">
        <Icon icon="md-plus"></Icon>
      </Fab>
      <Fab position="top right">
        <Icon icon="fa-dove"></Icon>
      </Fab>
      <Fab position="bottom left">
        <Icon icon="md-zoom-in" rotate="90"></Icon>
      </Fab>
    </div>
  );
}
