import React from "react";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";

export default function Text() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1, color: "green" },
    from: { opacity: 0, color: "red" },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });

  return <animated.h1 style={props}>hello</animated.h1>;
}
