"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/fadeIn";
import React from "react";

function FadeInWrapper({children}) {
  return (
    <>
      <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
  >
    {children}
  </motion.div>
  </>
     
  );
}

export default FadeInWrapper;
