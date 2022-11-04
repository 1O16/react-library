import React from "react";
import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 2 }}
      style={{
        backgroundColor: "purple",
        height: 100,
        width: 100,
        position: "absolute",
        left: 55,
        top: 55,
      }}
    />
  );
}
