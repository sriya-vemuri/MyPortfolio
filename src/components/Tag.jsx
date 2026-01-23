const Tag = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'tag',
    accent: 'tag tag-accent',
  };

  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
