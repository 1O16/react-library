import React from "react";
import { motion } from "framer-motion";

export default function Scale() {
  return (
    <motion.div
      whileHover={{ scale: 4 }}
      whileTap={{ scale: 3.8 }}
      transition={{ duration: 0.1 }}
      style={{
        height: 100,
        width: 300,
        backgroundColor: "tomato",
        borderRadius: 10,
        position: "absolute",
        left: 700,
        top: 300,
      }}
    />
  );
}
