// src/Components/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 16 },   
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },    
};

const pageTransition = {
  duration: 0.20,      
  ease: [0.4, 0.0, 0.2, 1], 
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
