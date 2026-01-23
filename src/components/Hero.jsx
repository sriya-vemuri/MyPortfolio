import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import heroPhoto from '../assets/images/herophoto.jpg';

const Hero = () => {
  const handleResumeDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(portfolioData.personal.resume);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch resume: ${response.status} ${response.statusText}`);
      }
      
      // Check if response is actually a PDF
      const contentType = response.headers.get('content-type');
      if (contentType && !contentType.includes('application/pdf')) {
        console.warn('Warning: Response is not a PDF file');
      }
      
      const blob = await response.blob();
      
      // Verify blob is not empty
      if (blob.size === 0) {
        throw new Error('Downloaded file is empty');
      }
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sriya_Vemuri_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again or contact me directly.');
      // Fallback: open in new tab
      window.open(portfolioData.personal.resume, '_blank');
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="orb orb-accent w-[600px] h-[600px] -top-40 -right-40"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="orb orb-purple w-[500px] h-[500px] top-1/2 -left-40"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="orb orb-warm w-[400px] h-[400px] bottom-20 right-1/4"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Photo - Left side with glassmorphism frame */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-purple/10 to-warm/10 rounded-3xl blur-2xl" />
            
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
              }}
              transition={{ duration: 0.4 }}
              className="relative glass-card p-2"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={heroPhoto}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover image-render-smooth"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2"
              >
                <span className="text-accent font-mono text-sm">Available for work</span>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-purple/30 rounded-br-2xl"
            />
          </div>
        </motion.div>

        {/* Content - Right side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          {/* Intro line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-accent to-transparent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Data Scientist & Full Stack Developer
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-[1.1] text-balance"
          >
            Hi, I'm{' '}
            <span className="gradient-text relative">
              {portfolioData.personal.name.split(' ')[0]}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {portfolioData.personal.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-8 mb-10 justify-center lg:justify-start"
          >
            {portfolioData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="text-4xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-tertiary uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              <span className="flex items-center gap-2">
                Let's Connect
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
