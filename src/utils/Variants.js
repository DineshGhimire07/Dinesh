// src/utils/Variants.js

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between child animations
      delayChildren: 0.2,    // Initial delay before first child animates
    }
  }
};

export const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};