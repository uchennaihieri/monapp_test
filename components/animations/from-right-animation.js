import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const FromRightAnimation = ({ children }) => {
  const ref = useRef(null);
  const control = useAnimationControls();
  const inView = useInView(ref, {
    once: true,
    margin: "0px 400px -50px 0px",
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  });

  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 200,
        y: 0,
        filter: "blur(3px)",
      }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 1 }}
      animate={control}
      ref={ref}
    >
      {children}
    </motion.section>
  );
};

export default FromRightAnimation;
