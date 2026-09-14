import React from "react";
import { motion } from "framer-motion";

export const revealContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const revealChildVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const revealViewport = { once: true, amount: 0.2 };

export function RevealItem({ children, className = "", as = "div", ...props }) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={revealChildVariants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default function ScrollReveal({
  children,
  className = "",
  as = "div",
  staggerChildren = 0.15,
  delayChildren = 0.1,
  ...props
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={{
        ...revealContainerVariants,
        show: {
          ...revealContainerVariants.show,
          transition: { staggerChildren, delayChildren },
        },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
