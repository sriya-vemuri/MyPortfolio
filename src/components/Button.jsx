import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  const MotionComponent = href ? motion.a : motion.button;
  
  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      <span>{children}</span>
    </MotionComponent>
  );
};

export default Button;
