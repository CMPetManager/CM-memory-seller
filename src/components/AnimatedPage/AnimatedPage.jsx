import { motion } from 'framer-motion';

const animations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'linear' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'linear' },
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
