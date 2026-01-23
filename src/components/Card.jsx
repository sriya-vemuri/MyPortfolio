import { motion } from 'framer-motion';

const Card = ({ children, hover = false, delay = 0, className = '' }) => {
  const baseClasses = 'glass-card';
  const hoverClasses = hover ? 'glass-card-hover' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5 }}
      className={`${baseClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
