import React from "react";
import ButtonExample from "./ButtonExample";
import GridExample from "./GridExample";
import LoadingButtonsTransition from "./LoadingButtonsTransition";
import IconCheckboxes from "./IconCheckboxes";
import TemporaryDrawer from "./TemporaryDrawer";
import VirtualizedList from "./VirtualizedList";
import ControlledTreeView from "./ControlledTreeview";

export default function MaterialUIExample() {
  return (
    <div>
      <TemporaryDrawer />
      <ButtonExample />
      <GridExample />
      <LoadingButtonsTransition />
      <IconCheckboxes />
      <VirtualizedList />
      <ControlledTreeView />
    </div>
  );
}