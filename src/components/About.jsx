import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Icons for "What I Do" cards
  const iconMap = {
    '📊': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    '📈': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    '🤖': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    '💻': (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  };

  const accentColors = [
    { bg: 'from-accent/20 to-accent/5', border: 'border-accent/20', text: 'text-accent' },
    { bg: 'from-purple/20 to-purple/5', border: 'border-purple/20', text: 'text-purple' },
    { bg: 'from-warm/20 to-warm/5', border: 'border-warm/20', text: 'text-warm' },
    { bg: 'from-accent/20 to-purple/5', border: 'border-accent/20', text: 'text-accent' },
  ];

  return (
    <section id="about" className="section-wrapper bg-background-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm">01</span>
            <span className="w-12 h-[1px] bg-accent/50" />
            <span className="text-text-tertiary uppercase tracking-widest text-sm">About</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Get to know <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Main Bio Card - Large */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 glass-card glass-card-hover p-8 lg:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">My Story</h3>
                <p className="text-text-tertiary text-sm">Background & Journey</p>
              </div>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              {portfolioData.about.bio.split('\n\n').slice(0, 2).map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index}>{paragraph.trim()}</p>
                )
              ))}
            </div>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 glass-card glass-card-hover p-8"
          >
            <div className="h-full flex flex-col">
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">Quick Facts</h3>
              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">Location</p>
                    <p className="text-text-primary font-medium">{portfolioData.personal.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">Education</p>
                    <p className="text-text-primary font-medium">Duke Fuqua MBA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-warm/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">Experience</p>
                    <p className="text-text-primary font-medium">2+ Years</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
                >
                  <span className="font-medium">Get in touch</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* What I Do - 4 cards in a row */}
          {portfolioData.about.whatIDo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="lg:col-span-3 glass-card glass-card-hover p-6 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accentColors[index % 4].bg} flex items-center justify-center mb-5 border ${accentColors[index % 4].border} ${accentColors[index % 4].text} group-hover:scale-110 transition-transform duration-300`}>
                {iconMap[item.icon] || item.icon}
              </div>
              <h4 className="font-display text-lg font-bold text-text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended bio in a card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 glass-card p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-tertiary text-sm uppercase tracking-wider">More about my background</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 text-text-secondary leading-relaxed">
            {portfolioData.about.bio.split('\n\n').slice(2).map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index}>{paragraph.trim()}</p>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
