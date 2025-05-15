"use client";
import type { HTMLMotionProps, Variants } from "framer-motion";
import { motion } from "framer-motion";
import type React from "react";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className,
  delay = 0,
  variants = defaultVariants,
  ...rest
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of the element is in view
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
