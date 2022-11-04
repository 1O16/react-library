import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
  const handleClick = () => {
    alert("pressed");
  };
  return (
    <>
      <Button onClick={handleClick} modifier="large--cta">
        Large-Cta
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} disabled="true">
        Disabled
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="light">
        Light
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="quiet">
        Quiet
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="cta">
        Cta
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large--quiet">
        Large-Quiet
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material">
        Material
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material--flat">
        Material-Flat
      </Button>
    </>
  );
}
