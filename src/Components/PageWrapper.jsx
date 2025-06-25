// src/Components/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 16 },   // smaller entry slide
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },     // smaller exit lift
};

const pageTransition = {
  duration: 0.20,       // faster but still smooth
  ease: [0.4, 0.0, 0.2, 1], // realistic cubic-bezier easing (ease-in-out)
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
