import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '', bgClass = 'bg-background' }) => {
  return (
    <section id={id} className={`section-wrapper ${bgClass} ${className} relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
