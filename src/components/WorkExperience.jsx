import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const WorkExperience = () => {
  return (
    <section id="experience" className="section-wrapper bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm">02</span>
            <span className="w-12 h-[1px] bg-accent/50" />
            <span className="text-text-tertiary uppercase tracking-widest text-sm">Career</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Work <span className="gradient-text-warm">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple to-warm hidden md:block" />

          <div className="space-y-8">
            {portfolioData.workExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                    className="w-4 h-4 rounded-full bg-background border-2 border-accent shadow-glow-sm"
                  />
                </div>

                {/* Card */}
                <div className="glass-card glass-card-hover p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          index === 0 ? 'bg-accent/10 text-accent' : 'bg-purple/10 text-purple'
                        }`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                            {exp.company}
                          </h3>
                          <p className={`font-semibold ${index === 0 ? 'text-accent' : 'text-purple'}`}>
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-text-tertiary text-sm flex items-center gap-2 ml-13">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface text-text-secondary text-sm font-medium border border-border">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.05 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          index === 0 ? 'bg-accent' : 'bg-purple'
                        }`} />
                        <span className="text-text-secondary leading-relaxed text-sm">
                          {achievement}
                        </span>
                      </motion.li>
                    )
                    /*{exp.achievements.length > 4 && (
                     <li className="text-text-muted text-sm ml-4">
                        +{exp.achievements.length - 4} more achievements
                      </li>
                    )*/
                  )}
                  </ul>


                  {/* Technologies */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                          className="tag text-xs"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
