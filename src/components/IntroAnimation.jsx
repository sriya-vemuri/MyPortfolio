import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(2), 1500);
    const timer2 = setTimeout(() => setPhase(3), 3000);
    const timer3 = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const name = "Sriya Vemuri";
  const tagline = "Data Scientist & Analytics Engineer";

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const containerVariants = {
    exit: {
      clipPath: 'circle(0% at 50% 50%)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        variants={containerVariants}
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {/* Animated background orbs - fuchsia/purple */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.3, 0.2] }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, transparent 70%)' }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 0.25, 0.2] }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)' }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0.8], opacity: [0, 0.2, 0.15] }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(240, 171, 252, 0.25) 0%, transparent 70%)' }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-grid"
        />

        {/* Animated lines - fuchsia to purple */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '200%', opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, delay: i * 0.2, ease: 'easeInOut' }}
              className="absolute h-px"
              style={{
                top: `${20 + i * 15}%`,
                width: '100%',
                background: 'linear-gradient(90deg, transparent, #d946ef, #a855f7, transparent)',
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-tertiary text-sm uppercase tracking-[0.3em] mb-6 font-mono"
          >
            ✨ Welcome to ✨
          </motion.p>

          {/* Name - fuchsia/purple gradient */}
          <div className="overflow-hidden mb-6">
            <motion.h1 
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
              style={{ perspective: '1000px' }}
            >
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${char === ' ' ? 'w-4 sm:w-6 md:w-8' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, #d946ef 0%, #e879f9 30%, #a855f7 70%, #c084fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Underline - fuchsia to purple */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 w-48 sm:w-64 md:w-80 mx-auto rounded-full mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, #d946ef, #a855f7, #c4b5fd, transparent)' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-text-secondary text-lg sm:text-xl md:text-2xl font-body"
          >
            {tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-pink text-sm mt-4 uppercase tracking-widest"
          >
            💜 Portfolio ✨
          </motion.p>

          {/* Loading dots - fuchsia/purple gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 flex justify-center"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: i === 0 ? '#d946ef' : i === 1 ? '#a855f7' : '#c4b5fd' }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-accent/40 rounded-tl-3xl" />
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-purple/40 rounded-tr-3xl" />
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
          className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-pink/40 rounded-bl-3xl" />
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-lavender/40 rounded-br-3xl" />

        {/* Exit overlay */}
        <motion.div
          initial={{ scale: 0 }}
          animate={phase === 3 ? { scale: 50 } : { scale: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-background-secondary"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
