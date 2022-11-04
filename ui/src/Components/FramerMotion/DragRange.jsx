import React from "react";
import { motion } from "framer-motion";

export default function DragRange() {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={{
        backgroundColor: "violet",
        height: 70,
        width: 70,
        position: "absolute",
        left: 300,
        top: 100,
      }}
    />
  );
}
